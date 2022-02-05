const express = require("express");
const transactionsController = require("../../controllers/transactionsController");
const auth = require("../../modules/auth");
const router = express.Router();

router.get("/", auth.verifyToken, transactionsController.getTransactions);
router.post("/", auth.verifyToken, transactionsController.saveTransactions);

module.exports = router;
