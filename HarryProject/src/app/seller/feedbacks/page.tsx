"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

type Feedback = {
  _id: string;
  rating: number;
  comment: string;
  title?: string;
  createdAt: string;
  user?: {
    name?: string;
  } | null;
  product?: {
    name?: string;
    images?: string[] | null;
  } | null;
};

export default function SellerFeedbacksPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await fetch(`${API_URL}/api/feedback/seller`, {
          credentials: "include",
        });

        if (res.status === 401) {
          router.push("/seller/login");
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
  }, [router, API_URL]);

  if (loading) return <div className="p-4">Loading feedbacks...</div>;

  return (
    <div className="p-6 space-y-4">
      <button
        className="mb-4 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all"
        onClick={() => router.push("/categories")}
      >
        ← Back to Categories
      </button>

      <h1 className="text-2xl font-bold">Your Product Feedbacks</h1>

      {feedbacks.length === 0 ? (
        <Card className="p-6 text-center text-gray-500">
          <p>
            No feedbacks yet. Once customers review your products, they’ll
            appear here 📦✨
          </p>
        </Card>
      ) : (
        feedbacks.map((fb) => (
          <Card key={fb._id}>
            <CardContent className="p-4 space-y-3">
              <div className="flex items-start gap-4">
                {/* Product Image if available */}
                {fb.product?.images?.[0] && (
                  <img
                    src={`${API_URL}${fb.product.images[0]}`}
                    alt={fb.product?.name || "Product image"}
                    className="w-16 h-16 object-cover rounded-md border"
                  />
                )}

                <div className="flex-1">
                  {/* Product Name + Stars */}
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">
                      {fb.product?.name || "Product unavailable"}
                    </h2>
                    <div className="flex items-center gap-1 text-yellow-500">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star
                          key={n}
                          size={16}
                          fill={n <= fb.rating ? "currentColor" : "none"}
                          stroke="currentColor"
                        />
                      ))}
                    </div>
                  </div>

                  {/* User + Title + Comment */}
                  <p className="text-sm text-gray-500 mt-1">
                    By: {fb.user?.name || "Unknown user"}
                  </p>
                  {fb.title && (
                    <p className="font-medium mt-2">{fb.title}</p>
                  )}
                  <p className="mt-1 text-gray-700">{fb.comment}</p>

                  {/* Date */}
                  <p className="text-xs text-gray-400 mt-2">
                    {new Date(fb.createdAt).toLocaleString("en-IN", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
