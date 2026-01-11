import React from 'react';

export default function WhyZebra() {
  return (
    <section className="py-16 md:py-24 bg-[#0f2e24] relative overflow-hidden">
      {/* Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{ 
          backgroundImage: 'url("/zebra-pattern.jpg")', 
          backgroundSize: '400px' 
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#C8592B]/50 text-[#C8592B] text-sm font-bold uppercase tracking-widest">
          Our Mascot
        </div>

        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#FDFBF7] mb-8">
          Why <span className="text-[#C8592B] italic">"Zebra"</span>?
        </h2>

        <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-2xl text-[#E8EDE6] leading-relaxed font-light">
          <p>
            The Zebra is the mascot for <strong className="text-white font-semibold">rare conditions</strong> and diseases.
          </p>

          <p>
            The medical system teaches doctors: <br className="hidden md:block"/>
            <span className="italic text-[#C8592B]">"When you hear hoofbeats, think horses, not zebras."</span>
          </p>

          <div className="my-8 w-24 h-1 bg-[#C8592B] mx-auto rounded-full"></div>

          <p className="font-serif text-2xl md:text-3xl text-white">
            We are here for the <span className="text-[#C8592B] underline decoration-[#C8592B]/30 underline-offset-4">Zebras</span>.
          </p>
        </div>
      </div>
    </section>
  );
}