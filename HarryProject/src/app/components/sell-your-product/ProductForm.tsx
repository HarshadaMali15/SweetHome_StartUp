"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import { categories, subcategories } from "./categories";
import { useRouter } from "next/navigation";

export default function ProductForm() {
<<<<<<< HEAD
  const router = useRouter();

=======
  // Remove temporary sellerId since backend will derive it from the auth token
  // const sellerId = "SELLER_ID_FROM_AUTH";
  const router = useRouter();
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    discountPrice: "",
    stock: "",
    unit: "piece",
    deliveryTime: "2-3 days",
    category: "",
    subcategory: "",
    returnPolicy: "No Return",
    paymentMode: "COD",
    sellerName: "Auto-filled",
    contact: "",
    location: "",
<<<<<<< HEAD
    images: [] as File[],
=======
    images: [] as File[], // Now stores an array of files
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
  });

  // Handle text, select, and textarea inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
<<<<<<< HEAD

  const handleBack = () => {
    router.push("/categories");
  };
=======
  const handleBack = () => {
    router.push("/categories") // Back to the main categories page
  }
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setProduct((prev) => ({
        ...prev,
<<<<<<< HEAD
        [name]: Array.from(files),
=======
        [name]: Array.from(files), // Convert FileList to an array
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    // Append all non-image fields
    Object.keys(product).forEach((key) => {
      if (key !== "images" && product[key as keyof typeof product]) {
        formData.append(key, product[key as keyof typeof product] as string);
      }
    });

<<<<<<< HEAD
=======
    // Do not append sellerId from the client. The backend should extract it from the auth token.
    // formData.append("sellerId", sellerId);

>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
    // Append each image file
    product.images.forEach((file) => {
      formData.append("images", file);
    });

    try {
<<<<<<< HEAD
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products/add`,
        {
          method: "POST",
          body: formData,
          credentials: "include",
        }
      );
=======
      const response = await fetch("http://localhost:5000/api/products/add", {
        method: "POST",
        body: formData,
        credentials: "include", // Ensure cookies (auth token) are sent
      });
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f

      const data = await response.json();
      console.log("Response:", data);

      if (response.ok) {
        alert("Product added successfully!");
<<<<<<< HEAD
        router.push("/seller-dashboard"); // redirect after success
=======
        router.push("/seller/product"); // ✅ redirect to another page
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting product:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-white pt-16 pb-16">
<<<<<<< HEAD
        {/* Back to Category Button */}
        <div className="absolute pt-16 top-4 left-14">
=======
         {/* Back to Category Button */}
         <div>
         <div className="absolute pt-16 top-4 left-14">
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
          <button
            onClick={handleBack}
            className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all duration-300"
          >
            ⬅ Back to Categories
          </button>
        </div>
<<<<<<< HEAD
=======
         </div>
         
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f

        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold text-yellow-800 text-center mb-6">
            Add Your Product
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <textarea
              name="description"
              placeholder="Product Description"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            ></textarea>
            <input
              type="number"
              name="price"
<<<<<<< HEAD
              placeholder="Price"
=======
              placeholder="Discount Price"
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <input
              type="number"
              name="discountPrice"
<<<<<<< HEAD
              placeholder="Discount Price (Optional)"
=======
              placeholder="Price"
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <input
              type="number"
              name="stock"
              placeholder="Stock Quantity"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />

            <select
              name="unit"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="piece">Piece</option>
              <option value="kg">Kg</option>
              <option value="liter">Liter</option>
            </select>

            <select
              name="deliveryTime"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="2-3 days">2-3 Days</option>
              <option value="Same-day">Same-day</option>
              <option value="1 week">1 Week</option>
            </select>

            <select
              name="category"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
<<<<<<< HEAD
                <option key={category.name} value={category.name}>
=======
                <option key={category.id} value={category.id}>
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
                  {category.name}
                </option>
              ))}
            </select>

            <select
              name="subcategory"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              disabled={!product.category}
              required
            >
              <option value="">Select Subcategory</option>
              {product.category &&
<<<<<<< HEAD
                subcategories[product.category]?.map((sub: string) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
=======

              
subcategories[product.category]?.map((sub) => (
  <option key={sub.name} value={sub.name}>
    {sub.name}
  </option>
))}
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
            </select>

            <select
              name="returnPolicy"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="No Return">No Return</option>
              <option value="7 Days Return">7 Days Return</option>
              <option value="30 Days Return">30 Days Return</option>
            </select>

            <select
              name="paymentMode"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="COD">COD</option>
              <option value="Online Payment">Online Payment</option>
              <option value="Both">Both</option>
            </select>

            <input
              type="text"
              name="contact"
              placeholder="Seller Contact Number"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Seller Location"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />

            <input
              type="file"
              name="images"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />

            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700"
            >
              Submit Product
            </button>
          </form>
<<<<<<< HEAD
=======
          
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
        </div>
      </div>
    </div>
  );
}
