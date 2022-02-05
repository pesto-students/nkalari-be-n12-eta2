const Transaction = require("../models/transaction");
const stripe = require('stripe')('pk_test_51KMpLhSAIpv25iqwTncXTplomexpZokQ8lKCrj2mH7TKxSYsR9N9vJ2wg9ei92Pgi07vCK9QPoJYO2O0U3XcxmsT00f6tK5ul6');


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

  stripeCheckout: async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: '{{PRICE_ID}}',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `http://localhost:3001/login?success=true`,
      cancel_url: `http://localhost:3001/login??canceled=true`,
    });
  
    res.redirect(303, session.url);
  },
};
