"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface OrderItem {
  product?: {
    _id: string;
    name?: string;
    images?: string[] | null;
    price?: number;
    discountPrice?: number;
    address?: string;
    mobile?: string;
  } | null;
  quantity: number;
  // line-item total or fallback from backend
  price: number;
}

interface Order {
  _id: string;
  items: OrderItem[];
  address?: string;
  deliveryEstimation: string;
  trackingInfo: string;
  status: string;
  createdAt: string;
  user: {
    address?: string;
    mobile?: string;
    name?: string;
  };
}

export default function SellerOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const fetchSellerOrders = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/seller/seller", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) {
        setOrders(Array.isArray(data.orders) ? data.orders : []);
        // TEMP: inspect problematic items
        // console.log("Orders:", data.orders);
      } else {
        setMessage(data.message || "Failed to fetch orders");
      }
    } catch (error: any) {
      setMessage(error?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSellerOrders();
  }, []);

  const handleBack = () => {
    router.push("/categories");
  };

  if (loading) return <p>Loading orders...</p>;
  if (message) return <p className="text-red-500">{message}</p>;
  if (!orders.length) return <p>No orders found for your products.</p>;

  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handleBack}
          className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
        >
          ← Back to Categories
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-4">My Sold Orders</h1>

      {orders.map((order) => (
        <div key={order._id} className="border p-4 rounded mb-4">
          <h2 className="text-xl font-semibold">Order ID: {order._id}</h2>
          <p>Status: {order.status}</p>
          <p>Delivery Estimation: {order.deliveryEstimation}</p>

          <p>
            <span className="font-medium">User: </span>
            {order.user?.name || "N/A"}
          </p>
          <p>
            <span className="font-medium">Shipping Address: </span>
            {order.address || order.user?.address || "N/A"}
          </p>
          <p>
            <span className="font-medium">Mobile No: </span>
            {order.user?.mobile || "N/A"}
          </p>

          <div className="mt-4">
            {order.items.map((item, idx) => {
              const product = item.product || null;
              const key = product?._id ?? `${order._id}-${idx}`;

              // Fallback card when product is missing (deleted/unavailable)
              if (!product) {
                return (
                  <div
                    key={key}
                    className="flex items-center space-x-4 border p-2 rounded mb-2"
                  >
                    <div className="h-16 w-16 flex items-center justify-center bg-gray-200 rounded">
                      <span className="text-xs text-gray-500">No Product</span>
                    </div>
                    <div>
                      <p className="font-medium text-red-500">
                        Product unavailable
                      </p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ₹{(item.price ?? 0).toFixed(2)}</p>
                    </div>
                  </div>
                );
              }

              const hasImage = Array.isArray(product.images) && product.images.length > 0;
              const imageSrc = hasImage
                ? `http://localhost:5000${product.images![0]}`
                : null;

              const unitPrice =
                (product.discountPrice ?? product.price ?? item.price ?? 0);

              return (
                <div
                  key={key}
                  className="flex items-center space-x-4 border p-2 rounded mb-2"
                >
                  <div className="relative h-16 w-16">
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={product.name ?? "Product image"}
                        fill
                        className="object-cover rounded"
                      />
                    ) : (
                      <div className="h-16 w-16 flex items-center justify-center bg-gray-200 rounded">
                        <span className="text-xs text-gray-500">No Image</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <p className="font-medium">
                      {product.name ?? "Unnamed product"}
                    </p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ₹{unitPrice.toFixed(2)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
