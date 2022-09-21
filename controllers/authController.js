import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

export const loginPage = (req, res) => {
  res.render("login.ejs", { layout: "login" });
};

export const registerPage = (req, res) => {
  res.render("register.ejs", { layout: "register" });
};

export const registerUser = async (req, res) => {
  try {
    const { fname, mname, lname, email, mobile, password, cpassword } =
      req.body;

    const userEmail = await User.findOne({ email: email });
    const userMobile = await User.findOne({ mobile: mobile });

    if (!userEmail && !userMobile) {
      if (password === cpassword) {
        const userName = `${fname.trim()} ${mname.trim()} ${lname.trim()}`;

        const salt = await bcryptjs.genSaltSync(10);
        const hashedPassword = await bcryptjs.hashSync(password, salt);

        await User.create({
          name: userName,
          email,
          mobile,
          password: hashedPassword,
        });
        req.flash("success", "user created successfully");
        return res.redirect("/auth/login");
      }
      req.flash('error', 'passwords are not matched')
      return res.redirect("/auth/register");
    } else {
      req.flash('error', 'email or mobile is already registered')
      return res.redirect("/auth/register");
    }
  } 
  catch (err) {
    console.log(err.message);
    req.flash("error", "something went wrong please try again");
    return res.redirect("/auth/register");
  }
};

export const loginUser = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    console.log("email and password are required");
    return false;
  }
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("name email password");
    const isPasswordCorrect = await bcryptjs.compareSync(
      password,
      user.password
    );
    if (!isPasswordCorrect) {
      console.log("password is incorrect");
      req.flash("error", "Incorrect email or password");
      return res.redirect("/auth/login");
    }
    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1D",
    });
    return res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .redirect("/");
  } catch (err) {
    console.log(err.message);
    return res.redirect("/auth/login");
  }
};

export const logout = (req, res) => {
  res.clearCookie("access_token");
  req.flash("success", "loggedout");
  return res.redirect("/auth/login");
};
