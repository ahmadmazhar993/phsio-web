import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1768508236664-3f294aaf7d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5JTIwdHJlYXRtZW50JTIwc2Vzc2lvbnxlbnwxfHx8fDE3NzI3NzYyODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Physiotherapy treatment session"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-white font-bold">
            Your Journey to Recovery Starts Here
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
            Expert physiotherapy care tailored to your needs. Our experienced team is dedicated to helping you recover, rebuild, and return to the activities you love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-center font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Appointment
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all text-center font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
