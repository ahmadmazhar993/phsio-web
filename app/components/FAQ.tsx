import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What should I bring to my first appointment?',
      a: 'Please bring a valid ID, insurance card if applicable, and any medical records related to your condition. Arrive 10 minutes early to complete intake forms.'
    },
    {
      q: 'How long is each physiotherapy session?',
      a: 'Standard sessions are 45-60 minutes. Your therapist will assess your needs and may recommend extended or shorter sessions based on your condition.'
    },
    {
      q: 'Do you offer payment plans?',
      a: 'Yes, we accept cash, cards, and bank transfers. We can discuss flexible payment options based on your needs.'
    },
    {
      q: 'Can I get a refund if I cancel?',
      a: 'Cancellations made 24 hours before your appointment are refundable. Last-minute cancellations may be non-refundable.'
    },
    {
      q: 'Is physiotherapy covered by insurance?',
      a: 'Many insurance plans cover physiotherapy. We recommend contacting your provider to verify your coverage.'
    },
    {
      q: 'What conditions do you treat?',
      a: 'We treat sports injuries, back pain, neck pain, arthritis, post-operative rehabilitation, and general fitness conditions.'
    }
  ];

  return (
    <section className="py-5 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Quick answers to common questions</p>
        </div> */}

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-medium text-gray-900 text-left">{faq.q}</span>
                <ChevronDown
                  className={`size-5 text-teal-600 flex-shrink-0 transition-transform ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIdx === idx && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}