import { Award, Clock, Users, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
    <section id="about" className="py-20 bg-gray-50">
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
          <div className="order-1 lg:order-2 h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://scontent.flhe3-2.fna.fbcdn.net/v/t39.30808-6/641326435_122100747063275529_6183860556540463888_n.png?stp=dst-png_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=2a1932&_nc_ohc=wpk_FDA5f0UQ7kNvwHQ_A2b&_nc_oc=AdkHt11OoOvgzBSLma0qadLti70uXzmsqQnfJXlB6ur3CRCRLfOo-QrhD3myLqGihxA&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&_nc_gid=2lbzQ31qw3-YOm8ayaR6rQ&_nc_ss=8&oh=00_Afw3SeRoouR4IadiJvuNqBr6Wmb_TISPRCIj7CXkm2aeFQ&oe=69B1C688"
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
