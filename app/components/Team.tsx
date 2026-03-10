import { Award, Briefcase } from 'lucide-react';

export function Team() {
  const team = [
    {
      name: 'Dr. Syed Sarmad Hussain',
      role: 'Chief Physiotherapist',
      specialty: 'Sports Injury & Rehabilitation',
      experience: '5+ years',
      image: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yfGVufDB8fHx8MTc3Mjc3NjI4NHww&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      name: 'Muhammad Ahmad',
      role: 'Senior Physiotherapist',
      specialty: 'Post-Operative & Pain Management',
      experience: '2+ years',
      image: 'https://images.unsplash.com/photo-1638202993928-7a6fb59548aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3J8ZW58MHx8fHwxNzcyNzc2Mjg0fDA&ixlib=rb-4.1.0&q=80&w=400'
    }
  ];

  return (
    <section className="py-5 bg-gray-50" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">Our Expert Team</h2>
          {/* <p className="text-lg text-gray-600">Certified professionals dedicated to your recovery</p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 transform duration-300"
            >
              <div className="h-64 overflow-hidden bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-teal-600 font-medium mb-3">{member.role}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <Award className="size-4 mr-2 text-teal-600" />
                    <span className="text-sm">{member.specialty}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Briefcase className="size-4 mr-2 text-teal-600" />
                    <span className="text-sm">{member.experience}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}