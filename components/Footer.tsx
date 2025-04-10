export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-lg font-bold mb-2">🚗 Car Finder</h4>
            <p className="text-sm text-gray-400">
              Helping you find your dream car with ease, filters, and trust.
            </p>
          </div>
  
          <div>
            <h4 className="text-lg font-bold mb-2">Quick Links</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/wishlist" className="hover:text-white">Wishlist</a></li>
              <li><a href="#brands" className="hover:text-white">Brands</a></li>
              <li><a href="#why" className="hover:text-white">Why Choose Us</a></li>
            </ul>
          </div>
  
          <div>
            <h4 className="text-lg font-bold mb-2">Contact</h4>
            <p className="text-sm text-gray-400">Email: support@carfinder.com</p>
            <p className="text-sm text-gray-400">Phone: +91 98765 43210</p>
          </div>
        </div>
  
        <div className="text-center text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} Car Finder. All rights reserved.
        </div>
      </footer>
    );
  }
  