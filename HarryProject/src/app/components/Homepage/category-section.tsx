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

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Category</h2>
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
