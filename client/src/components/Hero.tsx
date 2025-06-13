
import React from 'react';
import { Link } from 'wouter';
import ZebraHeart from './ZebraHeart';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#0f2e24] to-[#072018] text-white py-20 px-8 pt-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-serif font-bold leading-tight">
            Behind every bottle of ZebraWell is a deeper purpose—
            <br />
            and her name is Ava.
          </h1>
          <p className="text-lg text-white/90">
            Clinical-grade supplements designed for the rare and resilient. Built for POTS, EDS, and Dysautonomia support—clean, bioavailable, and tested.
          </p>
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
          <div className="w-[280px] md:w-[400px] h-[280px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-white to-gray-50 flex items-center justify-center">
            <div className="flex gap-6 items-end">
              {/* AM Bottle */}
              <div className="relative">
                <div className="w-20 h-28 bg-gradient-to-b from-orange-100 to-orange-200 rounded-lg border-2 border-orange-300 shadow-lg">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-orange-400 rounded-t-lg"></div>
                  <div className="mt-8 text-center p-2">
                    <div className="text-xs font-bold text-orange-800 mb-1">AM</div>
                    <div className="text-[8px] text-orange-600">Morning Energy</div>
                  </div>
                </div>
              </div>
              
              {/* PM Bottle */}
              <div className="relative">
                <div className="w-20 h-28 bg-gradient-to-b from-blue-100 to-blue-200 rounded-lg border-2 border-blue-300 shadow-lg">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-blue-400 rounded-t-lg"></div>
                  <div className="mt-8 text-center p-2">
                    <div className="text-xs font-bold text-blue-800 mb-1">PM</div>
                    <div className="text-[8px] text-blue-600">Evening Recovery</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Brand Label */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <div className="text-sm font-serif font-bold text-primary">ZebraWell</div>
              <div className="text-xs text-primary/60">Clinical Formula</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Zebra Section */}
      <div className="relative w-full py-20 mt-20 bg-surface/10 rounded-lg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl mb-6 text-white font-serif font-bold">Why "Zebra"?</h3>
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
