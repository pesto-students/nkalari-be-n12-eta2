const Transaction = require("../models/transaction");
const stripe = require('stripe')('sk_test_51KMpLhSAIpv25iqwTwdQomvy8WjV9HdFzi5kQu4xnqY9DXaAg4kTVWNMfAMcuev6Ss1v5FjNVuoc21MFLcb7ccDF00c7jmYaSh');


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
    try{
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: req.params.price_id,
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `http://localhost:3001/login?success=true`,
        cancel_url: `http://localhost:3001/login??canceled=true`,
      });
      // res.json({
      //   success: true,
        
      // }); 
      res.redirect(303, session.url);

    }
    catch(err){
      console.log(err);
      res.status(400).json({ success: false, err });
    }
   

   
    // res.redirect(303, session.url);
  },
};
