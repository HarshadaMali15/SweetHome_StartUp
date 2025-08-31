import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  images: string[];
  price: number;
  discountPrice?: number;
  category: string;
  subcategory: string;
}

export default function ProductCard({
  id,
  name,
  images,
  price,
  discountPrice,
  category,
  subcategory,
}: ProductCardProps) {
  const discountPercentage = discountPrice
    ? Math.round(((price - discountPrice) / price) * 100)
    : 0;

  // ✅ API_URL use kar (fallback for local dev)
  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  return (
    <Link
      href={`/shop/${category}/${subcategory}/${id}`}
      className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition w-[90%] border"
    >
      {/* Product Image */}
      <div className="relative h-48 group">
        <Image
          src={images[0] ? `${API_URL}${images[0]}` : "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-opacity group-hover:opacity-80"
        />
      </div>

      {/* Product Info */}
      <div className="flex items-center justify-between bg-gray-100 px-3 py-1.5">
        <div className="text-sm font-medium">Quality Product</div>
        <div className="flex items-center gap-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="#FFD700"
              stroke="#FFD700"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm">4.8</span>
        </div>
      </div>

      {/* Name */}
      <div className="p-3">
        <h3 className="font-bold text-lg">{name}</h3>
        <div className="border-t border-gray-200 mt-2"></div>
      </div>

      {/* Price + Color Options */}
      <div className="px-3 pb-2 flex justify-between items-end">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold">
              ₹{(discountPrice || price).toFixed(0)}
            </span>
            {discountPrice && (
              <span className="text-sm line-through text-gray-500">
                ₹{price.toFixed(0)}
              </span>
            )}
          </div>
          {discountPrice && (
            <div className="flex text-green-600 text-sm font-medium">
              {discountPercentage}% off
            </div>
          )}
        </div>

        {/* Color Options (static UI) */}
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 rounded-full bg-black border border-gray-300" />
          <div className="w-5 h-5 rounded-full bg-blue-600 border border-gray-300" />
          <span className="text-xs text-gray-600">+3</span>
        </div>
      </div>
    </Link>
  );
}
