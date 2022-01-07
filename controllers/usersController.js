const { check, validationResult } = require("express-validator");
const auth = require("../modules/auth");
const User = require("../models/user");

module.exports = {
  signUp: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      const user = await User.create(req.body);
      res.json({
        success: true,
        user,
        message: "User registered successfully",
      });
    } catch (err) {
      console.log(err);
      res.json({ success: false, err });
    }
  },
  login: async (req, res) => {
    try {
      const user = await User.findOne({ uid: req.body.uid });
      if (!user) {
        res.json({ message: "No user found, please sign up" });
      }
      res.json({ success: true, user, message: "User logged in successfully" });
    } catch (err) {
      res.status(400).json({ success: false, err });
    }
  },
};
