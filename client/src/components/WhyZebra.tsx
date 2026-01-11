import React from 'react';

export default function WhyZebra() {
  return (
    // SECTION: Restored to larger height (py-20) for the spotlight effect
    <section className="py-20 bg-[#E8DCCA] relative overflow-hidden flex items-center justify-center">

      {/* 1. ZEBRA PATTERN (Visible on edges) */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply"
        style={{ 
          backgroundImage: 'url("/zebra-pattern.jpg")', 
          backgroundSize: '400px' 
        }}
      ></div>

      {/* 2. THE SPOTLIGHT (Solid Center Fading Out) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FDFBF7_0%,#FDFBF7_30%,transparent_85%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">

        {/* PILL BADGE */}
        <div className="inline-block mb-6 px-5 py-1.5 rounded-full bg-[#0f2e24] text-[#E8DCCA] text-[10px] font-bold uppercase tracking-[0.25em] shadow-lg">
          Our Mascot
        </div>

        {/* HEADLINE */}
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#0f2e24] mb-8 drop-shadow-sm">
          Why <span className="text-[#C8592B] italic">"Zebra"</span>?
        </h2>

        {/* CONTENT BOX */}
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-xl md:text-2xl font-medium text-[#2c1810]">
            The Zebra is the mascot for <strong className="text-[#0f2e24]">rare conditions</strong>.
          </p>

          <div className="bg-white/60 backdrop-blur-sm border border-[#C8592B]/10 rounded-xl p-8 shadow-xl transform rotate-1">
            <p className="text-xs text-[#8D6E63] font-bold uppercase tracking-widest mb-3">
              Medical School Adage
            </p>
            <p className="font-serif text-2xl md:text-4xl text-[#C8592B] italic leading-tight">
              "When you hear hoofbeats, think horses, not zebras."
            </p>
          </div>

          <div className="h-1 w-24 mx-auto rounded-full bg-[#C8592B]/40 my-8"></div>

          <p className="text-2xl font-serif font-bold text-[#0f2e24]">
            We are here for the <span className="text-[#C8592B] underline decoration-[#C8592B]/30 underline-offset-4">Zebras</span>.
          </p>
        </div>
      </div>
    </section>
  );
}