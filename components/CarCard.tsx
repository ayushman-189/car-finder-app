import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Car = {
  id: number;
  name: string;
  brand: string;
  image: string;
  fuelType: string;
  price: number;
  seats: number;
};

export default function CarCard({
  car,
  showRemoveButton = false,
  onRemove,
}: {
  car: Car;
  showRemoveButton?: boolean;
  onRemove?: (id: number) => void;
}) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setIsWishlisted(wishlist.some((item: Car) => item.id === car.id));
  }, [car.id]);

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    let updatedWishlist;
    if (isWishlisted) {
      updatedWishlist = wishlist.filter((item: Car) => item.id !== car.id);
    } else {
      updatedWishlist = [...wishlist, car];
    }

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setIsWishlisted(!isWishlisted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
    >
      {/* Wishlist Toggle */}
      <motion.button
        onClick={toggleWishlist}
        whileTap={{ scale: 0.8 }}
        className="absolute top-3 right-3 text-xl text-red-500 z-10"
        title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
      >
        <AnimatePresence mode="wait">
          {isWishlisted ? (
            <motion.span key="filled" initial={{ scale: 0 }} animate={{ scale: 1 }}>
              <FaHeart />
            </motion.span>
          ) : (
            <motion.span key="empty" initial={{ scale: 0 }} animate={{ scale: 1 }}>
              <FaRegHeart />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Remove Button */}
      {showRemoveButton && onRemove && (
        <button
          onClick={() => onRemove(car.id)}
          className="absolute bottom-3 right-3 text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
        >
          Remove
        </button>
      )}

      {/* Car Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={imageError ? "/fallback.jpg" : car.image}
          alt={car.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
          onError={() => setImageError(true)}
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent z-0" />
      </div>

      {/* Car Info */}
      <div className="p-4 z-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{car.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">{car.brand}</p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-3 text-xs">
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">
            {car.fuelType}
          </span>
          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-200">
            {car.seats} Seater
          </span>
        </div>

        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
          ₹ {new Intl.NumberFormat("en-IN").format(car.price)}
        </p>
      </div>
    </motion.div>
  );
}
