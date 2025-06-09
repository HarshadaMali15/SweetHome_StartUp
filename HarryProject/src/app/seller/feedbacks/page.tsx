"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

type Feedback = {
  _id: string;
  rating: number;
  comment: string;
  title: string;
  createdAt: string;
  user: {
    name: string;
  };
  product: {
    name: string;
    images: string[]; // Optional, for thumbnails
  };
};

export default function SellerFeedbacksPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/feedback/seller", {
          credentials: "include",
        });

        if (res.status === 401) {
          router.push("/seller/login"); // Redirect if unauthorized
          return;
        }

        const data = await res.json();
        setFeedbacks(data.feedback || []);
      } catch (err) {
        console.error("Failed to fetch seller feedbacks", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, [router]);

  if (loading) return <div className="p-4">Loading feedbacks...</div>;

  return (
    <div className="p-6 space-y-4">
      {/* Back Button */}
      <button
        className="mb-4 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all"
        onClick={() => router.push("/categories")}
      >
        ← Back to Categories
      </button>
      <h1 className="text-2xl font-bold">Your Product Feedbacks</h1>

      {feedbacks.length === 0 ? (
        <p>No feedbacks yet.</p>
      ) : (
        feedbacks.map((fb) => (
          <Card key={fb._id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{fb.product.name}</h2>
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(fb.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-1">By: {fb.user.name}</p>
              {fb.title && <p className="font-medium mt-2">{fb.title}</p>}
              <p className="mt-1 text-gray-700">{fb.comment}</p>
              <p className="text-xs text-gray-400 mt-2">
                {new Date(fb.createdAt).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
