const express = require("express");
const usersController = require("../../controllers/usersController");
const auth = require("../../modules/auth");
const middlewares = require("../../modules/middlewares");
const router = express.Router();

// router.post(
//   "/signup",
//   auth.verifyToken,
//   middlewares.usersSignup(),
//   middlewares.checkIfUserExists,
//   usersController.signUp
// );
router.post("/login", auth.verifyToken, usersController.login);
router.put(
  "/",
  auth.verifyToken,
  middlewares.validate(),
  usersController.update
);

module.exports = router;
