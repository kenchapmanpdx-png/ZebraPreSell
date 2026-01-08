import { useState, FormEvent } from 'react';
import ZebraBackground from './ZebraBackground';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // This would be connected to backend in a real implementation
    console.log("Contact form submission:", { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    // Show success message (in a real implementation)
  };

  return (
    <section id="contact" className="py-3 md:py-6 relative overflow-hidden">
      <ZebraBackground />
      <div className="container mx-auto px-6 relative z-1">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-forest">Contact Us</h2>
          <p className="text-neutral-dark/80 mb-4 text-sm md:text-base">
            Questions about our formulations? We're here to help with any inquiries.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center mr-2">
                <i className="fas fa-envelope text-forest text-sm"></i>
              </div>
              <span className="text-sm md:text-base">ken@wellnessforzebras.com</span>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center mr-2">
                <i className="fas fa-phone text-forest text-sm"></i>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center mr-2">
                <i className="fas fa-map-marker-alt text-forest text-sm"></i>
              </div>
              <span className="text-sm md:text-base">Phoenix, Arizona</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}