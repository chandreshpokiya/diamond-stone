import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    console.log("Access token is missing");
    req.flash("error", "login required");
    return res.redirect("/auth/login");
  }
  return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log("invalid token");
      req.flash("error", "Invalid token! login again");
      return res.redirect("/auth/login");
    }
    req.user = decoded;
    req.flash("success", "Authenticated success");
    return next();
  });
};
