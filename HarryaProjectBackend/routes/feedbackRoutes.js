import express from "express";
import {
  createFeedback,
  getProductFeedback,
  getSellerFeedback,
  getUserFeedback,
  deleteFeedback
} from "../controllers/feedbackController.js";

// Import middlewares
import { authMiddleware as userProtect } from "../controllers/authController.js"; // for users
import { protect as sellerProtect } from "../middlewares/authMiddleware.js"; // for sellers

const router = express.Router();

/**
 * User routes - Requires user login
 */
router.post("/", userProtect, createFeedback);              // Create feedback
router.get("/me", userProtect, getUserFeedback);            // Get user's own feedback
router.delete("/:feedbackId", userProtect, deleteFeedback); // Delete user's own feedback

/**
 * Public route - Anyone can view feedback on a product
 */
router.get("/product/:productId", getProductFeedback);      // View product feedback

/**
 * Seller route - Requires seller login
 */
router.get("/seller", sellerProtect, getSellerFeedback);    // Get feedback for seller's products

export default router;
