import express from "express";
import {
  getSellerProfile,
  registerSeller,
  loginSeller,
  logoutSeller,
  checkAuth,
} from "../controllers/sellerController.js";
import {
  createOrder,
  getUserOrders,
  getSellerOrders,
} from "../controllers/orderController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Seller auth routes
router.post("/register", registerSeller);
router.post("/login", loginSeller);
router.post("/logout", logoutSeller);
router.get("/check-auth", checkAuth);
router.get("/profile", protect, getSellerProfile);

// Orders (seller side)
router.get("/seller", protect, getSellerOrders);

// Protected test route
router.get("/protected-route", checkAuth, (req, res) => {
  res.json({ message: "Access granted" });
});

export default router;
