import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react'; // Added AlertCircle for the urgency icon

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
    <section className="relative pt-24 md:pt-40 pb-16 px-4 overflow-hidden">

      {/* Background */}
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
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* CENTERED HEADER */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/60 border border-[#0f2e24]/10 text-[#0f2e24] text-xs font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm">
             <ShieldCheck size={14} />
             Physician Formulated
          </div>

          <h1 className="text-4xl md:text-[5rem] font-serif font-bold leading-[1.1] mb-6 drop-shadow-sm text-[#0f2e24]" data-aos="fade-up">
            Advanced Autonomic, Mast Cell <br className="hidden md:block" /> & Connective Tissue Support
          </h1>

          <p className="text-xl md:text-3xl font-medium text-[#3E2723] max-w-4xl mx-auto">
            Engineered specifically for the complex needs of
            <span className="block md:inline mt-2 md:mt-0 md:ml-3 font-bold text-[#C8592B]">
              POTS, EDS & MCAS
            </span>
          </p>
        </div>

        {/* TWO COLUMN CONTENT */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

          {/* LEFT: Form */}
          <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-delay="200">
            <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-6 md:p-10 shadow-2xl shadow-[#3E2723]/5">

              <div className="mb-6">
                <p className="text-sm font-bold text-[#8D6E63] uppercase tracking-widest mb-1">We see you.</p>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2c1810]">
                  Wellness for the
                  <span className={`block md:inline md:ml-2 bg-gradient-to-r from-[#C8592B] to-[#D97746] bg-clip-text text-transparent transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    {words[currentWordIndex]}
                  </span>
                </h2>
              </div>

              <div id="waitlist-form">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-5 py-4 bg-white/90 border border-[#D7CCC8] rounded-xl text-[#3E2723] text-lg placeholder:text-[#8D6E63]/70 focus:outline-none focus:ring-2 focus:ring-[#C8592B]/50 transition-all shadow-inner"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !email}
                      className={`w-full py-4 px-6 rounded-xl font-bold text-xl text-white shadow-lg transform active:scale-95 transition-all
                        ${email 
                            ? 'bg-[#C8592B] hover:bg-[#B04A20] hover:shadow-orange-500/30' 
                            : 'bg-[#C8592B] opacity-70 cursor-not-allowed'
                        }`}
                    >
                      {isSubmitting ? "Processing..." : "Join Waitlist"}
                    </button>

                    {/* URGENCY MESSAGE: Scarcity Trigger */}
                    <div className="flex items-center justify-center gap-2 mt-3">
                       <AlertCircle size={14} className="text-[#C8592B]" />
                       <p className="text-xs font-bold uppercase tracking-wide text-[#C8592B]">
                         Limited first run • First come, first served
                       </p>
                    </div>

                  </form>
                ) : (
                  <div className="bg-[#FFFDF9] border border-[#0f2e24]/20 rounded-xl p-8 text-center animate-in zoom-in duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0f2e24] text-white rounded-full mb-3 shadow-lg">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#0f2e24]">You're on the list!</h3>
                    <p className="text-sm text-[#5D4037] mt-1">Watch your inbox for early access.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
               {["FDA-Registered Facility", "cGMP Certified", "MCAS Friendly", "Zero Fillers"].map(badge => (
                 <span key={badge} className="inline-flex items-center px-3 py-1.5 rounded-md bg-white/50 border border-[#0f2e24]/10 text-[#2c1810] text-xs font-bold backdrop-blur-sm">
                   <span className="w-1.5 h-1.5 rounded-full bg-[#0f2e24] mr-2"></span>{badge}
                 </span>
               ))}
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="w-full md:w-1/2 relative flex justify-center" data-aos="fade-left">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-[#E5D4C8]/40 rounded-full blur-[80px] -z-10"></div>
            <img 
              src="/images/zebrawell-bottles-final2.png" 
              alt="ZebraWell Clinical Grade Supplements for POTS and EDS" 
              className="w-full max-w-md h-auto drop-shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

        </div>
      </div>
    </section>
  );
}