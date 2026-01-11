import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const words = ['Unseen', 'Disbelieved', 'Dismissed', 'Frustrated', 'Fighting Alone', 'Overlooked', 'Rare', 'Resilient'];

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
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setEmail('');
      toast({
        title: "You're on the waitlist!",
        description: "We'll notify you as soon as ZebraWell is available for order."
      });
    } catch {
      toast({ variant: 'destructive', title: 'Error', description: 'Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative pt-24 md:pt-40 pb-16 px-4 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 heroStripeBg" />
      <div className="absolute inset-0 z-0 heroStripeLayerA" aria-hidden="true" />
      <div className="absolute inset-0 z-0 heroStripeLayerB" aria-hidden="true" />
      <div className="absolute inset-0 z-0 heroStripeLayerC" aria-hidden="true" />

      <style>{`
        /* =========================
           Base: keep it light, slightly more contrast
           ========================= */
        .heroStripeBg{
          position:absolute;
          inset:0;
          isolation:isolate;

          /* Light warm base with a bit more separation */
          background: radial-gradient(120% 95% at 50% 45%,
            #FFFEFB 0%,
            #F3E6D8 38%,
            #E2C8B4 70%,
            #D2A88E 100%
          );
          background-size: 220% 220%;
          animation: bgDrift 20s ease-in-out infinite alternate;
          will-change: background-position, filter;
          filter: saturate(1.02);
        }

        @keyframes bgDrift{
          0%   { background-position: 50% 42%; }
          100% { background-position: 50% 58%; }
        }

        /* =========================
           Stripe-like multi-wave layers
           Each layer is subtle alone; together they read clearly.
           ========================= */

        .heroStripeLayerA,
        .heroStripeLayerB,
        .heroStripeLayerC{
          position:absolute;
          inset:0;
          pointer-events:none;
          will-change: transform, opacity;
          transform: translate3d(0,0,0);
        }

        /* Layer A: big slow swells (diagonal drift) */
        .heroStripeLayerA{
          opacity: .95;
        }
        .heroStripeLayerA::before{
          content:"";
          position:absolute;
          inset:-35%;
          background:
            radial-gradient(70% 55% at 20% 30%, rgba(200,89,43,.18), transparent 62%),
            radial-gradient(70% 55% at 85% 55%, rgba(255,255,255,.30), transparent 65%),
            radial-gradient(70% 55% at 55% 85%, rgba(210,168,142,.20), transparent 68%);
          filter: blur(30px);
          animation: waveA 22s ease-in-out infinite;
          transform: translate3d(0,0,0);
        }

        @keyframes waveA{
          0%   { transform: translate(-2%, -1%) rotate(-2deg) scale(1.08); }
          50%  { transform: translate( 2%,  2%) rotate( 2deg) scale(1.13); }
          100% { transform: translate(-2%, -1%) rotate(-2deg) scale(1.08); }
        }

        /* Layer B: medium waves (opposite-ish drift, different phase) */
        .heroStripeLayerB{
          opacity: .9;
        }
        .heroStripeLayerB::before{
          content:"";
          position:absolute;
          inset:-32%;
          background:
            radial-gradient(60% 45% at 70% 30%, rgba(15,46,36,.12), transparent 62%),
            radial-gradient(58% 44% at 30% 60%, rgba(226,200,180,.28), transparent 64%),
            radial-gradient(60% 45% at 55% 55%, rgba(255,255,255,.18), transparent 66%);
          filter: blur(24px);
          animation: waveB 16s ease-in-out infinite;
          transform: translate3d(0,0,0);
        }

        @keyframes waveB{
          0%   { transform: translate( 2%, -2%) rotate( 2deg) scale(1.06); }
          50%  { transform: translate(-2%,  2%) rotate(-2deg) scale(1.12); }
          100% { transform: translate( 2%, -2%) rotate( 2deg) scale(1.06); }
        }

        /* Layer C: small “ripples” (subtle, faster, different direction) */
        .heroStripeLayerC{
          opacity: .75;
          mix-blend-mode: soft-light;
        }
        .heroStripeLayerC::before{
          content:"";
          position:absolute;
          inset:-28%;
          background:
            radial-gradient(52% 38% at 45% 35%, rgba(255,255,255,.22), transparent 62%),
            radial-gradient(50% 36% at 75% 65%, rgba(200,89,43,.14), transparent 64%),
            radial-gradient(52% 38% at 25% 75%, rgba(210,168,142,.16), transparent 66%);
          filter: blur(18px);
          animation: waveC 12s ease-in-out infinite;
          transform: translate3d(0,0,0);
        }

        @keyframes waveC{
          0%   { transform: translate(-1%,  2%) rotate( 1deg) scale(1.04); }
          50%  { transform: translate( 2%, -1%) rotate(-1deg) scale(1.08); }
          100% { transform: translate(-1%,  2%) rotate( 1deg) scale(1.04); }
        }

        /* Optional: gentle “sheen” that pulses in place (adds life without moving directionally) */
        .heroStripeBg::after{
          content:"";
          position:absolute;
          inset:0;
          background: radial-gradient(circle at 50% 0%, rgba(255,255,255,.22), transparent 60%);
          animation: sheen 10s ease-in-out infinite;
          pointer-events:none;
        }
        @keyframes sheen{
          0%,100% { opacity:.45; }
          50%     { opacity:.85; }
        }

        /* Mobile: reduce blur cost slightly, but keep motion readable */
        @media (max-width: 640px){
          .heroStripeBg{
            animation-duration: 24s;
            background-size: 200% 200%;
          }
          .heroStripeLayerA::before{ filter: blur(24px); inset:-30%; animation-duration: 26s; }
          .heroStripeLayerB::before{ filter: blur(20px); inset:-28%; animation-duration: 18s; }
          .heroStripeLayerC::before{ filter: blur(14px); inset:-24%; animation-duration: 14s; }
        }

        @media (prefers-reduced-motion: reduce){
          .heroStripeBg,
          .heroStripeLayerA::before,
          .heroStripeLayerB::before,
          .heroStripeLayerC::before,
          .heroStripeBg::after{
            animation:none !important;
          }
        }
      `}</style>

      {/* Grain (unchanged) */}
      <div
        className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* CENTERED HEADER */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/60 border border-[#0f2e24]/10 text-[#0f2e24] text-xs font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm">
            <ShieldCheck size={14} />
            Physician Formulated
          </div>

          <h1
            className="text-4xl md:text-[5rem] font-serif font-bold leading-[1.1] mb-6 drop-shadow-sm text-[#0f2e24]"
            data-aos="fade-up"
          >
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
                  <span
                    className={`block md:inline md:ml-2 bg-gradient-to-r from-[#C8592B] to-[#D97746] bg-clip-text text-transparent transition-all duration-700 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
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
                        ${
                          email
                            ? 'bg-[#C8592B] hover:bg-[#B04A20] hover:shadow-orange-500/30'
                            : 'bg-[#C8592B] opacity-70 cursor-not-allowed'
                        }`}
                    >
                      {isSubmitting ? 'Processing...' : 'Join Waitlist'}
                    </button>
                    <div className="flex items-center justify-center gap-2 mt-3 text-xs font-medium text-[#5D4037]">
                      <div className="flex -space-x-2">
                        <div className="w-5 h-5 rounded-full bg-gray-200 border-2 border-white"></div>
                        <div className="w-5 h-5 rounded-full bg-gray-300 border-2 border-white"></div>
                        <div className="w-5 h-5 rounded-full bg-gray-400 border-2 border-white"></div>
                      </div>
                      Join 2,000+ Zebras waiting for launch.
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
              {['FDA-Registered Facility', 'cGMP Certified', 'MCAS Friendly', 'Zero Fillers'].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center px-3 py-1.5 rounded-md bg-white/50 border border-[#0f2e24]/10 text-[#2c1810] text-xs font-bold backdrop-blur-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0f2e24] mr-2"></span>
                  {badge}
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
