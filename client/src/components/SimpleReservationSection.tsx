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
          <div className="rounded-2xl shadow-xl border-2 border-amber-300 p-8 md:p-12 text-center" style={{ backgroundColor: 'white', opacity: 1, backdropFilter: 'none' }}>
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#C8592B] mb-3">📧 Reserve Your Spot – Limited First Run!</h3>
              <p className="text-base sm:text-lg text-[#1D4526] leading-relaxed mb-4">
                Be the first to know when ZebraWell is available for order.
              </p>

              {!isSubmitted ? (
                <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 min-w-0 px-4 py-2 rounded-lg border-2 border-amber-300 focus:outline-none focus:ring-2 focus:ring-[#C8592B] focus:border-[#C8592B] text-sm bg-white text-gray-900"
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !email}
                    className={`text-white font-semibold px-4 py-2 rounded-lg shadow transition-all duration-300 text-sm whitespace-nowrap
                      ${
                        email 
                          ? 'bg-[#2ECC71] border-[#2ECC71] hover:bg-[#28B763] hover:scale-[1.05]'
                          : 'bg-[#C8592B] border-[#C8592B] opacity-100 cursor-not-allowed'
                      } border-2`
                    }
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin mr-1"></div>
                        Adding...
                      </div>
                    ) : (
                      "Claim Your Spot"
                    )}
                  </button>
                </div>
              ) : (
                <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 max-w-md mx-auto">
                  <p className="text-green-800 font-semibold">✓ You're on the list!</p>
                  <p className="text-green-700 text-sm mt-1">We'll notify you when ZebraWell is available.</p>
                </div>
              )}

              <p className="text-xs text-[#1D4526] mt-3 opacity-80">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}