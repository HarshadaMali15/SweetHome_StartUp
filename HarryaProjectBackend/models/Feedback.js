// models/Feedback.js
import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    sellerId: { type: mongoose.Schema.Types.ObjectId,ref: "Seller",required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", feedbackSchema);
