"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { adminLogin } from '../../api/adminServices';
import Navbar from "../../components/Homepage/Navbar";
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, XCircle } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await adminLogin(email, password);
      localStorage.setItem('adminToken', data.token);
      router.push('/admin');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-yellow-100 to-white flex items-center justify-center p-4 relative overflow-hidden pt-20 min-h-screen">
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-300 rounded-full filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2" />

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md relative"
      >
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="relative h-32 bg-yellow-400 flex items-center justify-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h1 className="text-3xl font-bold text-white tracking-tight">Admin Login</h1>
              <p className="text-yellow-50">Enter your credentials</p>
            </motion.div>
          </div>

          <div className="p-8 space-y-6">
            {error && (
              <div className="p-3 bg-red-100 text-red-700 rounded flex items-center gap-2 text-sm">
                <XCircle size={18} />
                {error}
              </div>
            )}

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <label htmlFor="email" className="text-gray-700 flex items-center gap-2">
                <Mail size={18} className="text-yellow-500" />
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 h-12 rounded-md border transition-all duration-200 outline-none focus:ring-2 focus:ring-yellow-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <label htmlFor="password" className="text-gray-700 flex items-center gap-2">
                <Lock size={18} className="text-yellow-500" />
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 h-12 rounded-md border transition-all duration-200 outline-none focus:ring-2 focus:ring-yellow-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <button
                type="submit"
                className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                disabled={loading}
              >
                <LogIn size={20} />
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </motion.div>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
