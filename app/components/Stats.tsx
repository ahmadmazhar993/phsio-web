import { Users, Heart, Award, TrendingUp } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: '1,500+',
      label: 'Happy Patients'
    },
    {
      icon: Heart,
      value: '98%',
      label: 'Satisfaction Rate'
    },
    {
      icon: Award,
      value: '20+',
      label: 'Certifications'
    },
    {
      icon: TrendingUp,
      value: '15+',
      label: 'Years Experience'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-teal-600 p-3 rounded-full">
                    <Icon className="size-6 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-teal-600 mb-2">{stat.value}</h3>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}