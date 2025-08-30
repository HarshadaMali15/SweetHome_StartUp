import Feedback from "../models/Feedback.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";

// Create new feedback


export const createFeedback = async (req, res) => {
  try {
    const { productId, rating, comment, title } = req.body;
    const userId = req.user._id;  // Assuming user info is added by auth middleware

    // Verify the product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    console.log("product.sellerId =>", product.sellerId);
    // Optional: Verify the user has purchased this product
    const hasOrdered = await Order.findOne({
      user: userId,
      'items.product': productId,
      status: "Successful"  // Only allow feedback for completed orders
    });

    if (!hasOrdered) {
      return res.status(403).json({ 
        message: "You can only provide feedback for products you've purchased",
        verified: false
      });
    }

    // Create new feedback
    const feedback = new Feedback({
      user: userId,
      product: productId,
      seller: product.sellerId, // Link to the seller from product
      rating,
      comment,
      title: title || "",
      verified: true
    });

    await feedback.save();

    res.status(201).json({
      success: true,
      feedback,
      message: "Thank you for your feedback!"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to submit feedback",
      error: error.message
    });
  }
};

// Get all feedback for a specific product
export const getProductFeedback = async (req, res) => {
  try {
    const { productId } = req.params;
    
    const feedback = await Feedback.find({ product: productId })
      .populate('user', 'name') // Only get user name, not password etc.
      .sort({ createdAt: -1 });  // Show newest feedback first
    
    res.status(200).json({
      success: true,
      count: feedback.length,
      feedback
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching product feedback",
      error: error.message
    });
  }
};

// Get all feedback for a seller's products
export const getSellerFeedback = async (req, res) => {
  try {
    const sellerId = req.seller._id;  // Assuming seller auth middleware
    
    const feedback = await Feedback.find({ seller: sellerId })
      .populate('user', 'name')
      .populate('product', 'name images')
      .sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: feedback.length,
      feedback
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching seller feedback",
      error: error.message
    });
  }
};

// Get all feedback for the logged in user
export const getUserFeedback = async (req, res) => {
  try {
    const userId = req.user._id;  // From auth middleware
    
    const feedback = await Feedback.find({ user: userId })
      .populate('product', 'name images')
      .sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: feedback.length,
      feedback
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching your feedback",
      error: error.message
    });
  }
};

// Delete feedback (user can delete their own feedback)
export const deleteFeedback = async (req, res) => {
  try {
    const { feedbackId } = req.params;
    const userId = req.user._id;
    
    const feedback = await Feedback.findById(feedbackId);
    
    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: "Feedback not found"
      });
    }
    
    // Ensure user owns this feedback
    if (feedback.user.toString() !== userId.toString()) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete this feedback"
      });
    }
    
    await Feedback.findByIdAndDelete(feedbackId);
    
    res.status(200).json({
      success: true,
      message: "Feedback deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting feedback",
      error: error.message
    });
  }
};