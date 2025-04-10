import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHeart, FaSun, FaMoon } from "react-icons/fa";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <header className="bg-white dark:bg-zinc-900 shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-white">🚗 CarFinder</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="text-gray-700 dark:text-yellow-400 hover:text-blue-600 dark:hover:text-yellow-300"
            title="Toggle Dark Mode"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>

          <Link
            href="/wishlist"
            className="text-red-500 flex items-center gap-1 hover:text-red-600"
          >
            <FaHeart />
            <span className="text-sm">Wishlist</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
