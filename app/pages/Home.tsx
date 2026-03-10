import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { ServicesSlider } from '../components/ServicesSlider';
import { Trust } from '../components/Trust';
import { CTABanner } from '../components/CTABanner';
import { Testimonials } from '../components/Testimonials';

export function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <ServicesSlider />
      <Trust />
      <CTABanner />
      <Testimonials />
    </main>
  );
}