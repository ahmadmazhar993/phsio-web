import { Facebook, Instagram } from 'lucide-react';
import rehabVistaLogo from '../assets/images/favicon.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src={rehabVistaLogo}
                alt="RehabVista Logo"
                className="h-8 w-8 mr-3 rounded"
              />
              <h3 className="text-xl text-teal-400">RehabVista</h3>
            </div>
            <p className="text-gray-400">
              Your trusted partner in physiotherapy and rehabilitation. Helping you recover, rebuild, and thrive.
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors">Services</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-teal-400 transition-colors">Our Team</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-teal-400 transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4 font-semibold">More</h4>
            <ul className="space-y-2">
              <li><a href="#faq" className="text-gray-400 hover:text-teal-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors">Contact</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4 font-semibold">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.facebook.com/RehabVista" title="Facebook" className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition-colors">
                <Facebook className="size-5" />
              </a>
              <a href="https://www.instagram.com/rehab_vista" title="Instagram" className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition-colors">
                <Instagram className="size-5" />
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <p className="mb-2"><strong>Phone:</strong> +92 324 5940135</p>
              <p><strong>Email:</strong> rehabvistaa@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} RehabVista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
