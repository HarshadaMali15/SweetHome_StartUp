"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Truck, RotateCcw, CreditCard, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  stock: number;
  unit: string;
  deliveryTime: string;
  category: string;
  subcategory: string;
  returnPolicy: string;
  paymentMode: string;
  sellerName: string;
  contact: string;
  location: string;
  images: string[];
}

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.productId as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products/${productId}`
        );
        if (!res.ok) throw new Error("Failed to fetch product details");

        const data = await res.json();
        setProduct(data.product);

        if (data.product.images?.length > 0) {
          setSelectedImage(
            `${process.env.NEXT_PUBLIC_API_URL}${data.product.images[0]}`
          );
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    if (productId) fetchProduct();
  }, [productId]);

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= (product?.stock || 1)) {
      setQuantity(newQuantity);
    }
  };

  const calculateDiscount = () => {
    if (product?.discountPrice && product.price) {
      const discount =
        ((product.discountPrice - product.price) / product.discountPrice) * 100;
      return Math.round(discount);
    }
    return 0;
  };

  const handleAddToCart = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/add`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ productId: product?._id, quantity }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setMessage("Product added successfully!");
        setTimeout(() => router.push("/cart"), 1500);
      } else {
        setMessage(data.message || "Failed to add product");
      }
    } catch (err: any) {
      setMessage(err.message || "Server error");
    }
  };

  if (loading) return <div className="h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!product) return <p className="text-center">No product found.</p>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* product details UI */}
    </div>
  );
}
