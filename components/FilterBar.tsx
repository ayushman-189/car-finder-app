type Props = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  fuelType: string;
  setFuelType: (value: string) => void;
  minPrice: string;
  setMinPrice: (value: string) => void;
  maxPrice: string;
  setMaxPrice: (value: string) => void;
  seats: string;
  setSeats: (value: string) => void;
  sortOrder: string;
  setSortOrder: (value: string) => void;
};

export default function FilterBar({
  searchTerm,
  setSearchTerm,
  fuelType,
  setFuelType,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  seats,
  setSeats,
  sortOrder,
  setSortOrder,
}: Props) {
  return (
    <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-6 mb-8 border border-gray-200 dark:border-zinc-700">
      <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="🔍 Search by brand or model"
          className="input-style"
        />

        <select
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
          className="input-style"
        >
          <option value="">⛽ Fuel Type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
          <option value="Hybrid">Hybrid</option>
        </select>

        <div className="flex gap-2">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min ₹"
            className="input-style"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max ₹"
            className="input-style"
          />
        </div>

        <select
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          className="input-style"
        >
          <option value="">🪑 Seats</option>
          <option value="2">2 Seater</option>
          <option value="4">4 Seater</option>
          <option value="5">5 Seater</option>
          <option value="7">7 Seater</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="input-style"
        >
          <option value="">🔽 Sort by Price</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </form>
    </div>
  );
}
