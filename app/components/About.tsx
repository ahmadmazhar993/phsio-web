import { Award, Clock, Users, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import clinicImage from '../assets/images/RehabVistaCard.png';

const features = [
  {
    icon: Award,
    title: 'Certified Professionals',
    description: 'Our team consists of licensed and experienced physiotherapists'
  },
  {
    icon: Clock,
    title: 'Flexible Hours',
    description: 'Convenient appointment times to fit your busy schedule'
  },
  {
    icon: Users,
    title: 'Patient-Centered Care',
    description: 'Personalized treatment plans focused on your unique needs'
  },
  {
    icon: MapPin,
    title: 'Modern Facility',
    description: 'State-of-the-art equipment and comfortable treatment rooms'
  }
];

export function About() {
  return (
    <section id="about" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl mb-6 text-gray-900">About RehabVista</h2>
            <p className="text-lg text-gray-600 mb-4">
              With over 02 years of experience, RehabVista has been a trusted partner in the health and recovery journey of thousands of patients. Our commitment to excellence and patient care has made us a leading physiotherapy clinic in the community.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We believe in a holistic approach to physiotherapy, combining the latest evidence-based techniques with compassionate care to help you achieve your health goals.
            </p>
          </div>
          <div className="order-1 lg:order-2 h-[250px] sm:h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src={clinicImage}
              alt="Professional healthcare clinic"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="size-8 text-teal-600" />
                </div>
                <h3 className="text-lg mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
