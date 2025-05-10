import ZebraBackground from './ZebraBackground';
import ZebraPatternOverlay from './ZebraPatternOverlay';

export default function Hero() {
  // Animation removed as requested
  return (
    <section id="home" className="pt-32 md:pt-44 pb-0 md:pb-0 relative overflow-hidden">
      <ZebraBackground />
      <div className="relative z-1">
        {/* Header Content */}
        <div className="max-w-3xl mx-auto text-center px-6">
          <h1 className="text-3xl md:text-5xl font-lora font-bold mb-6 leading-tight fade-in" style={{ color: '#357c3b' }}>
            Wellness for the Rare and Resilient<br/>
            <span className="text-[1.044rem] md:text-[2.079rem] text-terra font-medium block pt-2 pb-2 mt-1 mb-1 font-lora">Supplemental Support for EDS, POTS, and MCAS</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-3 mb-6 fade-in">
            <div className="flex items-center px-3 py-1 rounded-full border" style={{ backgroundColor: '#357c3b', color: 'white', borderColor: '#357c3b' }}>
              <i className="fas fa-leaf mr-2"></i>
              <span className="text-sm font-medium">All-Natural</span>
            </div>
            <div className="flex items-center px-3 py-1 rounded-full border" style={{ backgroundColor: '#87a96b', color: 'white', borderColor: '#87a96b' }}>
              <i className="fas fa-seedling mr-2"></i>
              <span className="text-sm font-medium">Bioavailable</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-sage-dark/30 text-sage-dark rounded-full border border-sage-dark/30">
              <i className="fas fa-puzzle-piece mr-2"></i>
              <span className="text-sm font-medium">Works as a System</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-sage-light/50 text-sage-dark rounded-full border border-sage-light/50">
              <i className="fas fa-apple-alt mr-2"></i>
              <span className="text-sm font-medium">Allergen-Free</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-6 fade-in">
            <div className="flex items-center px-3 py-1 rounded-full border" style={{ backgroundColor: '#357c3b', color: 'white', borderColor: '#357c3b' }}>
              <i className="fas fa-microscope mr-2"></i>
              <span className="text-sm font-medium">Total Transparency</span>
            </div>
            <div className="flex items-center px-3 py-1 rounded-full border" style={{ backgroundColor: '#87a96b', color: 'white', borderColor: '#87a96b' }}>
              <i className="fas fa-user-plus mr-2"></i>
              <span className="text-sm font-medium">Formulated For Zebras</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-sage-dark/30 text-sage-dark rounded-full border border-sage-dark/30">
              <i className="fas fa-dna mr-2"></i>
              <span className="text-sm font-medium">Targeted Support</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-sage-light/50 text-sage-dark rounded-full border border-sage-light/50">
              <i className="fas fa-feather mr-2"></i>
              <span className="text-sm font-medium">Gentle by Design</span>
            </div>
            <div className="flex items-center px-3 py-1 rounded-full border" style={{ backgroundColor: '#357c3b', color: 'white', borderColor: '#357c3b' }}>
              <i className="fas fa-ban mr-2"></i>
              <span className="text-sm font-medium">No Junk. Ever.</span>
            </div>
            <div className="flex items-center px-3 py-1 rounded-full border" style={{ backgroundColor: '#87a96b', color: 'white', borderColor: '#87a96b' }}>
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

      <div className="relative w-full py-8 mt-8 mb-5 z-10 inw-gradient overflow-hidden">
        {/* Tagline in semi-transparent band */}
        <div className="inw-gradient-tagline py-3 mb-4 relative z-10">
          <div className="container mx-auto px-6">
            <p className="text-white text-center font-lora text-lg italic">Wellness for the Rare and Resilient</p>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h3 className="text-[1.4375rem] md:text-[1.725rem] mb-4 text-white font-medium text-center">Why "Zebra"?</h3>
          
          <p className="text-lg md:text-xl italic text-center text-white">
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
