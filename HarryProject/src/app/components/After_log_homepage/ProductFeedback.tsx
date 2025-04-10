"use client";

import { useState, useEffect, FormEvent } from "react";
import { useParams } from "next/navigation";
import StarRating from "./StarRating"; // Using the updated star rating component
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

interface Feedback {
  _id: string;
  user: { name: string };
  rating: number;
  title?: string;
  comment: string;
  createdAt: string;
}

export default function ProductFeedback() {
  const { productId } = useParams() as { productId: string };

  // States for feedback form
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [error, setError] = useState("");
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch feedback list for the product
  const fetchFeedback = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:5000/api/feedback/product/${productId}`);
      const data = await res.json();
      if (res.ok) {
        setFeedbackList(data.feedback);
      } else {
        setError(data.message || "Error fetching feedback");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong while fetching feedback");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (productId) fetchFeedback();
  }, [productId]);

  // Handle form submission to create new feedback
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitMessage("");

    // Validate inputs
    if (rating === 0 || comment.trim() === "") {
      setError("Please provide both a rating and a comment.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/feedbackRoutes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Ensures cookies/session are sent
        body: JSON.stringify({
          productId,
          rating,
          comment,
          title
        })
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitMessage("Thank you for your feedback!");
        // Clear form fields
        setRating(0);
        setTitle("");
        setComment("");
        // Re-fetch feedback list to include the new entry
        fetchFeedback();
      } else {
        setError(data.message || "Failed to submit feedback.");
      }
    } catch (err: any) {
      setError(err.message || "Server error");
    }
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Customer Feedback</h2>

      {/* Feedback Form */}
      <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded-md">
        <div>
          <label className="block text-sm font-medium mb-1">Rating *</label>
          {/* Updated prop names passed to StarRating */}
          <StarRating 
            rating={rating} 
            onRatingChange={(value: number) => setRating(value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Title (Optional)</label>
          <Input
            type="text"
            placeholder="Feedback title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Comment *</label>
          <Textarea
            placeholder="Write your comment here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {submitMessage && <p className="text-green-600 text-sm">{submitMessage}</p>}
        <Button type="submit">Submit Feedback</Button>
      </form>

      <Separator className="my-6" />

      {/* Display feedback list */}
      <div>
        {loading ? (
          <p>Loading feedback...</p>
        ) : feedbackList.length === 0 ? (
          <p>No feedback available for this product.</p>
        ) : (
          feedbackList.map((fb) => (
            <div key={fb._id} className="border-b py-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold">{fb.user.name}</h4>
                <div className="flex space-x-1">
                  {/* Render stars based on the rating */}
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={`${i < fb.rating ? "text-yellow-500" : "text-gray-300"}`}>
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>
              {fb.title && <h5 className="text-md font-medium">{fb.title}</h5>}
              <p className="text-sm text-gray-600">{fb.comment}</p>
              <p className="text-xs text-gray-400">{new Date(fb.createdAt).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
