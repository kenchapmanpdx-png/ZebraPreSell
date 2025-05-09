import ZebraBackground from './ZebraBackground';

export default function Hero() {
  return (
    <section id="home" className="pt-32 md:pt-40 pb-20 md:pb-20 relative overflow-hidden inw-gradient text-white">
      <div className="absolute inset-0 bg-[url('@assets/zebra-pattern.jpg')] opacity-10 z-0"></div>
      <div className="container relative z-10">
        {/* Header Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="text-left">
            <div className="flex flex-col space-y-1">
              <p className="text-3xl md:text-5xl font-bold">
                Wellness for the <span className="text-white">Rare</span> and <span className="text-white">Resilient</span>
              </p>
              <p className="text-lg md:text-xl text-white mb-8">
                Targeted Supplemental Support for EDS, POTS, MCAS, and Dysautonomia
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-flex items-center px-3 py-1 bg-white/10 text-white text-xs uppercase tracking-wider rounded-sm border border-white/20">All-Natural</span>
              <span className="inline-flex items-center px-3 py-1 bg-white/10 text-white text-xs uppercase tracking-wider rounded-sm border border-white/20">Bioavailable</span>
              <span className="inline-flex items-center px-3 py-1 bg-white/10 text-white text-xs uppercase tracking-wider rounded-sm border border-white/20">System-based</span>
              <span className="inline-flex items-center px-3 py-1 bg-white/10 text-white text-xs uppercase tracking-wider rounded-sm border border-white/20">Allergen-Free</span>
              <span className="inline-flex items-center px-3 py-1 bg-white/10 text-white text-xs uppercase tracking-wider rounded-sm border border-white/20">Total Transparency</span>
              <span className="inline-flex items-center px-3 py-1 bg-white/10 text-white text-xs uppercase tracking-wider rounded-sm border border-white/20">Targeted Support</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#products" className="btn btn-accent text-sm uppercase tracking-wider font-medium">View Our Products</a>
              <a href="#why" className="btn bg-white/60 hover:bg-white/80 text-[hsl(var(--inw-teal))] font-semibold text-sm uppercase tracking-wider">Learn More</a>
            </div>
          </div>
          
          <div className="relative mt-12">
            <div className="p-6 bg-white rounded-sm shadow-xl text-[hsl(var(--inw-text))]">
              <h3 className="text-xl font-bold text-[hsl(var(--inw-teal))] mb-4 uppercase tracking-wide">
                Why "Zebra"?
              </h3>
              
              <p className="text-[hsl(var(--inw-text))] leading-relaxed">
                The Zebra is the mascot for rare conditions and diseases. The medical system teaches, "When you hear hoofbeats, think horses." But sometimes, it's a Zebra — someone with a rare, often misunderstood and undiagnosed condition.
              </p>
              
              <div className="mt-6 font-bold text-lg text-[hsl(var(--inw-teal-dark))]">
                We honor the Zebra. Because rare shouldn't mean invisible.
              </div>
              
              <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-[hsl(var(--inw-teal))] rounded-sm flex items-center justify-center shadow-lg">
                <div className="text-white text-2xl font-bold">Z</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
