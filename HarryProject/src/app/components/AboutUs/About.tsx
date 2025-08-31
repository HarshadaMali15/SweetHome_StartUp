"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import Navbar from "../Homepage/Navbar"

export default function About() {
  const [count, setCount] = useState({ years: 0, products: 0, customers: 0 })
  const [expanded, setExpanded] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => ({
        years: prevCount.years < 10 ? prevCount.years + 1 : 10,
        products: prevCount.products < 500 ? prevCount.products + 25 : 500,
        customers: prevCount.customers < 10000 ? prevCount.customers + 500 : 10000,
      }))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/1.png"
          alt="Homemade products"
          fill
          className="absolute inset-0 z-0 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">About SweetHome</h1>
          <p className="text-xl">Empowering Homes, Sharing Goodness</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 md:px-0">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Vision</h2>
            <p className="text-gray-600 mb-4">
              To build a vibrant ecosystem where homemade products crafted by talented individuals—especially housewives and home-based artisans—are celebrated and easily accessible.
            </p>
            <ul className="space-y-2">
              {["Empowerment", "Authenticity", "Community"].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <Check className="mr-2 text-fresh-yellow-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              To create a platform that supports home-based creators by enabling them to showcase and sell their unique handmade products with pride and ease.
            </p>
            <div className="bg-fresh-yellow-100 p-4 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-800 mb-2">Our Commitment</h3>
              <p className="text-gray-700">
                We are committed to creating economic opportunities for families and ensuring every product tells a story of passion and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Counter */}
      <section className="bg-fresh-yellow-50 py-16">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { label: "Years of Empowering Homes", value: count.years },
            { label: "Homemade Products", value: count.products },
            { label: "Happy Customers", value: count.customers.toLocaleString() },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-fresh-yellow-500 mb-2">{item.value}+</h3>
              <p className="text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4 md:px-0">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Homemade Moments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "/2.jpg", alt: "Makers at Work" },
              { src: "/3.jpg", alt: "Freshly Made Delights" },
              { src: "/4.jpg", alt: "Happy Families" },
            ].map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md group">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <p className="text-white text-lg font-semibold">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="bg-gray-50 py-16 px-4 md:px-0">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Transparent Sourcing",
              content: "Every product on SweetHome is sourced directly from its maker.",
              details: "No middlemen—just real people crafting with love."
            },
            {
              title: "Empowering Homemakers",
              content: "We proudly support home-based entrepreneurs.",
              details: "We offer training, visibility, and fair pricing."
            },
            {
              title: "Trusted Quality",
              content: "Handmade doesn’t mean compromise.",
              details: "Each product is verified for hygiene & quality."
            },
            {
              title: "Customer First",
              content: "We value your trust and aim for 100% satisfaction.",
              details: "Enjoy easy returns and transparent service."
            }
          ].map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600">{p.content}</p>
              {expanded === i && <p className="text-gray-600 mt-2">{p.details}</p>}
              <button 
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="inline-flex items-center mt-4 text-fresh-yellow-600 hover:text-fresh-yellow-700"
              >
                {expanded === i ? "Show Less" : "Learn more"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
