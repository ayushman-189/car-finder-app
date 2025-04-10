"use client";

import { motion } from "framer-motion";
import { FaCarSide, FaStar } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24 px-4 text-center rounded-2xl shadow-2xl mt-6 overflow-hidden">

      {/* Floating Icons */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute left-6 top-6 text-white text-5xl opacity-10"
      >
        <FaCarSide />
      </motion.div>

      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute right-6 top-12 text-yellow-300 text-4xl opacity-10"
      >
        <FaStar />
      </motion.div>

      {/* Floating Car Image */}
      <motion.img
        src="/floating-car.png" // ✅ Add this image to your public/ folder
        alt="Floating Car"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-4 left-10 w-28 opacity-10 hidden sm:block"
      />

      {/* Background Sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full opacity-10"
          style={{
            width: "6px",
            height: "6px",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-5, 5, -5],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Find Your Dream Car Today
        </h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg max-w-2xl mx-auto mb-8 opacity-90"
        >
          Search from a wide range of cars by brand, fuel type, price, and more.
          Add your favorites to your wishlist!
        </motion.p>

        {/* Glowing Gradient Button */}
        <motion.a
          href="#car-list"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block relative px-6 py-3 font-semibold text-blue-600 rounded-full overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></span>
          <span className="relative z-10 bg-white px-6 py-3 rounded-full">
            🚘 Browse Cars
          </span>
        </motion.a>
      </motion.div>

      {/* Shine Effect */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
          repeatType: "loop",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent h-full w-full"
        style={{ pointerEvents: "none", zIndex: 0 }}
      />
    </section>
  );
}
