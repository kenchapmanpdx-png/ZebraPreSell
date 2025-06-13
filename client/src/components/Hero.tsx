
import React from 'react';
import { Link } from 'wouter';
import ZebraHeart from './ZebraHeart';

export default function Hero() {
  return (
    <section className="bg-primary text-white py-20 px-8 pt-32">
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
          <div className="flex gap-4 mt-4">
            <Link to="#products">
              <button className="bg-white text-primary font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02]">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-[280px] md:w-[400px] h-[280px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
            <img 
              src="/src/assets/zebrawell-products-hero.jpg" 
              alt="ZebraWell AM and PM Formula bottles" 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to a placeholder if image fails
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.fallback-content')) {
                  const fallback = document.createElement('div');
                  fallback.className = 'fallback-content text-center text-white/80 p-8';
                  fallback.innerHTML = `
                    <div class="text-6xl mb-4">🦓</div>
                    <div class="text-xl font-semibold">ZebraWell</div>
                    <div class="text-sm">AM & PM Formula</div>
                  `;
                  parent.appendChild(fallback);
                }
              }}
            />
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
