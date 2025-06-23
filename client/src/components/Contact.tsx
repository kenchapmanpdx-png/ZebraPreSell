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
    <section id="contact" className="py-6 md:py-16 relative overflow-hidden">
      <ZebraBackground />
      <div className="container mx-auto px-6 relative z-1">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div data-aos="fade">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-forest">Contact Us</h2>
              <p className="text-neutral-dark/80 mb-3 md:mb-6">
                Have questions about our formulations or want to learn more about ZebraWell products? 
                We're here to help! Reach out to our support team for any inquiries regarding our supplements.
              </p>

              <div className="mb-4">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center mr-3">
                    <i className="fas fa-envelope text-forest"></i>
                  </div>
                  <span>support@zebrawell.com</span>
                </div>

                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center mr-3">
                    <i className="fas fa-phone text-forest"></i>
                  </div>
                  <span>(800) 555-WELL</span>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center mr-3">
                    <i className="fas fa-map-marker-alt text-forest"></i>
                  </div>
                  <span>Portland, OR</span>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}