import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userSchema.js';

export const loginPage = (req, res) => {
  res.render('login.ejs');
};

export const registerPage = (req, res) => {
  res.render('register.ejs');
};

export const registerUser = async (req, res) => {
  try {
    const {
      fname, mname, lname, email, mobile, password, cpassword,
    } = req.body;
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

      return res.redirect('/auth/login');
    }
    console.log('passwords are not matched');
    return res.redirect('/auth/register');
  } catch (err) {
    console.log(err.message);
    return res.redirect('/auth/register');
  }
};

export const loginUser = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    console.log('email and password are required');
    return false;
  }
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('name email password');
    const isPasswordCorrect = await bcryptjs.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      console.log('password is incorrect');
      return res.redirect('/auth/login');
    }
    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1D' });
    return res.cookie('access_token', token, {
      httpOnly: true,
    }).status(200).redirect('/');
  } catch (err) {
    console.log(err.message);
    return res.redirect('/auth/login');
  }
};

export const logout = (req, res) => {
  res.clearCookie('access_token');
  return res.redirect('/auth/login');
};
