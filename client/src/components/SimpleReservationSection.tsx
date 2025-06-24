import { useState, FormEvent } from 'react';

export default function SimpleReservationSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-8 md:py-12" style={{
      background: 'linear-gradient(180deg, #F3ECE1 0%, #E8DCC9 100%)'
    }}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto px-4">
          <div 
            className="w-full py-6 px-6 rounded-3xl bg-white shadow-lg border border-amber-200" 
          >
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-terra mb-3">📧 Reserve Your Spot – Limited First Run!</h3>
              <p className="text-base sm:text-lg text-forest/80 leading-relaxed mb-4">
                Be the first to know when ZebraWell is available for order.
              </p>

              {!isSubmitted ? (
                <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-4 py-2 rounded-lg border border-terra/20 focus:outline-none focus:ring-2 focus:ring-terra/50 text-sm"
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !email}
                    className="bg-[#C8592B] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#B5512A] transition-all duration-300 hover:scale-[1.05] disabled:opacity-50 disabled:cursor-not-allowed text-sm whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin mr-1"></div>
                        Adding...
                      </div>
                    ) : 'Claim Your Spot'}
                  </button>
                </div>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-md mx-auto">
                  <p className="text-green-800 font-semibold">✓ You're on the list!</p>
                  <p className="text-green-700 text-sm mt-1">We'll notify you when ZebraWell is available.</p>
                </div>
              )}

              <p className="text-xs text-forest/60 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}