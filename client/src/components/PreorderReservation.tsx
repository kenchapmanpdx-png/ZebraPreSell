
import { useState, FormEvent } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function PreorderReservation() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setEmail('');
      toast({
        title: "You're on the reservation list!",
        description: "We'll notify you as soon as ZebraWell is available for order.",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-8 md:py-16 px-8 mt-4 md:mt-10 border-t border-gray-200" style={{
        background: 'hsla(33, 34%, 86%, 1)',
        backgroundImage: 'linear-gradient(90deg, hsla(33, 34%, 86%, 1) 0%, hsla(34, 37%, 96%, 1) 52%, hsla(33, 34%, 86%, 1) 100%)'
      }}>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl shadow-xl border-2 border-amber-300 p-8 md:p-12 text-center" style={{ backgroundColor: 'white', opacity: 1, backdropFilter: 'none' }}>
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-3xl font-serif font-bold text-[#1D4526] mb-4 fade-in">You're All Set!</h2>
            <p className="text-xl text-[#1D4526] leading-relaxed fade-in max-w-2xl mx-auto">
              We'll send you an email as soon as ZebraWell is ready to order. Thank you for joining our community.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-16 px-8 mt-4 md:mt-10 border-t border-gray-200" style={{
      background: 'hsla(33, 34%, 86%, 1)',
      backgroundImage: 'linear-gradient(90deg, hsla(33, 34%, 86%, 1) 0%, hsla(34, 37%, 96%, 1) 52%, hsla(33, 34%, 86%, 1) 100%)'
    }}>
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl shadow-xl border-2 border-amber-300 p-4 md:p-12 text-center" style={{ backgroundColor: 'white', opacity: 1, backdropFilter: 'none' }}>
          <h2 className="text-3xl font-serif font-bold text-[#C8592B] mb-3 md:mb-6 fade-in">📧 Reserve Your Spot – Limited First Run!</h2>
          <p className="text-xl text-[#1D4526] leading-relaxed fade-in max-w-2xl mx-auto mb-4 md:mb-8">
            Be the first to know when ZebraWell is available for order.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 border-2 border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8592B] focus:border-[#C8592B] text-gray-900 bg-white"
              />
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className={`text-white font-semibold px-6 py-3 rounded-lg shadow transition-all duration-300 text-sm whitespace-nowrap
                  ${
                    email 
                      ? 'bg-[#2ECC71] border-[#2ECC71] hover:bg-[#28B763] hover:scale-[1.05]'
                      : 'bg-[#C8592B] border-[#C8592B] opacity-70 cursor-not-allowed'
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
            <p className="text-sm text-[#1D4526] mt-3 opacity-80">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
