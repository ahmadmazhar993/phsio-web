import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ServicesSlider() {

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
              Comprehensive Physiotherapy Services
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Experience personalized care with our expert team of physiotherapists. From injury rehabilitation
              to preventive wellness programs, we provide evidence-based treatments to help you regain mobility,
              reduce pain, and improve your quality of life.
            </p>
            <button
              className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Link to="/services" className="inline-flex items-center w-full h-full">
                Explore Our Services
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://www.news-medical.net/image-handler/ts/20180417062706/ri/673/picture/2018/4/shutterstock_By_ESB_Professional.jpg"
                alt="Professional physiotherapy treatment session"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}