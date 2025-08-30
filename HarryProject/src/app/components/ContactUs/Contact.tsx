"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"
import Navbar from "../After_log_homepage/Navbar"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">Get In Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our
            team is ready to answer all your questions.
          </p>
        </motion.div>

        {/* Horizontal Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto mb-12"
        >
          {/* Location Card */}
          <div className="bg-yellow-50 p-6 rounded-xl shadow-md flex items-start space-x-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <MapPin className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Our Location</h3>
              <p className="text-gray-600 text-sm">
                123 Business Avenue, Suite 100<br />
                Pune, 400124
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-yellow-50 p-6 rounded-xl shadow-md flex items-start space-x-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <Phone className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Phone Number</h3>
              <p className="text-gray-600 text-sm">+91 9857829019</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-yellow-50 p-6 rounded-xl shadow-md flex items-start space-x-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <Mail className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Email Address</h3>
              <p className="text-gray-600 text-sm">contact@sweethomestartup.com</p>
            </div>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-yellow-50 p-4 rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25251.95277088606!2d73.78233929999999!3d18.57928025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1744283063186!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-lg"
              title="Company Location"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
