import ZebraBackground from './ZebraBackground';

export default function Hero() {
  return (
    <section id="home" className="pt-32 md:pt-44 pb-0 md:pb-0 relative overflow-hidden">
      <ZebraBackground />
      <div className="relative z-1">
        {/* Header Content */}
        <div className="max-w-3xl mx-auto text-center px-6">
          <h1 className="text-3xl md:text-5xl font-lora font-bold mb-6 leading-tight fade-in text-forest">
            Wellness for the Rare and Resilient<br/>
            <span className="text-2xl md:text-4xl text-terra-dark font-medium block pt-2 pb-2 mt-1 mb-1">Support for EDS, POTS, and MCAS</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-3 mb-6 fade-in">
            <div className="flex items-center px-3 py-1 bg-forest/30 text-forest rounded-full border border-forest/30">
              <i className="fas fa-leaf mr-2"></i>
              <span className="text-sm font-medium">All-Natural</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-terra/30 text-terra-dark rounded-full border border-terra/30">
              <i className="fas fa-seedling mr-2"></i>
              <span className="text-sm font-medium">Bioavailable</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-sage-light/50 text-sage-dark rounded-full border border-sage-light/60">
              <i className="fas fa-puzzle-piece mr-2"></i>
              <span className="text-sm font-medium">Works as a System</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-sage-light/50 text-sage-dark rounded-full border border-sage-light/60">
              <i className="fas fa-apple-alt mr-2"></i>
              <span className="text-sm font-medium">Allergen-Free</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-6 fade-in">
            <div className="flex items-center px-3 py-1 bg-terra/30 text-terra-dark rounded-full border border-terra/30">
              <i className="fas fa-microscope mr-2"></i>
              <span className="text-sm font-medium">Total Transparency</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-sage-light/50 text-sage-dark rounded-full border border-sage-light/60">
              <i className="fas fa-user-plus mr-2"></i>
              <span className="text-sm font-medium">Formulated For Zebras</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-forest/30 text-forest rounded-full border border-forest/30">
              <i className="fas fa-dna mr-2"></i>
              <span className="text-sm font-medium">Targeted Support</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-terra/30 text-terra-dark rounded-full border border-terra/30">
              <i className="fas fa-feather mr-2"></i>
              <span className="text-sm font-medium">Gentle by Design</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-sage-light/50 text-sage-dark rounded-full border border-sage-light/60">
              <i className="fas fa-ban mr-2"></i>
              <span className="text-sm font-medium">No Junk. Ever.</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-forest/30 text-forest rounded-full border border-forest/30">
              <i className="fas fa-brain mr-2"></i>
              <span className="text-sm font-medium">Smart Science</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-terra/30 text-terra-dark rounded-full border border-terra/30">
              <i className="fas fa-leaf mr-2"></i>
              <span className="text-sm font-medium">Only What Helps</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-8 mt-8 mb-5" style={{ backgroundColor: '#F8F2E6', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg md:text-xl mb-6 text-neutral-dark fade-in font-lora text-center">
            Pure, organic formulations designed specifically for sensitive systems.
          </p>
          
          <p className="text-lg md:text-xl italic text-center text-forest">
            Medical students are taught, "When you hear hoofbeats, think horses." But sometimes, it's a Zebra — someone with a rare, often misunderstood condition. We honor the Zebra. Because rare shouldn't mean invisible.
          </p>
        </div>
      </div>
      

    </section>
  );
}
