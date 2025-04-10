"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import CarCard from "@/components/CarCard";

type Car = {
  id: number;
  name: string;
  brand: string;
  image: string;
  fuelType: string;
  price: number;
  seats: number;
};

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const stored = localStorage.getItem("wishlist");
      if (stored) {
        setWishlist(JSON.parse(stored));
      }
      setLoading(false);
    }, 3000); // You can reduce to 2–3s for faster feel

    return () => clearTimeout(timer);
  }, []);

  const removeFromWishlist = (id: number) => {
    const updated = wishlist.filter((car) => car.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <>
      <Head>
        <title>My Wishlist - Car Finder</title>
      </Head>

      <Header />

      <main className="max-w-7xl mx-auto px-4 py-10">
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[300px]">
            <img
              src="/loading-heart.gif"
              alt="Loading..."
              className="w-24 h-24 sm:w-32 sm:h-32 mb-4 animate-pulse"
            />
            <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
              Loading your wishlist...
            </p>
          </div>
        ) : (
          <>
            <div className="bg-blue-50 dark:bg-zinc-800 p-5 rounded-md shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-blue-700 dark:text-white text-center sm:text-left">
                ❤️ My Wishlist
              </h2>
            </div>

            {wishlist.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center text-gray-500 dark:text-gray-400 mt-10">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                  alt="Empty Wishlist"
                  className="w-36 h-36 mb-4 opacity-70"
                />
                <p className="text-lg">No cars wishlisted yet.</p>
                <p className="text-sm text-gray-400 mt-1">
                  Explore and add cars you love ❤️
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                {wishlist.map((car) => (
                  <CarCard
                    key={car.id}
                    car={car}
                    showRemoveButton={true}
                    onRemove={removeFromWishlist}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      {/* Tailwind-based animation */}
      <style jsx global>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
      `}</style>
    </>
  );
}
