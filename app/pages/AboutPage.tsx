import { Trust } from '../components/Trust';
import { About } from '../components/About';
import { CTABanner } from '../components/CTABanner';

export function AboutPage() {
  return (
    <main>
      <section className="pt-12 pb-8 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        </div>
      </section>
      <About />
      <Trust />
      <CTABanner />
    </main>
  );
}