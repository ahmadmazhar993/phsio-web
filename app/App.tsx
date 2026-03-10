import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppChat } from './components/WhatsAppChat';
import { BackToTop } from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppChat />
      <BackToTop />
    </div>
  );
}
