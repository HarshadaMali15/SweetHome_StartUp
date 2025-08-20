// order-summary/page.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Order {
  _id: string;
  items: {
    product: {
      _id: string;
      name: string;
      images: string[];
      deliveryTime: string;
      price: number;
      discountPrice?: number;
    };
    quantity: number;
    price: number;
  }[];
  paymentMethod: string;
  address: string;
  deliveryEstimation: string;
  trackingInfo: string;
  status: string;
  createdAt: string;
  finalAmount?: number;
}

export default function OrderSummaryPage({
  searchParams,
}: {
  searchParams: { orderId?: string };
}) {
  const orderId = searchParams?.orderId;
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!orderId) return;

    const fetchOrder = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/orders/user", {
          credentials: "include",
        });
        const data = await res.json();
        if (data.orders) {
          const foundOrder = data.orders.find((o: Order) => o._id === orderId);
          setOrder(foundOrder || null);
        }
      } catch (error) {
        setMessage("Failed to fetch order details");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  const handleBack = () => router.push("/shop");

  if (loading) return <p>Loading...</p>;
  if (!order) return <p>Order not found.</p>;

  const fallbackGrandTotal = order.items.reduce(
    (total, item) =>
      total + item.quantity * (item.product.discountPrice || item.product.price),
    0
  );

  const grandTotal = order.finalAmount ?? fallbackGrandTotal;

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handleBack}
          className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
        >
          ← Back to Homepage
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-4">Order Summary</h1>

      <div className="border p-4 rounded mb-6">
        <h2 className="text-xl font-semibold">Order ID: {order._id}</h2>
        <p>Status: {order.status}</p>
        <p>Payment Method: {order.paymentMethod}</p>
        <p>Shipping Address: {order.address}</p>
        <p>Delivery Estimation: {order.deliveryEstimation}</p>
      </div>

      <div className="space-y-4">
        {order.items.map((item) => (
          <div
            key={item.product._id}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 border p-4 rounded"
          >
            <div className="relative h-20 w-20">
              <Image
                src={`http://localhost:5000${item.product.images[0]}`}
                alt={item.product.name}
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-medium">{item.product.name}</h2>
              <p>
                Unit Price: ₹
                {(item.product.discountPrice || item.product.price).toFixed(2)}
              </p>
              <p>Quantity: {item.quantity}</p>
              <p>
                Line Total: ₹
                {(
                  item.quantity *
                  (item.product.discountPrice || item.product.price)
                ).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-6 border-t pt-4">
        <h2 className="text-xl font-semibold">
          Grand Total: ₹{grandTotal.toFixed(2)}
        </h2>
      </div>

      <div className="mt-8">
        <Button
          onClick={() =>
            alert(
              `Your order is placed successfully.\nTracking Number: ${order.trackingInfo}`
            )
          }
        >
          Track Order
        </Button>
      </div>
    </div>
  );
}
