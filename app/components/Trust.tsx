import { Check } from 'lucide-react';

export function Trust() {
  const badges = [
    'Licensed Practitioners',
    'Evidence-Based Methods',
    'Advanced Equipment',
    'Insurance Friendly',
    'Same-Day Appointments',
    'Customized Plans'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose RehabVista?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {badges.map((badge, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Check className="size-6 text-teal-600" />
                </div>
                <p className="text-lg text-gray-700 font-medium">{badge}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}