// controllers/feedbackController.js
import Feedback from "../models/Feedback.js";

export const submitFeedback = async (req, res) => {
  try {
    const { name, email, message, productId, sellerId } = req.body;

    const newFeedback = new Feedback({
      name,
      email,
      message,
      productId,
      sellerId,
    });

    await newFeedback.save();

    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};
