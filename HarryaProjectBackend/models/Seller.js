// models/Seller.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
<<<<<<< HEAD
import { v4 as uuidv4 } from 'uuid'; // Use import instead of require
const sellerSchema = new mongoose.Schema(
  {
    sellerId: { type: String, unique: true, default: uuidv4 }, // Auto-generate sellerId
=======
import { v4 as uuidv4 } from "uuid";

const sellerSchema = new mongoose.Schema(
  {
    sellerId: { type: String, unique: true, default: uuidv4 },
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
<<<<<<< HEAD
=======
    upiId: { type: String }, 
    bankDetails: {
      accountHolderName: { type: String },
      accountNumber: { type: String },
      ifscCode: { type: String },
      bankName: { type: String },
    },
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
  },
  { timestamps: true }
);

// Hash password before saving
sellerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const Seller = mongoose.model("Seller", sellerSchema);
<<<<<<< HEAD
export default Seller;
=======
export default Seller;
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
