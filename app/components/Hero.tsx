import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900">
              Your Journey to Recovery Starts Here
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Expert physiotherapy care tailored to your needs. Our experienced team is dedicated to helping you recover, rebuild, and return to the activities you love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                Book Appointment
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="px-8 py-3 border-2 border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors"
              >
                Our Services
              </button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1768508236664-3f294aaf7d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5JTIwdHJlYXRtZW50JTIwc2Vzc2lvbnxlbnwxfHx8fDE3NzI3NzYyODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Physiotherapy treatment session"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
