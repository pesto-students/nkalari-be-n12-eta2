const { check, validationResult } = require("express-validator");
const auth = require("../modules/auth");
const User = require("../models/user");

module.exports = {
  update: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      const { firstName, lastName, email, gender } = req.body;
      const user = await User.findOneAndUpdate(
        { uid: req.body.uid },
        {
          firstName,
          lastName,
          email,
          gender,
        }
      );
      res.json({
        success: true,
        user,
        message: "Profile created successfully",
        isOnboardingDone: true
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
        const user = await User.create({
          uid: req.body.uid,
          phoneNumber: req.body.phoneNumber,
        });
        res.json({
          success: true,
          message: "User logged in successfully",
          user,
          isOnboardingDone: false,
        });
      } else if (user && !user.firstName) {
        res.json({
          success: true,
          message: "User logged in successfully",
          user,
          isOnboardingDone: false,
        });
      } else {
        res.json({
          success: true,
          user,
          message: "User logged in successfully",
          isOnboardingDone: true,
        });
      }
    } catch (err) {
      res.status(400).json({ success: false, err });
    }
  },
};
