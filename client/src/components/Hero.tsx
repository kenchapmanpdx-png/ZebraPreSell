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
          <div className="relative">
            {/* Background rectangle */}
            <div className="absolute inset-0 rounded-2xl mx-auto" style={{ backgroundColor: '#E1DCD2', opacity: 0.5 }}></div>
            {/* Content */}
            <div className="relative z-10 px-8 py-10">
              <h1 className="font-lora font-bold mb-6 leading-tight fade-in">
                <span className="text-[2.5rem] md:text-[3.5rem] text-forest font-bold block pb-2 mb-2 font-lora">Supplements Built for the Rare and Resilient</span>
              </h1>
              <p className="text-lg md:text-xl text-terra font-semibold mb-4 fade-in">
                Clinically-backed. Hypersensitive-friendly. Trusted by patients with EDS, POTS & Dysautonomia.
              </p>
              <p className="text-md md:text-lg text-forest/80 mb-6 fade-in max-w-3xl mx-auto">
                Ditch the junk science and generic multis. ZebraWell delivers therapeutic doses of bioavailable nutrients—formulated by a father for his daughter, and validated by the lived experience of this community.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8 fade-in">
                <button className="inw-gradient hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-opacity">
                  Explore AM Formula
                </button>
                <button className="border-2 inw-gradient text-white hover:opacity-90 px-6 py-3 rounded-lg font-medium transition-opacity">
                  Explore PM Formula
                </button>
                <button className="text-forest hover:text-terra px-6 py-3 rounded-lg font-medium transition-colors">
                  Compare AM vs PM
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-4 pt-6 text-sm text-forest mb-6 fade-in">
                <span className="flex items-center">✅ cGMP Manufactured</span>
                <span className="flex items-center">✅ FDA-Registered Facility</span>
                <span className="flex items-center">✅ Third-Party Tested</span>
                <span className="flex items-center">✅ MCAS-Safe | No Dyes | No Fillers</span>
                <span className="flex items-center">✅ Designed for POTS & EDS Bodies</span>
              </div>

              {/* Certification Badges */}
              <div className="flex justify-center items-center gap-6 mt-6 mb-4 fade-in">
                <div className="flex items-center gap-2">
                  <img 
                    src="/attached_assets/GMP-Certification_1749808301441.png" 
                    alt="GMP Certified" 
                    className="w-12 h-12 object-contain"
                  />
                  <span className="text-xs text-forest font-medium">GMP Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <img 
                    src="/attached_assets/images_1749808301442.png" 
                    alt="FDA Registered Facility" 
                    className="w-12 h-12 object-contain"
                  />
                  <span className="text-xs text-forest font-medium">FDA Registered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full py-8 mt-8 mb-5 z-10 inw-gradient overflow-hidden">
        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h3 className="text-[2.0125rem] md:text-[2.415rem] mb-4 text-terra font-medium text-center">Why "Zebra"?</h3>
          
          <p className="text-[1.368rem] md:text-[1.44rem] italic text-center text-white">
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