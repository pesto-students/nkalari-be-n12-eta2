const { check } = require("express-validator");
const User = require("../models/user");

exports.validate = () => {
  return [
    check("email").isEmail().optional({ checkFalsy: true }),
    check("firstName").notEmpty(),
    check("lastName").notEmpty(),
    check("gender").notEmpty(),
    check("profileImageUrl").isURL().optional({ checkFalsy: true }),
  ];
};

exports.checkIfUserExists = async (req, res, next) => {
  const user = await User.findOne({ uid: req.body.uid });
  if (user) {
    res.json({ message: "User already exists", exists: true });
  }
  next();
};
