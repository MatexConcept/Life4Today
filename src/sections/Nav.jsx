import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
              <div className="w-8 h-18 mr-2">
                <svg viewBox="0 0 44 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 4L38 16V58L6 46V4Z" fill="#1AD0D1" />
                  <path d="M0 0L32 12V54L0 42V0Z" fill="#9F5FFE" />
                  <path d="M12 8H44V50L12 38V8Z" fill="#4742E7" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-[#1D1D1D]">Live4today</h2>
            </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#who-we-are" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Who We Are
            </a>
            <a href="#our-campaign" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Our Campaign
            </a>
            <a href="#contact-us" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Contact Us
            </a>
            <NavLink to="/donation" className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
              Donate
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-2 space-y-2">
            <a href="#who-we-are" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium">
              Who We Are
            </a>
            <a href="#our-campaign" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium">
              Our Campaign
            </a>
            <a href="#contact-us" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium">
              Contact Us
            </a>
            <NavLink to="/donation" className="block bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-base font-medium text-center">
              Donate
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
