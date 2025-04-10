import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ravi Kumar",
    message: "I found the perfect car within minutes! The filters are super helpful.",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    message: "The design is smooth and responsive. Loved the wishlist feature!",
    rating: 4,
  },
  {
    name: "Amit Singh",
    message: "Great experience, especially the sorting and car details view.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="mt-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800 py-16 px-6 rounded-2xl shadow-inner">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        💬 What Our Users Say
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-zinc-700 hover:shadow-xl transition duration-300"
          >
            <p className="text-base text-gray-700 dark:text-gray-300 italic mb-4">
              “{t.message}”
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                - {t.name}
              </span>
              <div className="flex text-yellow-500">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
