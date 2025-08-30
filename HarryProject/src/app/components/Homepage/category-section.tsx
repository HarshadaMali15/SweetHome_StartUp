<<<<<<< HEAD
import Image from "next/image" 
import Jwellery from "../../../../public/homePage/jwellery.jpg"
import wooden from "../../../../public/homePage/wooden.webp" 
import paint from "../../../../public/homePage/paint.jpg" 
import candle from "../../../../public/homePage/candle1.jpg" 
import handcraft from "../../../../public/homePage/handcraft.jpg" 
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: 1,
    name: "Candles",
    image: candle,
  },
  {
    id: 2,
    name: "Jwellery",
    image: Jwellery,
  },
  {
    id: 3,
    name: "HandCrafts",
    image: handcraft,
  },
  {
    id: 4,
    name: "WoodWorking",
    image: wooden,
  },
  {
    id: 5,
    name: "Paintings and Arts",
    image: paint,
  },
]

export default function CategorySection() {
=======
"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Food from "../../../../public/homePage/Mango Pickle.jpg"
import Clothing from "../../../../public/homePage/handmade cloth.jpg"
import Accessories from "../../../../public/homePage/trending2.jpg"
import HomeDecor from "../../../../public/homePage/handmade homedecore.jpg"
import OrganicNatural from "../../../../public/homePage/handmade organic.jpg"
import Kids from "../../../../public/homePage/babycloth.jpg"
import paint from "../../../../public/homePage/paint.jpg"
import Gifts from "../../../../public/homePage/gift2.jpg"


const categories = [
  { id: 1, name: "Food", image: Food },
  { id: 2, name: "Clothing", image: Clothing },
  { id: 3, name: "Accessories", image: Accessories },
  { id: 4, name: "Home Decor", image: HomeDecor },
  { id: 5, name: "Organic and Natural", image: OrganicNatural },
  { id: 6, name: "Kids", image: Kids },
  { id: 7, name: "Paintings and Arts", image: paint },
  { id: 8, name: "Gifts", image: Gifts },
]

export default function CategorySection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current
      const scrollAmount = container.offsetWidth // scroll by full visible width
      container.scrollTo({
        left: direction === "left" ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount,
        behavior: "smooth",
      })
    }
  }

>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Category</h2>
<<<<<<< HEAD
          <div className="flex items-center gap-4">
           <Link href={"/sign-up"}>
           <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
              View All
            </button></Link>
            <div className="flex gap-2">
              <button className="p-2 rounded-full border hover:bg-gray-100 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full border hover:bg-gray-100 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-full aspect-square rounded-full overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-105">
               <Link href={"/sign-up"}>
               <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                  priority
                  className="object-cover"
                />
               </Link>
=======
          <div className="flex items-center gap-2">
            <button onClick={() => scroll("left")} className="p-2 rounded-full border hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll("right")} className="p-2 rounded-full border hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Categories */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar"
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="w-[calc(100%/2-1.5rem)] md:w-[calc(100%/3-1.5rem)] lg:w-[calc(100%/4-1.5rem)] flex-shrink-0 flex flex-col items-center group cursor-pointer"
            >
              <div className="relative w-full aspect-square rounded-full overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-105">
                <Link href={"/sign-up"}>
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                    priority
                    className="object-cover"
                  />
                </Link>
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
              </div>
              <h3 className="text-lg font-medium text-center group-hover:text-green-500 transition-colors">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
<<<<<<< HEAD

=======
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
