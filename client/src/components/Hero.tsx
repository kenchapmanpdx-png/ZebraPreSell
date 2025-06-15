import React from 'react';
import { Link } from 'wouter';
import ZebraHeart from './ZebraHeart';

export default function Hero() {
  return (
    <section className="text-white py-12 md:py-20 px-4 md:px-8 pt-8 md:pt-12" style={{
        background: 'hsla(161, 51%, 12%, 1)',
        backgroundImage: 'linear-gradient(90deg, hsla(161, 51%, 12%, 1) 15%, hsla(115, 41%, 27%, 1) 49%, hsla(161, 51%, 12%, 1) 85%)'
      }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <div className="md:w-1/2 space-y-4 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight md:leading-relaxed mb-5" data-aos="fade-up" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
            Clinical-Grade Supplements for POTS, EDS, and Dysautonomia. Clean. Bioavailable. Third-Party Tested.
          </h1>

          <div className="flex flex-wrap gap-2 md:gap-4 mt-6 md:mt-12 mb-6 md:mb-12 text-xs md:text-sm" data-aos="fade">
            <span className="bg-white/10 text-white px-2 md:px-4 py-1 md:py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-[#89B317] text-white px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> cGMP Manufactured
            </span>
            <span className="bg-white/10 text-white px-2 md:px-4 py-1 md:py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-[#89B317] text-white px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> FDA-Registered Facility
            </span>
            <span className="bg-white/10 text-white px-2 md:px-4 py-1 md:py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-[#89B317] text-white px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> Third-Party Tested
            </span>
            <span className="bg-white/10 text-white px-2 md:px-4 py-1 md:py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-[#89B317] text-white px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> MCAS-Friendly Formulations
            </span>
            <span className="bg-white/10 text-white px-2 md:px-4 py-1 md:py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-[#89B317] text-white px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> Free from Dyes, Fillers, & Titanium Dioxide
            </span>
            <span className="bg-white/10 text-white px-2 md:px-4 py-1 md:py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-[#89B317] text-white px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> No Stearates, Soy, Gluten, or Dairy
            </span>
            <span className="bg-white/10 text-white px-2 md:px-4 py-1 md:py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-[#89B317] text-white px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> Hypersensitive-System Approved
            </span>
            <span className="bg-white/10 text-white px-2 md:px-4 py-1 md:py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-[#89B317] text-white px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> Therapeutic Doses—No "Pixie Dusting"
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-10" data-aos="fade-up">
            <Link to="#products">
              <button className="bg-[#89B317] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-md shadow hover:bg-[#89B317]/90 transition-all duration-300 hover:scale-[1.05] w-full sm:w-auto">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-start" data-aos="fade">
          <div className="w-[280px] md:w-[400px] h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-white" style={{ marginTop: '-2rem' }}>
            <img 
              src="/images/zebrawell-hero-bottles.png" 
              alt="ZebraWell AM and PM Formula bottles" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Why Zebra Section */}
      <div className="relative w-fit mx-auto py-8 md:py-12 mt-8 md:mt-16 rounded-lg overflow-hidden px-4 md:px-8" style={{
        background: '#1D4526'
      }}>
        {/* Solid dark green background */}
        <div className="absolute inset-0" style={{ background: '#1D4526' }}></div>
        {/* Zebra pattern overlay */}
        <div 
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: 'url(/zebra-pattern.jpg)',
            opacity: 0.0175,
            backgroundSize: '600px 300px'
          }}
        ></div>
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center relative z-10" data-aos="fade">
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 md:mb-6 text-white font-serif font-bold">Why "<span className="text-terra">Zebra</span>"?</h3>
          <div className="space-y-3 md:space-y-4 text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed" data-aos="fade">
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