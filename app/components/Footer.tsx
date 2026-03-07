import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4 text-teal-400">RehabVista</h3>
            <p className="text-gray-400">
              Your trusted partner in physiotherapy and rehabilitation. Helping you recover, rebuild, and thrive.
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/RehabVista" className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition-colors">
                <Facebook className="size-5" />
              </a>
              <a href="https://www.instagram.com/rehab_vista" className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition-colors">
                <Instagram className="size-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition-colors">
                <Twitter className="size-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition-colors">
                <Linkedin className="size-5" />
              </a>
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
