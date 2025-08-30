"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
<<<<<<< HEAD

export default function RegistrationForm({ onClose, onSwitch }: { onClose: () => void, onSwitch: () => void }) {
  const [isOpen, setIsOpen] = useState(true);
=======
import Link from "next/link";

export default function RegistrationForm({ onClose, onSwitch }: { onClose: () => void, onSwitch: () => void }) {
  const [isOpen, setIsOpen] = useState(true); 
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
<<<<<<< HEAD

=======
 
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

<<<<<<< HEAD
=======
  const validateForm = () => {
    const { name, mobile, email, password, confirmPassword } = formData;

    const nameRegex = /^[A-Za-z\s]{2,}$/;
    if (!nameRegex.test(name)) return "Name must contain only letters and spaces (min 2 characters)";

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile)) return "Mobile number must be 10 digits starting with 6-9";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Invalid email address";

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) return "Password must be at least 6 characters and include a letter, number, and special character";

    if (password !== confirmPassword) return "Passwords do not match";

    return null;
  };

>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

<<<<<<< HEAD
    // Password validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
=======
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
      return;
    }

    try {
<<<<<<< HEAD
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/seller/register`, // ✅ env-based URL
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");

      setSuccess("Registration successful! Please log in.");
      setTimeout(() => onSwitch(), 2000); // switch to login form
=======
      const res = await fetch("http://localhost:5000/api/seller/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setSuccess("Registration successful! Please log in.");
      setTimeout(() => onSwitch(), 2000);
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-[9999]"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg p-8 shadow-xl max-w-md w-full relative"
      >
<<<<<<< HEAD
        {/* Close Button */}
=======
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-yellow-600">Register to Sell</h2>
<<<<<<< HEAD
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

=======
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Register
          </motion.button>

          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <button onClick={onSwitch} className="text-yellow-600 hover:text-yellow-700 transition-colors">
              Sign In
            </button>
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
}
