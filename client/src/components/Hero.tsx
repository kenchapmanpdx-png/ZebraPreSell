import ZebraBackground from './ZebraBackground';

export default function Hero() {
  // Animation removed as requested
  return (
    <section id="home" className="pt-32 md:pt-44 pb-0 md:pb-0 relative overflow-hidden">
      <ZebraBackground />
      <div className="relative z-1">
        {/* Header Content */}
        <div className="max-w-3xl mx-auto text-center px-6">
          <h1 className="text-3xl md:text-5xl font-lora font-bold mb-6 leading-tight fade-in text-forest">
            Wellness for the Rare and Resilient<br/>
            <span className="text-[1.08rem] md:text-[2.16rem] text-terra font-medium block pt-2 pb-2 mt-1 mb-1">Supplemental Support for EDS, POTS, and MCAS</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-3 mb-6 fade-in">
            <div className="flex items-center px-3 py-1 bg-forest/30 text-forest rounded-full border border-forest/30">
              <i className="fas fa-leaf mr-2"></i>
              <span className="text-sm font-medium">All-Natural</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-sage-dark/30 text-sage-dark rounded-full border border-sage-dark/30">
              <i className="fas fa-seedling mr-2"></i>
              <span className="text-sm font-medium">Bioavailable</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-sage-light/50 text-sage-dark rounded-full border border-sage-light/50">
              <i className="fas fa-puzzle-piece mr-2"></i>
              <span className="text-sm font-medium">Works as a System</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-forest/30 text-forest rounded-full border border-forest/30">
              <i className="fas fa-apple-alt mr-2"></i>
              <span className="text-sm font-medium">Allergen-Free</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-6 fade-in">
            <div className="flex items-center px-3 py-1 bg-sage-dark/30 text-sage-dark rounded-full border border-sage-dark/30">
              <i className="fas fa-microscope mr-2"></i>
              <span className="text-sm font-medium">Total Transparency</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-sage-light/50 text-sage-dark rounded-full border border-sage-light/50">
              <i className="fas fa-user-plus mr-2"></i>
              <span className="text-sm font-medium">Formulated For Zebras</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-forest/30 text-forest rounded-full border border-forest/30">
              <i className="fas fa-dna mr-2"></i>
              <span className="text-sm font-medium">Targeted Support</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-sage-dark/30 text-sage-dark rounded-full border border-sage-dark/30">
              <i className="fas fa-feather mr-2"></i>
              <span className="text-sm font-medium">Gentle by Design</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-sage-light/50 text-sage-dark rounded-full border border-sage-light/50">
              <i className="fas fa-ban mr-2"></i>
              <span className="text-sm font-medium">No Junk. Ever.</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-forest/30 text-forest rounded-full border border-forest/30">
              <i className="fas fa-brain mr-2"></i>
              <span className="text-sm font-medium">Smart Science</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-sage-dark/30 text-sage-dark rounded-full border border-sage-dark/30">
              <i className="fas fa-leaf mr-2"></i>
              <span className="text-sm font-medium">Only What Helps</span>
            </div>
          </div>
          
          <p className="text-lg md:text-xl mb-10 text-neutral-dark fade-in font-lora text-center pt-4">
            Pure, organic formulations designed specifically for sensitive systems.
          </p>
        </div>
      </div>

      <div style={{ position: 'relative', width: '100%', padding: '2rem 0', marginTop: '2rem', marginBottom: '1.25rem', zIndex: 5 }}>
        {/* Solid Background */}
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgb(252, 249, 242)', zIndex: -1, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}></div>
        
        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '48rem', margin: '0 auto', padding: '0 1.5rem', backgroundColor: 'rgb(252, 249, 242)' }}>
          <h3 className="text-xl md:text-2xl mb-4 text-terra font-medium text-center">Terra</h3>
          
          <p className="text-lg md:text-xl italic text-center text-forest">
            The Zebra is the mascot for rare conditions and diseases.<br/>
            The medical system teaches, "When you hear hoofbeats, think horses."<br/>
            But sometimes, it's a Zebra — someone with a rare, often misunderstood and undiagnosed condition.<br/>
            We honor the Zebra. Because rare shouldn't mean invisible.
          </p>
        </div>
      </div>
      

    </section>
  );
}
