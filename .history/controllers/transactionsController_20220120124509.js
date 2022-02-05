const Transaction = require("../models/transaction");

module.exports = {
  saveTransactions: async (req, res) => {
    try {
      // req.body = {
      //   type: "gift",
      //   diamonds: 20,
      //   user: "id",
      //   giftName: "rose",
      //   sentTo: "id",
      // };
      const transaction = await Transaction.create(req.body);
      res.json({
        success: true,
        message: "Transaction done successfully",
      });
    } catch (err) {
      console.log(err);
      res
        .status(400)
        .json({ success: false, err, message: "Transaction failed" });
    }
  },

  getTransactions: async (req, res) => {
    try {
      const transactions = await Transaction.find({
        $or: [{ user: req.params.id }, { sentTo: req.params.id }],
      });
      res.json({
        success: true,
        transactions,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, err });
    }
  },
};
