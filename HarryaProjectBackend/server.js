import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import sellerRoutes from "./routes/sellerRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import adminRoutes from "./routes/admin.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";

dotenv.config();

// Connect DB
connectDB()
  .then(() => console.log("✅ DB Connected"))
  .catch((err) => console.error("❌ DB error:", err.message));

const app = express();

// Security & Middleware
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://sweet-home-start-up.vercel.app/",
      "https://sweet-home-start-up-s82z.vercel.app"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: process.env.NODE_ENV === "production" ? 100 : 1000,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/feedback", feedbackRoutes);

// Root route for testing
app.get("/", (req, res) => {
  res.send("SweetHome backend is running! Use /api/... endpoints.");
});

// ✅ For Vercel (do not use app.listen)
export default app;
