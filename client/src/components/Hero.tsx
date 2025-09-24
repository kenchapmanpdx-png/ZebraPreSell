import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { useToast } from '@/hooks/use-toast';
import ZebraHeart from './ZebraHeart';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  // Rotating text state
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

  return (
    <section className="text-white py-4 sm:py-6 md:py-10 px-3 sm:px-4 md:px-8 pt-2 sm:pt-4 md:pt-6" style={{
        background: 'hsla(161, 51%, 12%, 1)',
        backgroundImage: 'radial-gradient(circle at 30% 30%, hsla(161, 51%, 18%, 0.2), transparent 60%), linear-gradient(90deg, hsla(161, 51%, 12%, 1) 10%, hsla(115, 41%, 27%, 1) 50%, hsla(161, 51%, 12%, 1) 90%)'
      }}>
      <div className="max-w-6xl mx-auto">
        {/* Full width heading - reduced by 35% */}
        <div className="text-center mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold leading-tight mb-3 sm:mb-4 md:mb-5" data-aos="fade-up" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
            Therapeutic Clinical-Grade Supplements
            <div className="text-center mt-2">for POTS & EDS.</div>
            <div className="text-center mt-6 mb-6" style={{ fontSize: '0.696em' }}>(Postural Orthostatic Tachycardia Syndrome & Ehlers-Danlos Syndrome)</div>
            
          </h1>
        </div>

        {/* Rotating text section */}
        <div className="flex justify-center mb-8">
          <div className="flex justify-center md:justify-start md:ml-0">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold leading-tight text-white mb-4 text-left">
              <span>Wellness for the</span> <br />
              <div className="relative inline-block min-h-[1.5em] overflow-visible pb-2">
                <span 
                  className={`bg-gradient-to-r from-[#ff774d] to-[#ffb48a] bg-clip-text text-transparent word-fade-smooth ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[2px]'
                  }`}
                  style={{
                    filter: isVisible ? 'blur(0)' : 'blur(0.5px)',
                    fontSize: '0.85em'
                  }}
                >
                  {words[currentWordIndex]}
                </span>
              </div>
            </h2>
          </div>
        </div>

        {/* Two column layout */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left column - Reservation form */}
          <div className="md:w-1/2" data-aos="fade-right" data-aos-delay="300">
            <div className="inline-block py-6 px-6 rounded-3xl shadow-xl border-2 border-amber-300" style={{ backgroundColor: 'white', opacity: 1, backdropFilter: 'none' }}>
              <div className="text-center">
                <h3 className="text-2xl font-serif font-bold text-[#C8592B] mb-3">📧 Reserve Your Spot – Limited First Run!</h3>
                <p className="text-lg text-[#1D4526] leading-relaxed mb-4">
                  Be the first to know when ZebraWell is available for order.
                </p>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1 min-w-0 px-3 py-2 border-2 border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8592B] focus:border-[#C8592B] text-gray-900 text-sm bg-white"
                      />
                      <button
                        type="submit"
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
                    <p className="text-xs text-[#1D4526] mt-2 opacity-80">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                ) : (
                  <div className="text-center">
                    <div className="text-6xl mb-4">✅</div>
                    <h4 className="text-xl font-bold text-[#1D4526] mb-2">You're all set!</h4>
                    <p className="text-[#1D4526]">
                      We'll send you an email as soon as ZebraWell is ready to order.
                    </p>
                  </div>
                )}
              </div>
            </div>
            <p className="text-center text-base text-white mt-4">
              We'll send you an email notification as soon as we launch.
            </p>

            {/* Features section moved up */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-4 text-xs sm:text-sm md:text-base justify-center" data-aos="fade">
                <span className="bg-white/10 text-white px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 rounded-full border border-white/20 subtle-scale">
                  <span className="text-terra mr-1 sm:mr-2 font-bold" style={{ fontSize: '1.44em' }}>✓</span> cGMP Manufactured
                </span>
                <span className="bg-white/10 text-white px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 rounded-full border border-white/20 subtle-scale">
                  <span className="text-terra mr-1 sm:mr-2 font-bold" style={{ fontSize: '1.44em' }}>✓</span> FDA-Registered Facility
                </span>
                <span className="bg-white/10 text-white px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 rounded-full border border-white/20 subtle-scale">
                  <span className="text-terra mr-1 sm:mr-2 font-bold" style={{ fontSize: '1.44em' }}>✓</span> Third-Party Tested
                </span>
                <span className="bg-white/10 text-white px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 rounded-full border border-white/20 subtle-scale">
                  <span className="text-terra mr-1 sm:mr-2 font-bold" style={{ fontSize: '1.44em' }}>✓</span> MCAS-Friendly Formulations
                </span>
                <span className="bg-white/10 text-white px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 rounded-full border border-white/20 subtle-scale">
                  <span className="text-terra mr-1 sm:mr-2 font-bold" style={{ fontSize: '1.44em' }}>✓</span> Zero Junk Ever
                </span>
                <span className="bg-white/10 text-white px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 rounded-full border border-white/20 subtle-scale">
                  <span className="text-terra mr-1 sm:mr-2 font-bold" style={{ fontSize: '1.44em' }}>✓</span> Rigorously Tested for Purity
                </span>
              </div>


            </div>
          </div>

          {/* Right column - Bottle image */}
          <div className="md:w-1/2">
            <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-md flex justify-center mx-auto" data-aos="fade-left">
              <img 
                src="/images/zebrawell-bottles-final2.png" 
                alt="ZebraWell AM and PM Formula bottles" 
                className="w-full h-auto max-w-full object-contain drop-shadow-2xl rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Zebra Section */}
      <div className="relative w-fit mx-auto py-6 sm:py-8 md:py-12 mt-6 sm:mt-8 md:mt-16 rounded-lg overflow-hidden px-3 sm:px-4 md:px-8 border-2 border-white" style={{
        background: '#1D4526'
      }}>
        {/* Solid dark green background */}
        <div className="absolute inset-0" style={{ background: '#1D4526' }}></div>
        {/* Zebra pattern overlay */}
        <div 
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: 'url(/zebra-pattern.jpg)',
            opacity: 0.021,
            backgroundSize: '600px 300px'
          }}
        ></div>
        <div className="max-w-3xl mx-auto px-2 sm:px-4 md:px-6 text-center relative z-10" data-aos="fade">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4 md:mb-6 text-white font-serif font-bold">Why "<span className="text-terra">Zebra</span>"?</h3>
          <div className="space-y-2 sm:space-y-3 md:space-y-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed" data-aos="fade">
            <p>The Zebra is the mascot for rare conditions and diseases.</p>
            <p>The medical system teaches, "When you hear hoofbeats, think horses."</p>
            <p>But sometimes, it's a Zebra — someone with a rare, often misunderstood and undiagnosed condition.</p>
            <p className="font-medium text-white">We honor the Zebra. Because rare shouldn't mean invisible.</p>
          </div>
        </div>
      </div>
    </section>
  );
}