import { FaCheckCircle, FaRupeeSign, FaCar, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaCar size={30} className="text-blue-600 dark:text-blue-400" />,
    title: "Wide Selection",
    description: "Choose from a wide range of top brands and models.",
  },
  {
    icon: <FaShieldAlt size={30} className="text-blue-600 dark:text-blue-400" />,
    title: "Verified Cars",
    description: "Each car is quality-checked and verified for your peace of mind.",
  },
  {
    icon: <FaRupeeSign size={30} className="text-blue-600 dark:text-blue-400" />,
    title: "Affordable Prices",
    description: "Get the best deals with transparent pricing.",
  },
  {
    icon: <FaCheckCircle size={30} className="text-blue-600 dark:text-blue-400" />,
    title: "Easy Financing",
    description: "Quick loan approvals and hassle-free paperwork.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mt-20 mb-16 px-4">
      <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white tracking-tight">
        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          Why Choose CarFinder?
        </span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-zinc-700 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-4">{feature.icon}</div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              {feature.title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
