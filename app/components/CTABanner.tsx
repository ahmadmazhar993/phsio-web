import { Link } from 'react-router-dom';

export function CTABanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Schedule your appointment today and let our experts help you get back to your best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors text-center"
            >
              Book Appointment
            </Link>
            <a
              href="tel:+923245940135"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors text-center"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}