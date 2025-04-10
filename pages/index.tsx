import Head from "next/head";
import Header from "@/components/Header";
import FilterBar from "@/components/FilterBar";
import CarCard from "@/components/CarCard";
import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import PopularBrands from "@/components/PopularBrands";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [seats, setSeats] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // "", "lowToHigh", "highToLow"
  const [currentPage, setCurrentPage] = useState(1);

  const carsPerPage = 10;

  const fetchCars = async () => {
    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams({
        search: searchTerm,
        fuelType,
        minPrice,
        maxPrice,
        seats,
      });

      const res = await fetch(`/api/cars?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch cars.");
      let data = await res.json();

      // Sorting after fetching
      if (sortOrder === "lowToHigh") {
        data.sort((a: any, b: any) => a.price - b.price);
      } else if (sortOrder === "highToLow") {
        data.sort((a: any, b: any) => b.price - a.price);
      }

      setCars(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch whenever filters/search change
  useEffect(() => {
    fetchCars();
  }, [searchTerm, fuelType, minPrice, maxPrice, seats, sortOrder]);

  const startIndex = (currentPage - 1) * carsPerPage;
  const paginatedCars = cars.slice(startIndex, startIndex + carsPerPage);

  return (
    <>
      <Head>
        <title>Car Finder App</title>
      </Head>

      <Header />
      <HeroSection />
      <PopularBrands />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 text-center mb-8"
        >
          🔍 Find Your Dream Car
        </motion.h2>

        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          fuelType={fuelType}
          setFuelType={setFuelType}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          seats={seats}
          setSeats={setSeats}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        {loading ? (
          <p className="text-center text-blue-600 mt-10">Loading cars...</p>
        ) : error ? (
          <p className="text-center text-red-500 mt-10">{error}</p>
        ) : (
          <>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {paginatedCars.map((car: any) => (
                <motion.div
                  key={car.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <CarCard car={car} />
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            <div className="flex justify-center mt-10 space-x-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-5 py-2 bg-blue-100 text-blue-700 font-medium rounded hover:bg-blue-200 transition disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    prev < Math.ceil(cars.length / carsPerPage)
                      ? prev + 1
                      : prev
                  )
                }
                disabled={currentPage >= Math.ceil(cars.length / carsPerPage)}
                className="px-5 py-2 bg-blue-100 text-blue-700 font-medium rounded hover:bg-blue-200 transition disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}

        <div className="mt-16">
          <WhyChooseUs />
          <Testimonials />
        </div>
      </main>

      <Footer />
    </>
  );
}
