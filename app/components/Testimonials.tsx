export function Testimonials() {
  const testimonials = [
    {
      name: 'Ayesha Khan',
      role: 'Patient',
      quote: 'RehabVista changed my life! The therapists are incredibly skilled and caring. I am now back to running after my knee injury.'
    },
    {
      name: 'Omar Malik',
      role: 'Athlete',
      quote: 'Professional environment and personalized treatment. Strongly recommend to anyone needing physiotherapy.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-gray-900">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow transition hover:shadow-lg hover:scale-105 transform duration-300"
            >
              <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
              <p className="font-medium text-gray-900">{t.name}</p>
              <p className="text-sm text-gray-600">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}