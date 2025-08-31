import { MapPin, ShieldCheck, Award, Percent, Gift } from "lucide-react"

const features = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Free delivery",
    description: "Fast and free delivery on all orders above ₹500 across India.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "100% secure payment",
    description: "Your transactions are encrypted and fully secured.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Quality guarantee",
    description: "We ensure premium quality with every handmade item you purchase.",
  },
  {
    icon: <Percent className="w-6 h-6" />,
    title: "Guaranteed savings",
    description: "Enjoy the best deals and seasonal discounts every month.",
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: "Daily offers",
    description: "Fresh offers and flash sales every day on selected categories.",
  },
]

export default function Features() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-gray-600">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2 capitalize">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
