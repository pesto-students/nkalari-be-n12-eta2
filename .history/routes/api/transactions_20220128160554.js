const express = require("express");
const transactionsController = require("../../controllers/transactionsController");
const auth = require("../../modules/auth");
const router = express.Router();

router.get("/", auth.verifyToken, transactionsController.getTransactions);
router.post("/", auth.verifyToken, transactionsController.saveTransactions);
router.post("/create-stripe-api", auth.verifyToken, transactionsController.stripeCheckout);


module.exports = router;
