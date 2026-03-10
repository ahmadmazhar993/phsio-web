export function Testimonials() {
  const testimonials = [
    {
      name: 'Ayesha Khan',
      role: 'Patient',
      quote: 'RehabVista changed my life! The therapists are incredibly skilled and caring. I am now back to running after my knee injury.',
      rating: 5
    },
    {
      name: 'Omar Malik',
      role: 'Athlete',
      quote: 'Professional environment and personalized treatment. Strongly recommend to anyone needing physiotherapy.',
      rating: 5
    },
    {
      name: 'Zahra Fatima ',
      role: 'Post-Surgery Patient',
      quote: 'After my surgery, I was worried about recovery. The team at RehabVista made the entire process smooth and pain-free.',
      rating: 5
    },
    {
      name: 'Hassan Ali',
      role: 'Chronic Pain Patient',
      quote: 'I have dealt with back pain for years. Finally found relief thanks to their specialized pain management program.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">Real experiences from people we've helped</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow transition hover:shadow-lg hover:scale-105 transform duration-300 border-l-4 border-teal-600"
            >
              <div className="flex items-center mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{t.quote}"</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-teal-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}