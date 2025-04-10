import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema(
  {
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },
    product: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Product", 
      required: true 
    },
    seller: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Seller", 
      required: true 
    },
    rating: { 
      type: Number, 
      required: true, 
      min: 1, 
      max: 5 
    },
    comment: { 
      type: String, 
      required: true 
    },
    // Optional fields for additional feedback information
    title: { 
      type: String 
    },
    images: [{ 
      type: String 
    }], // Optional: URLs to uploaded images
    verified: { 
      type: Boolean, 
      default: true 
    }, // Whether the user actually purchased the product
  },
  { timestamps: true }
);

const Feedback = mongoose.model("Feedback", FeedbackSchema);
export default Feedback;