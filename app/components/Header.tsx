import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl text-teal-600">RehabVista</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-teal-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-teal-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-teal-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-teal-600 transition-colors">
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center text-teal-600 hover:text-teal-700">
              <Phone className="size-4 mr-2" />
              <span className="text-sm">Call Us</span>
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
            <button onClick={() => scrollToSection('home')} className="block text-gray-700 hover:text-teal-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="block text-gray-700 hover:text-teal-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-teal-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-teal-600 transition-colors">
              Contact
            </button>
            <a href="tel:+1234567890" className="flex items-center text-teal-600 hover:text-teal-700 pt-2">
              <Phone className="size-4 mr-2" />
              <span>Call Us</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
