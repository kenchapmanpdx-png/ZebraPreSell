import { useState, FormEvent } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function PreorderReservationSection() {
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
      toast({
        title: "You're on the list!",
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

  return (
    <section className="py-8 md:py-12" style={{
      background: 'linear-gradient(180deg, #F3ECE1 0%, #E8DCC9 100%)'
    }}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto px-4">
          <div className="w-full py-6 px-6 rounded-3xl" style={{
            background: 'hsla(33, 34%, 86%, 1)',
            backgroundImage: 'linear-gradient(90deg, hsla(33, 34%, 86%, 1) 0%, hsla(34, 37%, 96%, 1) 52%, hsla(33, 34%, 86%, 1) 100%)'
          }}>
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-terra mb-3">📧 Reserve Your Spot – Limited First Run!</h3>
              <p className="text-base sm:text-lg text-forest/80 leading-relaxed mb-4">
                Be the first to know when ZebraWell is available for order.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-terra/20 focus:outline-none focus:ring-2 focus:ring-terra/50"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-terra text-white font-bold rounded-lg hover:bg-terra transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? 'Adding...' : 'Claim Your Spot'}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center">
                  <div className="text-4xl mb-3">✅</div>
                  <p className="text-xl font-bold text-forest mb-2">You're on the list!</p>
                  <p className="text-forest/70">We'll notify you as soon as ZebraWell is available.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}