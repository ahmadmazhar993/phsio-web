import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl text-teal-600 font-bold">RehabVista</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${isActive('/') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`transition-colors ${isActive('/services') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
            >
              Services
            </Link>
            <Link
              to="/team"
              className={`transition-colors ${isActive('/team') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
            >
              Team
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${isActive('/about') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
            >
              About
            </Link>
            <Link
              to="/faq"
              className={`transition-colors ${isActive('/faq') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${isActive('/contact') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="tel:+923245940135"
              className="flex items-center bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-colors"
            >
              <Phone className="size-4 mr-2" />
              <span className="text-sm font-medium">Call Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <Link
              to="/"
              className={`block transition-colors ${isActive('/') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`block transition-colors ${isActive('/services') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/team"
              className={`block transition-colors ${isActive('/team') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              to="/about"
              className={`block transition-colors ${isActive('/about') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/faq"
              className={`block transition-colors ${isActive('/faq') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className={`block transition-colors ${isActive('/contact') ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:+923245940135"
              className="flex items-center bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-colors pt-2"
            >
              <Phone className="size-4 mr-2" />
              <span className="font-medium">Call Us</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}