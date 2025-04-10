"use client";

import { useEffect } from "react";

const brands = [
  { name: "Hyundai", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd0f2Te1TGSgieRiEfR3ymHrGc7E37McHUvw&s" },
  { name: "Honda", logo: "https://i.pinimg.com/736x/4f/c4/1c/4fc41cd20e7c214003602eeaeb5e01f6.jpg" },
  { name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "Tata", logo: "https://icon2.cleanpng.com/20180421/klq/avtgp2rp7.webp" },
  { name: "Mahindra", logo: "https://w7.pngwing.com/pngs/547/351/png-transparent-mahindra-mahindra-car-logo-automotive-industry-tractor-lincoln-motor-company-company-text-trademark.png" },
  { name: "Ford", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png" },
];

export default function PopularBrands() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".brand-card");
    cards.forEach(card => observer.observe(card));

    return () => cards.forEach(card => observer.unobserve(card));
  }, []);

  return (
    <section className="mt-10 px-4 bg-white">
  {/* Heading with light gray background */}
  <div className="bg-gray-100 px-4 py-3 rounded-md mb-6 flex justify-between items-center">
    <h3 className="text-2xl font-bold text-black">Browse by Make</h3>
    <a href="/brands" className="text-blue-600 hover:underline text-sm">View All &rarr;</a>
  </div>

  {/* Brand cards grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
    {brands.map((brand, index) => (
      <div
        key={brand.name}
        className={`group brand-card opacity-0 transform translate-y-4 transition duration-500 ease-out
          bg-gray-100 rounded-xl shadow-md p-6 flex flex-col items-center justify-center cursor-pointer
          hover:scale-105 hover:shadow-xl hover:border hover:border-blue-500 hover:ring-2 hover:ring-blue-300`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <img
          src={brand.logo}
          alt={brand.name}
          className="h-12 sm:h-14 object-contain mb-3 transition-transform duration-300"
        />
        <span className="text-sm font-semibold text-black tracking-wide uppercase transition-transform duration-300 group-hover:scale-105">
          {brand.name}
        </span>
      </div>
    ))}
  </div>

  {/* Animation styles */}
  <style jsx>{`
    .animate-fadeInUp {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `}</style>
</section>

  );
}
