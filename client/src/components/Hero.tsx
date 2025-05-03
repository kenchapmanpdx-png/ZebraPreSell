import ZebraBackground from './ZebraBackground';

export default function Hero() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-4 md:pb-8 relative overflow-hidden">
      <ZebraBackground />
      <div className="relative z-1">
        {/* Header Content */}
        <div className="max-w-3xl mx-auto text-center px-6">
          <h1 className="text-3xl md:text-5xl font-lora font-bold mb-6 leading-tight fade-in text-forest">
            Wellness for the Rare and Resilient<br/>
            <span className="text-2xl md:text-4xl text-terra-dark font-medium block pt-2 pb-2 mt-1 mb-1">Support for EDS, POTS, and MCAS</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-3 mb-6 fade-in">
            <div className="flex items-center px-3 py-1 bg-sage-light rounded-full">
              <i className="fas fa-leaf text-sage-dark mr-2"></i>
              <span className="text-sm font-medium">All-Natural</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-terra-light rounded-full">
              <i className="fas fa-seedling text-terra-dark mr-2"></i>
              <span className="text-sm font-medium">Bioavailable</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-sage-light rounded-full">
              <i className="fas fa-apple-alt text-sage-dark mr-2"></i>
              <span className="text-sm font-medium">Allergen-Free</span>
            </div>
          </div>
          <p className="text-lg md:text-xl mb-5 text-neutral-dark/90 fade-in max-w-xl mx-auto font-lora">
            Pure, organic formulations designed specifically for sensitive systems.
          </p>
        </div>
        

      </div>
    </section>
  );
}
