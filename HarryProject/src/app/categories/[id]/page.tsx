"use client"

import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { categories, subcategories } from "@/app/components/sell-your-product/categories"
import Navbar from "../../components/sell-your-product/Navbar"

export default function CategoryDetails() {
  const { id } = useParams() as { id: string }
  const router = useRouter()

  const category = categories.find((cat) => cat.id === id)
  const subcategoryList = subcategories[id as keyof typeof subcategories] || []

  if (!category) {
    return <div className="text-center text-red-600">Category not found</div>
  }

  const handleBack = () => {
<<<<<<< HEAD
    router.push("/categories") // Back to the main categories page
  }

  const handleSubcategoryClick = (subcategory: string) => {
    router.push(`/categories/${id}/sell?subcategory=${subcategory}`) // Navigate to the product form
=======
    router.push("/categories")
  }

  const handleSubcategoryClick = (subcategory: string) => {
    router.push(`/categories/${id}/sell?subcategory=${subcategory}`)
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-white">
<<<<<<< HEAD
      <Navbar/>
=======
      <Navbar />
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          className="text-4xl font-bold text-center text-yellow-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {category.name}
        </motion.h1>

<<<<<<< HEAD
        {/* Show Subcategories */}
=======
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
        {subcategoryList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {subcategoryList.map((sub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
<<<<<<< HEAD
                  onClick={() => handleSubcategoryClick(sub)}
                  className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <img
                    src={`/images/${sub}.jpg`} // Assuming images exist
                    alt={sub}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-yellow-800">{sub}</h2>
=======
                  onClick={() => handleSubcategoryClick(sub.name)}
                  className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <img
                    src={sub.image}
                    alt={sub.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-yellow-800">
                      {sub.name}
                    </h2>
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="col-span-full text-center text-yellow-700 text-lg">
            No subcategories available.
          </div>
        )}

<<<<<<< HEAD
        {/* Back to Category Button */}
=======
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
        <div className="mt-10 text-center">
          <button
            onClick={handleBack}
            className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
          >
            Back to Categories
          </button>
        </div>
      </div>
    </div>
  )
}
