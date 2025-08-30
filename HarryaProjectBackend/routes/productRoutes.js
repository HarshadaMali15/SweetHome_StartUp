import express from "express";
import {
  addProduct,
  getMyProducts,
  getProductById,
  getProducts,
  deleteProduct,
  updateProduct
} from "../controllers/productController.js";
import { upload, uploadToCloudinary } from "../middlewares/upload.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Add Product with Cloudinary Upload
router.post("/add", protect, upload.array("images", 5), async (req, res, next) => {
  try {
    // Upload all images to Cloudinary
    const imageUrls = [];
    for (const file of req.files) {
      const result = await uploadToCloudinary(file.buffer, "sweethome/products");
      imageUrls.push(result.secure_url);
    }

    // Attach image URLs to request body so controller can use
    req.body.images = imageUrls;

    next(); // go to controller (addProduct)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}, addProduct);

// Get all products
router.get("/", getProducts);

// Get my products
router.get("/mine", protect, getMyProducts);

// Get product by id
router.get("/:productId", getProductById);

// Delete my product
router.delete("/mine/:productId", protect, deleteProduct);

// Update product with Cloudinary Upload
router.put("/update/:productId", protect, upload.array("images", 5), async (req, res, next) => {
  try {
    const imageUrls = [];
    for (const file of req.files) {
      const result = await uploadToCloudinary(file.buffer, "sweethome/products");
      imageUrls.push(result.secure_url);
    }

    req.body.images = imageUrls;

    next(); // go to controller (updateProduct)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}, updateProduct);

export default router;
