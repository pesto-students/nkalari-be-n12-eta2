var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var transactionSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["top_up", "gift", "superchat"],
      required: true,
    },
    diamonds: { type: Number, required: true },
    status: { type: String, enum: ["Successful", "Failed", "Pending"] },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    giftName: { type: String },
    sentTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
