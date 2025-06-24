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
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-3xl font-serif font-bold text-forest mb-4 fade-in">You're All Set!</h2>
            <p className="text-xl text-forest/80 leading-relaxed fade-in max-w-2xl mx-auto">
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
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 md:p-12 text-center">
          <h2 className="text-3xl font-serif font-bold text-terra mb-3 md:mb-6 fade-in">📧 Reserve Your Spot – Limited First Run!</h2>
          <p className="text-xl text-forest/80 leading-relaxed fade-in max-w-2xl mx-auto mb-4 md:mb-8">
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
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#89B317] focus:border-transparent text-gray-900"
              />
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="bg-terra text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-terra transition-all duration-300 hover:scale-[1.05] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Adding...
                  </div>
                ) : (
                  "Claim Your Spot"
                )}
              </button>
            </div>
            <p className="text-sm text-forest/60 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}