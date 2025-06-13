
import React from 'react';
import { Link } from 'wouter';
import ZebraHeart from './ZebraHeart';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#0f2e24] to-[#072018] text-white py-20 px-8 pt-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 space-y-9">
          <h1 className="text-3xl font-serif font-bold leading-tight">
            Clinical-grade supplements designed for the rare and resilient. Built for POTS, EDS, and Dysautonomia support—clean, bioavailable, and tested.
          </h1>
          <div className="flex flex-wrap gap-2 mt-4 mb-6 text-sm">
            <span className="bg-white/10 text-white px-3 py-1 rounded-full border border-white/20">✅ cGMP Manufactured</span>
            <span className="bg-white/10 text-white px-3 py-1 rounded-full border border-white/20">✅ FDA-Registered Facility</span>
            <span className="bg-white/10 text-white px-3 py-1 rounded-full border border-white/20">✅ Third-Party Tested</span>
            <span className="bg-white/10 text-white px-3 py-1 rounded-full border border-white/20">✅ MCAS-Safe</span>
          </div>
          <div className="flex gap-4 mt-4">
            <Link to="#products">
              <button className="bg-white text-primary font-semibold px-6 py-3 rounded-md shadow hover:bg-[#f5f5f5] border border-accent transition-all duration-300 hover:scale-[1.02]">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
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
      <div className="relative w-full py-20 mt-20 bg-surface/10 rounded-lg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl mb-6 text-white font-serif font-bold">Why "<span className="text-terra">Zebra</span>"?</h3>
          <div className="space-y-4 text-lg text-white/90 leading-relaxed">
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
