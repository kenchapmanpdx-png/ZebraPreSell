import React from 'react';

export default function WhyZebra() {
  return (
    // BACKGROUND: Warm Alabaster/Beige (#F5EBE0) matches the "Modern Neutrals" palette
    // Padding is reduced (py-16) so it doesn't take up too much vertical space.
    <section className="py-16 bg-[#F5EBE0] relative overflow-hidden">

      {/* ZEBRA TEXTURE: Very subtle, blended into the beige for that "watermark" look */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{ 
          backgroundImage: 'url("/zebra-pattern.jpg")', 
          backgroundSize: '400px' 
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10 text-center">

        {/* PILL BADGE: Dark Forest Green background, White text */}
        <div className="inline-block mb-6 px-5 py-1.5 rounded-full bg-[#0f2e24] text-white text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
          Our Mascot
        </div>

        {/* HEADLINE: Deep Green with Copper Accent */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0f2e24] mb-8">
          Why <span className="text-[#C8592B]">"Zebra"</span>?
        </h2>

        {/* CONTENT BOX: Compact max-width to keep it readable and not too tall */}
        <div className="max-w-3xl mx-auto space-y-6">

          <p className="text-xl md:text-2xl font-medium text-[#2c1810] leading-relaxed">
            The Zebra is the mascot for <strong className="text-[#0f2e24] font-bold">rare conditions</strong>.
          </p>

          <div className="space-y-2">
            <p className="text-lg text-[#5D4037] font-medium">
              Doctors are taught:
            </p>
            {/* QUOTE: Copper, Italic, Serif */}
            <p className="font-serif text-2xl md:text-3xl text-[#C8592B] italic leading-tight">
              "When you hear hoofbeats, think horses, not zebras."
            </p>
          </div>

          {/* DIVIDER LINE */}
          <div className="w-16 h-0.5 bg-[#C8592B]/40 mx-auto my-8"></div>

          {/* CLOSING STATEMENT */}
          <p className="text-2xl font-serif font-bold text-[#0f2e24]">
            We are here for the 
            {/* STYLIZED UNDERLINE FOR "ZEBRAS" */}
            <span className="relative ml-2 text-[#C8592B] inline-block">
              Zebras.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#C8592B] opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </p>

        </div>
      </div>
    </section>
  );
}