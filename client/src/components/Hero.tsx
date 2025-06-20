import React from 'react';
import { Link } from 'wouter';
import ZebraHeart from './ZebraHeart';

export default function Hero() {
  return (
    <section className="text-white py-6 sm:py-8 md:py-16 px-3 sm:px-4 md:px-8 pt-4 sm:pt-6 md:pt-10" style={{
        background: 'hsla(161, 51%, 12%, 1)',
        backgroundImage: 'linear-gradient(90deg, hsla(161, 51%, 12%, 1) 15%, hsla(115, 41%, 27%, 1) 49%, hsla(161, 51%, 12%, 1) 85%)'
      }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-3 sm:gap-4 md:gap-8">
        <div className="md:w-1/2 space-y-2 sm:space-y-3 md:space-y-6">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold leading-tight mb-3 sm:mb-4 md:mb-5" data-aos="fade-up" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
            Therapeutic Clinical-Grade Supplements for (POTS) <span style={{ fontSize: '0.9em' }}>Postural Orthostatic Tachycardia Syndrome</span> & (EDS) <span style={{ fontSize: '0.9em' }}>Ehlers-Danlos Syndrome</span>
          </h1>

          <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-4 mt-3 sm:mt-4 md:mt-8 mb-3 sm:mb-4 md:mb-8 text-xs sm:text-sm md:text-base" data-aos="fade">
            <span className="bg-white/10 text-white px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 rounded-full border border-white/20 subtle-scale">
              <span className="text-[#89B317] mr-1 sm:mr-2 font-bold" style={{ fontSize: '1.44em' }}>✓</span> cGMP Manufactured
            </span>
            <span className="bg-white/10 text-white px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 rounded-full border border-white/20 subtle-scale">
              <span className="text-[#89B317] mr-1 sm:mr-2 font-bold" style={{ fontSize: '1.44em' }}>✓</span> FDA-Registered Facility
            </span>
            <span className="bg-white/10 text-white px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 rounded-full border border-white/20 subtle-scale">
              <span className="text-[#89B317] mr-1 sm:mr-2 font-bold" style={{ fontSize: '1.44em' }}>✓</span> Third-Party Tested
            </span>
            <span className="bg-white/10 text-white px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 rounded-full border border-white/20 subtle-scale">
              <span className="text-[#89B317] mr-1 sm:mr-2 font-bold" style={{ fontSize: '1.44em' }}>✓</span> MCAS-Friendly Formulations
            </span>
            <span className="bg-white/10 text-white px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 rounded-full border border-white/20 subtle-scale">
              <span className="text-[#89B317] mr-1 sm:mr-2 font-bold" style={{ fontSize: '1.44em' }}>✓</span> Zero Junk Ever
            </span>
            <span className="bg-white/10 text-white px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 rounded-full border border-white/20 subtle-scale">
              <span className="text-[#89B317] mr-1 sm:mr-2 font-bold" style={{ fontSize: '1.44em' }}>✓</span> Rigorously Tested for Purity
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4 md:mt-8" data-aos="fade-up">
            <Link to="#products" className="w-3/4 mx-auto sm:w-1/3 sm:mx-0">
              <button className="bg-[#89B317] text-white font-semibold px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-md shadow hover:bg-[#89B317]/90 transition-all duration-300 hover:scale-[1.05] w-full text-sm sm:text-base">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-4 sm:mt-6 md:mt-0 w-full flex justify-center" data-aos="fade-left">
          <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-md flex justify-center">
            <img 
              src="/images/zebrawell-bottles-final2.png" 
              alt="ZebraWell AM and PM Formula bottles" 
              className="w-full h-auto max-w-full object-contain drop-shadow-2xl rounded-lg"
            />
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
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3 sm:mb-4 md:mb-6 text-white font-serif font-bold">Why "<span className="text-terra">Zebra</span>"?</h3>
          <div className="space-y-2 sm:space-y-3 md:space-y-4 text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed" data-aos="fade">
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