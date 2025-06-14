
import React from 'react';
import { Link } from 'wouter';
import ZebraHeart from './ZebraHeart';

export default function Hero() {
  return (
    <section className="text-white py-20 px-8 pt-20" style={{
        background: 'hsla(161, 51%, 12%, 1)',
        backgroundImage: 'linear-gradient(90deg, hsla(161, 51%, 12%, 1) 0%, hsla(115, 41%, 27%, 1) 49%, hsla(161, 51%, 12%, 1) 100%)'
      }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-relaxed mb-5" data-aos="fade-up">
            Clinical-grade supplements for POTS, EDS, and Dysautonomia. Clean. Bioavailable. Third-party tested.
          </h1>
          
          <div className="flex flex-wrap gap-4 mt-12 mb-12 text-sm" data-aos="fade">
            <span className="bg-white/10 text-white px-4 py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-white text-black px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> cGMP Manufactured
            </span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-white text-black px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> FDA-Registered Facility
            </span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-white text-black px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> Third-Party Tested
            </span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-white text-black px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> MCAS-Friendly Formulations
            </span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-white text-black px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> Free from Dyes, Fillers, & Titanium Dioxide
            </span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-white text-black px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> No Stearates, Soy, Gluten, or Dairy
            </span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-white text-black px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> Hypersensitive-System Approved
            </span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-white text-black px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> Therapeutic Doses—No "Pixie Dusting"
            </span>
          </div>
          
          <div className="flex gap-4 mt-10" data-aos="fade-up">
            <Link to="#products">
              <button className="bg-[#89B317] text-white font-semibold px-8 py-4 rounded-md shadow hover:bg-[#89B317]/90 transition-all duration-300 hover:scale-[1.05]">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center" data-aos="fade">
          <div className="w-[280px] md:w-[400px] h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="/images/zebrawell-hero-bottles.png" 
              alt="ZebraWell AM and PM Formula bottles" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Why Zebra Section */}
      <div className="relative w-full py-12 mt-16 rounded-lg overflow-hidden" style={{
        background: 'hsla(161, 51%, 12%, 1)',
        backgroundImage: 'linear-gradient(90deg, hsla(161, 51%, 12%, 1) 0%, hsla(115, 41%, 27%, 1) 49%, hsla(161, 51%, 12%, 1) 100%)'
      }}>
        {/* Zebra pattern overlay */}
        <div 
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: 'url(/zebra-pattern.jpg)',
            opacity: 0.0175,
            backgroundSize: '600px 300px'
          }}
        ></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10" data-aos="fade">
          <h3 className="text-4xl md:text-5xl mb-6 text-white font-serif font-bold">Why "<span className="text-terra">Zebra</span>"?</h3>
          <div className="space-y-4 text-2xl text-white/90 leading-relaxed" data-aos="fade">
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
