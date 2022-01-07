const { check } = require("express-validator");
const User = require("../models/user");

exports.usersSignup = () => {
  return [
    check("email").isEmail(),
    check("firstName").notEmpty(),
    check("lastName").notEmpty(),
    check("phoneNumber").notEmpty(),
    check("gender").notEmpty(),
  ];
};

exports.checkIfUserExists = async (req, res, next) => {
  const user = await User.findOne({ uid: req.body.uid });
  if (user) {
    res.json({ message: "User already exists" });
  }
  next();
};
