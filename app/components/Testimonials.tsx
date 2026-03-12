import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  rating: number;
  quote: string;
  role: string;
}

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        // You'll need to replace these with your actual values
        const API_KEY = 'AIzaSyB8dI2Q38UC-zDSnm-Bbp4EYqWzo1zWcpk';
        const PLACE_ID = 'ChIJAZ-5DAABGTkRc2ItuTLUW-g';

        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }

        const data = await response.json();

        if (data.status !== 'OK') {
          throw new Error(`Google API Error: ${data.status}`);
        }

        // Filter reviews to only include those with text and sort by most recent
        const filteredTestimonials = data.result.reviews
          .filter((review: any) => review.text && review.text.trim().length > 0)
          .slice(0, 4) // Limit to 4 testimonials
          .map((review: any) => ({
            name: review.author_name,
            rating: review.rating,
            quote: review.text,
            role: 'Google Review'
          }));

        setTestimonials(filteredTestimonials);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching Google reviews:', err);
        setError('Unable to load reviews at this time');
        setLoading(false);

        // Fallback to static testimonials if API fails
        setTestimonials([
          {
            name: 'Ali Akbar',
            rating: 5,
            quote: 'Highly recommended for professional, personalized care.',
            role: 'Patient'
          },
          {
            name: 'Asfand Khalid',
            rating: 5,
            quote: 'I visited the clinic for my lower back pain and got complete relief with in 2 weeks. Doctor is very professional. Highly recommend.',
            role: 'Back Pain Patient'
          },
          {
            name: 'Sahil Ali',
            rating: 5,
            quote: 'Well regarded for its professional service, it offers personalized attention to individual needs and is frequently recommended for its quality approach.',
            role: 'Post-Surgery Patient'
          },
          {
            name: 'Aniqa Manzur',
            rating: 5,
            quote: 'Very professional and amazing young team, deal patients with full transparency.',
            role: 'Athlete'
          },
          {
            name: 'Muhammad Tufail',
            rating: 5,
            quote: 'I came with stage 3 knee osteoarthritis, unable to stand and sit i underwent physiotherapy at rehab vista, after 4 sessions there is a significant reduction in my pain and I can walk better now, and looking forward to ease my pain and get better in my functional activities.',
            role: 'Patient'
          }
        ]);
      }
    };

    fetchGoogleReviews();
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-50" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Loading testimonials...</p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error && testimonials.length === 0) {
    return (
      <section className="py-20 bg-gray-50" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">Real experiences from people we've helped</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-teal-600 transform transition duration-300 hover:shadow-lg hover:scale-102">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current w-5 h-5" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 text-lg">"{t.quote}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-teal-600">{t.role}</p>
                </div>
              </div>
            ))}
          </div> */}
<div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-teal-600 transform transition duration-300 hover:scale-105">
  <div className="transition-all duration-500">
    <div className="flex items-center mb-4">
      {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
        <Star key={i} className="text-yellow-400 fill-current w-5 h-5" />
      ))}
    </div>

    <p className="text-gray-700 italic mb-6 text-lg">
      "{testimonials[currentSlide].quote}"
    </p>

    <div className="border-t border-gray-200 pt-4">
      <p className="font-semibold text-gray-900">
        {testimonials[currentSlide].name}
      </p>
      <p className="text-sm text-teal-600">
        {testimonials[currentSlide].role}
      </p>
    </div>
  </div>
</div>
          {/* Four Tabs/Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.slice(0, 4).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-teal-600 scale-125'
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}