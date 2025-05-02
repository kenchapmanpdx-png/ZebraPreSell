import { useState, FormEvent } from 'react';

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
    <section id="contact" className="py-16 md:py-24 bg-blue-50/30 medical-pattern">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-medical-blue">Clinical Consultation</h2>
              <p className="text-neutral-dark/80 mb-8">
                Have questions about our medical-grade formulations or how they might address your specific symptoms? 
                Reach out to our clinical support team specializing in Ehlers-Danlos Syndrome, Postural Orthostatic Tachycardia Syndrome, and Mast Cell Activation Syndrome.
              </p>
              
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-medical-blue/10 flex items-center justify-center mr-3">
                    <i className="fas fa-envelope text-medical-blue"></i>
                  </div>
                  <span>support@zebrawell.com</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-medical-blue/10 flex items-center justify-center mr-3">
                    <i className="fas fa-phone text-medical-blue"></i>
                  </div>
                  <span>(800) 555-WELL</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-medical-blue/10 flex items-center justify-center mr-3">
                    <i className="fas fa-map-marker-alt text-medical-blue"></i>
                  </div>
                  <span>Portland, OR</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md fade-in">
              <h3 className="text-2xl font-bold mb-6 text-medical-blue">Request Information</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="flex items-center text-sm font-semibold mb-2">
                    <i className="fas fa-user-md text-medical-blue mr-2"></i>
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border border-medical-blue/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-blue bg-blue-50/30"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="flex items-center text-sm font-semibold mb-2">
                    <i className="fas fa-envelope text-medical-blue mr-2"></i>
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-medical-blue/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-blue bg-blue-50/30"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="flex items-center text-sm font-semibold mb-2">
                    <i className="fas fa-comment-medical text-medical-blue mr-2"></i>
                    Clinical Inquiry
                  </label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 border border-medical-blue/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-blue bg-blue-50/30"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-medical-blue hover:bg-medical-blue/90 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-paper-plane mr-2"></i>Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
