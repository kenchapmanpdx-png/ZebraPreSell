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
        title: "You're on the reservation list!",
        description: "We'll notify you as soon as ZebraWell is available for order.",
      });
    } catch (error) {
      toast({ variant: "destructive", title: "Error", description: "Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // NEW GRADIENT: The "Copper & Cream" Luxury Vibe
    // A radial gradient that highlights the content in warm cream and deepens to rich beige/copper at the edges.
    <section className="relative py-8 md:py-16 px-4 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FDFBF7] via-[#E8DCCA] to-[#C89F87]">

      {/* Warm Light Orbs for richness and depth */}
      <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-[#F9C365]/20 blur-[120px] rounded-full pointer-events-none mix-blend-overlay"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#C8592B]/10 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* CENTERED HEADER */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block mb-3 px-4 py-1.5 rounded-full bg-[#0f2e24] text-[#F9C365] border border-[#F9C365]/40 text-xs font-bold uppercase tracking-widest shadow-md">
            Coming Soon
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-bold leading-tight mb-4 text-[#0f2e24] drop-shadow-sm" data-aos="fade-up">
            Clinical-Grade Supplements
            <span className="block mt-2 text-[#2C3E2D] font-medium text-2xl md:text-4xl">
              Engineered for <span className="border-b-4 border-[#C8592B]/40">POTS & EDS</span>.
            </span>
          </h1>
        </div>

        {/* TWO COLUMN CONTENT */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

          {/* LEFT: The "Ask" (Reservation Form) */}
          <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-delay="200">
            {/* Glass Card: Looks incredible against the warm copper background */}
            <div className="bg-white/80 backdrop-blur-xl border border-white/70 rounded-3xl p-8 shadow-2xl shadow-[#C8592B]/10">
              <h2 className="text-3xl font-serif font-bold text-[#0f2e24] mb-2">
                Wellness for the
                <div className="h-[1.2em] overflow-hidden inline-block align-bottom ml-2">
                  <span 
                    className={`block bg-gradient-to-r from-[#C8592B] to-[#D97746] bg-clip-text text-transparent transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {words[currentWordIndex]}
                  </span>
                </div>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-medium">
                Stop guessing with your health. Join the list to be the first to access our clinical-grade formulations.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-5 pr-4 py-4 bg-white/90 border border-[#D4D4D4] rounded-xl text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C8592B]/30 focus:border-[#C8592B] transition-all shadow-inner"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting || !email}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg text-white shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-[#C8592B]/20
                      ${email 
                          ? 'bg-gradient-to-r from-[#C8592B] to-[#B04A20] hover:shadow-[#C8592B]/30' 
                          : 'bg-[#A4B494] cursor-not-allowed opacity-80'
                      }`}
                  >
                    {isSubmitting ? "Processing..." : "Claim My Spot"}
                  </button>
                  <p className="text-xs text-center text-gray-600 mt-2 font-medium">No spam. Only important updates.</p>
                </form>
              ) : (
                <div className="bg-[#FDFBF7] border border-[#C8592B]/20 rounded-xl p-6 text-center animate-in fade-in zoom-in">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white text-[#C8592B] rounded-full mb-3 text-2xl shadow-sm border border-[#C8592B]/10">🌿</div>
                  <h3 className="text-xl font-bold text-[#0f2e24]">You're on the list!</h3>
                  <p className="text-sm text-[#2C3E2D]/80 mt-1">Keep an eye on your inbox.</p>
                </div>
              )}
            </div>

            {/* TRUST BADGES - Updated to match warm tones */}
            <div className="mt-8 grid grid-cols-2 gap-3">
               {["FDA-Registered Facility", "cGMP Manufactured", "Zero Fillers", "MCAS Friendly"].map(badge => (
                 <div key={badge} className="flex items-center text-sm font-bold text-[#0f2e24]/80 bg-white/40 px-3 py-2 rounded-lg border border-[#C8592B]/10 shadow-sm backdrop-blur-sm">
                   <span className="w-1.5 h-1.5 rounded-full bg-[#C8592B] mr-2"></span>
                   {badge}
                 </div>
               ))}
            </div>
          </div>

          {/* RIGHT: The Product */}
          <div className="w-full md:w-1/2 relative" data-aos="fade-left">
            {/* Warm Copper Glow behind bottle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-[#C8592B]/10 rounded-full blur-3xl -z-10"></div>

            <img 
              src="/images/zebrawell-bottles-final2.png" 
              alt="ZebraWell Clinical Grade Supplements" 
              className="w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

        </div>
      </div>
    </section>
  );
}