import { Activity, Heart, Zap, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    icon: Activity,
    title: 'Sports Injury Rehabilitation',
    description: 'Specialized treatment to get athletes back to peak performance safely and effectively.',
    image: 'https://images.unsplash.com/photo-1770653927355-2ba81c1522df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBpbmp1cnklMjByZWhhYmlsaXRhdGlvbnxlbnwxfHx8fDE3NzI3MjE0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Heart,
    title: 'Pain Management',
    description: 'Evidence-based approaches to reduce chronic and acute pain conditions.',
    image: 'https://images.unsplash.com/photo-1768507423533-b87b62769758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrJTIwcGFpbiUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzI3NzYyODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Zap,
    title: 'Manual Therapy',
    description: 'Hands-on techniques including massage, mobilization, and manipulation.',
    image: 'https://images.unsplash.com/photo-1731597076108-f3bbe268162f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNzYWdlJTIwdGhlcmFweSUyMHNlc3Npb258ZW58MXx8fHwxNzcyNzc2Mjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Users,
    title: 'Exercise Therapy',
    description: 'Personalized exercise programs designed to improve strength, flexibility, and function.',
    image: 'https://images.unsplash.com/photo-1545463913-5083aa7359a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjBleGVyY2lzZXN8ZW58MXx8fHwxNzcyNzc2Mjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive physiotherapy solutions tailored to your recovery and wellness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <Icon className="size-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl ml-4 text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
