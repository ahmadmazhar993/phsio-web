import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { About } from '../components/About';
import { Stats } from '../components/Stats';
import { Trust } from '../components/Trust';
import { CTABanner } from '../components/CTABanner';

export function AboutPage() {
  return (
    <main>
      <section className="pt-32 pb-8 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <Link to="/" className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8">
            <ArrowLeft className="size-5 mr-2" />
            Back to Home
          </Link> */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About RehabVista</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Learn more about our clinic, our mission, and what makes us the trusted choice for physiotherapy care in Lahore.
          </p>
        </div>
      </section>

      <Stats />
      <About />
      <Trust />
      <CTABanner />
    </main>
  );
}