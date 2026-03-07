import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitMessage('');

    try {
      // Replace these with your actual EmailJS IDs
      const serviceId = 'service_0supzqu';
      const templateId = 'template_yqlsrww';
      const publicKey = 'vHgwgflEZ2XYTxoyq';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'rehabvistaa@gmail.com', 
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitMessage('Thank you for your message! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your recovery journey? Contact us today to book an appointment or learn more about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl mb-6 text-gray-900">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
              {submitMessage && (
                <p className={`mt-4 text-sm ${submitMessage.includes('error') ? 'text-red-600' : 'text-green-600'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Phone className="size-6 text-teal-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg mb-1 text-gray-900">Phone</h4>
                    <p className="text-gray-600">+92 324 5940135</p>
                    <p className="text-gray-600">+92 315 9888039</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Mail className="size-6 text-teal-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg mb-1 text-gray-900">Email</h4>
                    <p className="text-gray-600">rehabvistaa@gmail.com</p>
                    <p className="text-gray-600">drsyedsarmadhussain@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <MapPin className="size-6 text-teal-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg mb-1 text-gray-900">Location</h4>
                    <p className="text-gray-600">REHAB VISTA,</p>
                    <p className="text-gray-600"> Block D1 Block D 1 Nespak Housing Scheme,</p>
                    <p className="text-gray-600"> Lahore</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Clock className="size-6 text-teal-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg mb-1 text-gray-900">Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 2:00 PM - 9:00 PM</p>
                    <p className="text-gray-600">Saturday: 12:00 PM - 3:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
