const stripe = require("stripe")(
  "sk_test_51KMpLhSAIpv25iqwTwdQomvy8WjV9HdFzi5kQu4xnqY9DXaAg4kTVWNMfAMcuev6Ss1v5FjNVuoc21MFLcb7ccDF00c7jmYaSh"
);
const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
const Transaction = require("../../models/transaction");
const User = require("../../models/user");

const topUps = [
  { amount: 510, diamonds: 2000 },
  { amount: 1020, diamonds: 4000 },
  { amount: 1530, diamonds: 6000 },
  { amount: 3060, diamonds: 10000 },
];

const endpointSecret = "whsec_ENoqTj3k68k33Gny4Egs8TvXVUmH3z4o";

router.post(
  "/",
  bodyParser.raw({ type: "application/json" }),
  async (request, response) => {
    const sig = request.headers["stripe-signature"];
    console.log(request.headers, "head");

    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.async_payment_failed":
        var session = event.data.object;
        // Then define and call a function to handle the event checkout.session.async_payment_failed
        break;
      case "payment_intent.succeeded":
        var session = event.data.object;
        const amount = session.amount / 100;
        const uid = session.metadata.userId;
        const diamonds = topUps.filter((topUp) => topUp.amount === amount)[0]
          .diamonds;
        const user = await User.findOneAndUpdate(
          { uid: uid },
          { $inc: { wallet: diamonds } },
          { new: true }
        );
        body = {
          type: "top_up",
          diamonds: diamonds,
          user: user.id,
          status: "Successful",
        };
        const transaction = await Transaction.create(body);
        break;
      case "checkout.session.completed":
        var session = event.data.object;
        // Then define and call a function to handle the event checkout.session.completed
        break;
      case "checkout.session.expired":
        var session = event.data.object;
        // Then define and call a function to handle the event checkout.session.expired
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);

module.exports = router;
