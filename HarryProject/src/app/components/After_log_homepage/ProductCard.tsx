import Link from "next/link";
import Image from "next/image";
<<<<<<< HEAD

=======
import Navbar from "../After_log_homepage/Navbar"
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
interface ProductCardProps {
  id: string;
  name: string;
  images: string[];
  price: number;
  discountPrice?: number;
  category: string;
  subcategory: string;
<<<<<<< HEAD
=======
  // rating?: number; // Add rating prop
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
}

export default function ProductCard({
  id,
  name,
  images,
  price,
  discountPrice,
  category,
  subcategory,
<<<<<<< HEAD
}: ProductCardProps) {
  const discountPercentage = discountPrice
    ? Math.round(((price - discountPrice) / price) * 100)
    : 0;

  // ✅ Use environment variable for backend URL
  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "https://sweet-home-start-up.vercel.app";

  return (
=======
  // rating // Add rating prop
}: ProductCardProps) {
  const discountPercentage = discountPrice ? Math.round((( price - discountPrice ) / price) * 100) : 0;

  return (

>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
    <Link
      href={`/shop/${category}/${subcategory}/${id}`}
      className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition w-[90%] border"
    >
      {/* Product Image */}
<<<<<<< HEAD
      <div className="relative h-48 group">
        <Image
          src={
            images[0]
              ? `${API_URL}${images[0]}`
              : "/placeholder.svg"
          }
          alt={name}
          fill
          className="object-cover transition-opacity group-hover:opacity-80"
=======
      <div className="relative h-48  group">
        <Image
          src={
            images[0]
              ? `http://localhost:5000${images[0]}`
              : "/placeholder.svg"
          }
          alt={name}
          layout="fill"
          objectFit="cover"
          className=" transition-opacity group-hover:opacity-80"
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
        />
      </div>

      {/* Product Info */}
      <div className="flex items-center justify-between bg-gray-100 px-3 py-1.5">
        <div className="text-sm font-medium">Quality Product</div>
        <div className="flex items-center gap-1">
<<<<<<< HEAD
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
=======
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
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
<<<<<<< HEAD
        </div>
      </div>

      <div className="p-3">
        <h3 className="font-bold text-lg">{name}</h3>
        <div className="border-t border-gray-200 mt-2"></div>
      </div>

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

        {/* Color Options */}
=======
          {/* //<span className="text-sm">{rating?.toFixed(1) || "N/A"}</span> */}
        </div>
      </div>
      <div className="p-3 ">
        <h3 className="font-bold text-lg">{name}</h3>
        <div className="border-t border-gray-200 mt-2"></div>
      </div>
      <div className="px-3 pb-2 flex justify-between items-end">
        <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
        <span className="text-xl font-bold">₹{(discountPrice || price).toFixed(0)}</span>
          {price && <span className="text-sm line-through text-gray-500">₹{price.toFixed(0)}</span>}
         
        </div>
        {price && <div className="flex text-green-600 text-sm font-medium">{discountPercentage}% off</div>}
        </div>

        {/* Color Options (static UI element to match design) */}
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 rounded-full bg-black border border-gray-300" />
          <div className="w-5 h-5 rounded-full bg-blue-600 border border-gray-300" />
          <span className="text-xs text-gray-600">+3</span>
        </div>
      </div>
    </Link>
  );
}
