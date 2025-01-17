import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              Donaty
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/who-we-are"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Who We Are
              </Link>
              <Link
                to="/our-campaign"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Our Campaign
              </Link>
              <Link
                to="/contact-us"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </Link>
              <Link
                to="/donate"
                className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium"
              >
                Donate
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/who-we-are"
              className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Who We Are
            </Link>
            <Link
              to="/our-campaign"
              className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Our Campaign
            </Link>
            <Link
              to="/contact-us"
              className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact Us
            </Link>
            <Link
              to="/donate"
              className="bg-indigo-600 text-white hover:bg-indigo-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
