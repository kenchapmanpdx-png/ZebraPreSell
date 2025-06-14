
import React from 'react';
import { Link } from 'wouter';
import ZebraHeart from './ZebraHeart';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#0f2e24] to-[#072018] text-white py-20 px-8 pt-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-[3.45xl] font-serif font-bold leading-relaxed mb-8 slide-in-left">
            Clinical-grade supplements for POTS, EDS, and Dysautonomia. Clean. Bioavailable. Third-party tested.
          </h1>
          
          <div className="grid grid-cols-2 gap-3 mt-10 mb-10 text-sm slide-in-left stagger-delay-1">
            <span className="bg-white/10 text-white px-3 py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-white text-black px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> Third-Party Tested
            </span>
            <span className="bg-white/10 text-white px-3 py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-white text-black px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> Therapeutic Doses—No "Pixie Dusting"
            </span>
            <span className="bg-white/10 text-white px-3 py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-white text-black px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> cGMP Manufactured
            </span>
            <span className="bg-white/10 text-white px-3 py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-white text-black px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> Hypersensitive-System Approved
            </span>
            <span className="bg-white/10 text-white px-3 py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-white text-black px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> FDA-Registered Facility
            </span>
            <span className="bg-white/10 text-white px-3 py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-white text-black px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> No Stearates, Soy, Gluten, or Dairy
            </span>
            <span className="bg-white/10 text-white px-3 py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-white text-black px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> MCAS-Friendly Formulations
            </span>
            <span className="bg-white/10 text-white px-3 py-2 rounded-full border border-white/20 subtle-scale">
              <span className="bg-white text-black px-1 py-0.5 rounded mr-2 font-bold text-xs">✓</span> Free from Dyes, Fillers, & Titanium Dioxide
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-10 slide-in-left stagger-delay-2">
            <Link to="#products">
              <button className="bg-terra text-white font-semibold px-8 py-4 rounded-md shadow hover:bg-terra-dark transition-all duration-300 hover:scale-[1.05] glow-on-hover">
                Shop Now
              </button>
            </Link>
            <div className="flex gap-3">
              <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-[1.05]">
                <img src="/images/amazon-button.png" alt="Buy on Amazon" className="h-12 w-auto" />
              </a>
              <a href="https://shopify.com" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-[1.05]">
                <img src="/images/shopify-button.png" alt="Shop on Shopify" className="h-12 w-auto" />
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-[280px] md:w-[400px] h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-white slide-in-right subtle-scale">
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
        background: '#0f2e24'
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
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h3 className="text-4xl md:text-5xl mb-6 text-white font-serif font-bold">Why "<span className="text-terra">Zebra</span>"?</h3>
          <div className="space-y-4 text-2xl text-white/90 leading-relaxed">
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
