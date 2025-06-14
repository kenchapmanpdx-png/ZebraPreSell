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
    <section id="contact" className="py-12 md:py-16 relative overflow-hidden">
      <ZebraBackground />
      <div className="container mx-auto px-6 relative z-1">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest">Contact Us</h2>
              <p className="text-neutral-dark/80 mb-6">
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
            
            <div className="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up">
              <h3 className="text-2xl font-bold mb-4 text-forest">Request Information</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="flex items-center text-sm font-semibold mb-1">
                    <i className="fas fa-user text-forest mr-2"></i>
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border border-forest/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest bg-sage/5"
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="flex items-center text-sm font-semibold mb-1">
                    <i className="fas fa-envelope text-forest mr-2"></i>
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-forest/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest bg-sage/5"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="flex items-center text-sm font-semibold mb-1">
                    <i className="fas fa-comment text-forest mr-2"></i>
                    Your Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={3} 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 border border-forest/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest bg-sage/5"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-forest hover:bg-forest/90 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-paper-plane mr-2"></i>Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
