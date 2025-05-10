import ZebraBackground from './ZebraBackground';

export default function Hero() {
  return (
    <section id="home" className="pt-32 md:pt-52 pb-20 md:pb-20 relative overflow-hidden capstone-gradient text-white">
      <div className="absolute inset-0 bg-[url('@assets/zebra-pattern.jpg')] opacity-10 z-0"></div>
      <div className="container relative z-10">
        {/* Header Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Wellness for the <span className="text-[hsl(var(--capstone-highlight))]">Rare</span> and <span className="text-[hsl(var(--capstone-highlight))]">Resilient</span>
            </h1>
            <p className="text-xl md:text-2xl text-[hsl(var(--capstone-off-white))] mb-8">
              Supplemental Support for EDS, POTS, and MCAS
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-flex items-center px-3 py-1 bg-white/10 text-white text-sm rounded-md border border-white/20">All-Natural</span>
              <span className="inline-flex items-center px-3 py-1 bg-white/10 text-white text-sm rounded-md border border-white/20">Bioavailable</span>
              <span className="inline-flex items-center px-3 py-1 bg-white/10 text-white text-sm rounded-md border border-white/20">Works as a System</span>
              <span className="inline-flex items-center px-3 py-1 bg-white/10 text-white text-sm rounded-md border border-white/20">Allergen-Free</span>
              <span className="inline-flex items-center px-3 py-1 bg-white/10 text-white text-sm rounded-md border border-white/20">Total Transparency</span>
              <span className="inline-flex items-center px-3 py-1 bg-white/10 text-white text-sm rounded-md border border-white/20">Targeted Support</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#products" className="btn btn-accent font-semibold">View Our Products</a>
              <a href="#why" className="bg-transparent border border-white hover:bg-white/10 text-white px-6 py-3 rounded-md font-medium transition-all duration-200">Learn More</a>
            </div>
          </div>
          
          <div className="relative">
            <div className="p-6 bg-white rounded-xl shadow-xl text-[hsl(var(--capstone-slate))]">
              <h3 className="text-xl font-bold text-[hsl(var(--capstone-blue))] mb-4">
                Why "Zebra"?
              </h3>
              
              <p className="text-[hsl(var(--capstone-slate-light))] leading-relaxed">
                The Zebra is the mascot for rare conditions and diseases. The medical system teaches, "When you hear hoofbeats, think horses." But sometimes, it's a Zebra — someone with a rare, often misunderstood and undiagnosed condition.
              </p>
              
              <div className="mt-6 font-bold text-lg text-[hsl(var(--capstone-blue-dark))]">
                We honor the Zebra. Because rare shouldn't mean invisible.
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[hsl(var(--capstone-highlight))] rounded-full flex items-center justify-center shadow-lg">
                <div className="text-white text-3xl font-bold">Z</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
