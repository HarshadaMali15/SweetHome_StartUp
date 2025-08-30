
import express from "express";
<<<<<<< HEAD
import {getSellerProfile, registerSeller, loginSeller, logoutSeller, checkAuth } from "../controllers/sellerController.js";
import { protect } from "../middlewares/authMiddleware.js"; // Add authentication middleware 
=======
import { createOrder, getUserOrders, getSellerOrders } from "../controllers/orderController.js";
import {getSellerProfile, registerSeller, loginSeller, logoutSeller, checkAuth } from "../controllers/sellerController.js";
import { protect } from "../middlewares/authMiddleware.js"; 
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f

const router = express.Router();
router.post("/register", registerSeller);
router.post("/login", loginSeller);
<<<<<<< HEAD
router.post("/logout", logoutSeller);
router.get("/check-auth", checkAuth);
router.get("/profile", protect, getSellerProfile);

=======

router.post("/logout", logoutSeller);
router.get("/check-auth", checkAuth);
router.get("/profile", protect, getSellerProfile);
router.get("/seller", protect, getSellerOrders);
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
router.get("/protected-route", checkAuth, (req, res) => {
  res.json({ message: "Access granted" });
  
});

export default router;



