import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const words = ["Unseen", "Disbelieved", "Dismissed", "Frustrated", "Fighting Alone", "Overlooked", "Rare", "Resilient"];

  useEffect(() => {
    const cycleWords = () => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 1200);
    };
    const interval = setInterval(cycleWords, 4500);
    return () => clearInterval(interval);
  }, [words.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setEmail('');
      toast({
        title: "You're on the waitlist!",
        description: "We'll notify you as soon as ZebraWell is available for order.",
      });
    } catch (error) {
      toast({ variant: "destructive", title: "Error", description: "Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative pt-32 md:pt-48 pb-20 px-4 overflow-hidden">

      {/* ANIMATED BACKGROUND */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #FDFBF7 0%, #E8DCCA 50%, #D4B59E 100%)',
          backgroundSize: '200% 200%',
          animation: 'breathingGradient 8s ease-in-out infinite alternate'
        }}
      ></div>

      <style>{`
        @keyframes breathingGradient {
          0% { background-position: 50% 40%; }
          100% { background-position: 50% 60%; }
        }
      `}</style>

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* CENTERED HEADER */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-[5rem] font-serif font-bold leading-tight mb-6 drop-shadow-sm" data-aos="fade-up">
            <span className="block text-[#0f2e24] mb-2">Clinical-Grade Supplements</span>

            <span className="block text-2xl md:text-4xl font-medium mt-4 text-[#3E2723]">
              Engineered for
              <span className="ml-3 font-bold uppercase tracking-wide text-[#C8592B] drop-shadow-sm">
                POTS, EDS & MCAS
              </span>
            </span>
          </h1>
        </div>

        {/* TWO COLUMN CONTENT */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">

          {/* LEFT: Reservation Form */}
          <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-delay="200">
            <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-8 md:p-10 shadow-2xl shadow-[#3E2723]/5">

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2c1810] mb-3">
                Wellness for the
                <div className="h-[1.2em] overflow-hidden inline-block align-bottom ml-3">
                  <span 
                    className={`block bg-gradient-to-r from-[#C8592B] to-[#D97746] bg-clip-text text-transparent transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {words[currentWordIndex]}
                  </span>
                </div>
              </h2>

              <p className="text-lg md:text-xl text-[#5D4037] mb-8 leading-relaxed font-medium">
                Stop guessing with your health. Join the list to be the first to access our clinical-grade formulations.
              </p>

              <div id="waitlist-form">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full pl-6 pr-4 py-5 bg-white/80 border border-[#D7CCC8] rounded-2xl text-[#3E2723] text-lg placeholder:text-[#8D6E63] focus:outline-none focus:ring-2 focus:ring-[#C8592B]/30 focus:border-[#C8592B] transition-all shadow-inner"
                      />
                    </div>

                    {/* BUTTON FIXED: Always Orange (#C8592B) */}
                    <button
                      type="submit"
                      disabled={isSubmitting || !email}
                      className={`w-full py-5 px-6 rounded-2xl font-bold text-xl text-white shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t border-white/20 bg-[#C8592B]
                        ${email 
                            ? 'hover:bg-[#B04A20] hover:shadow-[#C8592B]/30' 
                            : 'opacity-70 cursor-not-allowed'
                        }`}
                    >
                      {isSubmitting ? "Processing..." : "Join Waitlist"}
                    </button>

                    <p className="text-xs text-center text-[#8D6E63]/80 mt-2">
                       Join 2,000+ Zebras on the waitlist.
                    </p>
                  </form>
                ) : (
                  <div className="bg-[#FFFDF9] border border-[#0f2e24]/20 rounded-2xl p-8 text-center animate-in fade-in zoom-in">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-[#0f2e24] rounded-full mb-4 text-3xl shadow-sm border border-[#0f2e24]/10">🌿</div>
                    <h3 className="text-2xl font-bold text-[#0f2e24]">You're on the list!</h3>
                    <p className="text-base text-[#5D4037] mt-2">Keep an eye on your inbox.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
               {["FDA-Registered", "cGMP Certified", "MCAS Friendly", "Zero Fillers"].map(badge => (
                 <span key={badge} className="inline-flex items-center px-4 py-2 rounded-full bg-white/40 border border-[#0f2e24]/10 text-[#2c1810] text-sm font-bold backdrop-blur-sm shadow-sm">
                   <span className="w-2 h-2 rounded-full bg-[#0f2e24] mr-2"></span>{badge}
                 </span>
               ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 relative" data-aos="fade-left">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square bg-[#E5D4C8]/40 rounded-full blur-[100px] -z-10"></div>

            <img 
              src="/images/zebrawell-bottles-final2.png" 
              alt="ZebraWell Clinical Grade Supplements for POTS and EDS" 
              width="600"
              height="600"
              className="w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-700 ease-out relative z-10"
            />
          </div>

        </div>
      </div>
    </section>
  );
}