"use client";

import { useEffect, useState } from "react";
<<<<<<< HEAD
import { useRouter } from "next/navigation";
=======
import { useRouter } from "next/navigation"; // Import useRouter
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
import { motion } from "framer-motion";

// Define TypeScript interface for seller data
interface Seller {
  name: string;
  email: string;
  mobile: string;
  address?: string;
  shopName?: string;
  accountNumber?: string;
  ifscCode?: string;
}

const SellerProfile = () => {
  const [seller, setSeller] = useState<Seller | null>(null);
<<<<<<< HEAD
  const router = useRouter();
=======
  const router = useRouter(); // Initialize router
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f

  useEffect(() => {
    const fetchSellerProfile = async () => {
      try {
<<<<<<< HEAD
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/seller/profile`, 
          {
            method: "GET",
            credentials: "include", // ✅ needed for auth cookies
          }
        );
=======
        const response = await fetch("http://localhost:5000/api/seller/profile", {
          method: "GET",
          credentials: "include",
        });
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f

        const data: Seller = await response.json();
        if (response.ok) setSeller(data);
      } catch (error) {
        console.error("Error fetching seller profile:", error);
      }
    };

    fetchSellerProfile();
  }, []);

  if (!seller) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white py-10 px-6">
      {/* Back Button */}
      <button
<<<<<<< HEAD
        className="mb-4 px-4 py-2 bg-orange-200 text-orange-700 rounded-lg shadow hover:bg-orange-200 transition-all"
=======
        className="mb-4 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all"
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
        onClick={() => router.push("/categories")}
      >
        ← Back to Categories
      </button>

<<<<<<< HEAD
=======

>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
      <motion.div
        className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
<<<<<<< HEAD
        <h2 className="text-3xl font-bold text-yellow-800 text-center mb-6">
          Seller Profile
        </h2>
=======
        <h2 className="text-3xl font-bold text-yellow-800 text-center mb-6">Seller Profile</h2>
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f

        {/* Personal Information */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Personal Information</h3>
          <p><strong>Name:</strong> {seller.name}</p>
          <p><strong>Email:</strong> {seller.email}</p>
          <p><strong>Mobile:</strong> {seller.mobile}</p>
<<<<<<< HEAD
          <p><strong>Address:</strong> {seller.address || "N/A"}</p>
          <p><strong>Shop Name:</strong> {seller.shopName || "N/A"}</p>

          <motion.button
=======
          {/* <p><strong>Address:</strong> {seller.address || "N/A"}</p>
          <p><strong>Shop Name:</strong> {seller.shopName || "N/A"}</p> */}

          {/* <motion.button
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
            className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded-lg shadow hover:bg-yellow-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Edit Profile
<<<<<<< HEAD
          </motion.button>
        </div>

        {/* Bank Account Details */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
=======
          </motion.button> */}
        </div>

        {/* Bank Account Details */}
        {/* <div className="bg-gray-100 p-6 rounded-lg shadow-md">
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Bank Account Details</h3>
          <p><strong>Account Number:</strong> {seller.accountNumber || "N/A"}</p>
          <p><strong>IFSC Code:</strong> {seller.ifscCode || "N/A"}</p>

          <motion.button
            className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded-lg shadow hover:bg-blue-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Update Bank Details
          </motion.button>
<<<<<<< HEAD
        </div>
=======
        </div> */}
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
      </motion.div>
    </div>
  );
};

export default SellerProfile;
