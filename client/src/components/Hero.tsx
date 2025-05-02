import ZebraBackground from './ZebraBackground';

export default function Hero() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      <ZebraBackground />
      <div className="container mx-auto px-6 relative z-1">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-lora font-bold mb-6 leading-tight fade-in text-forest">
            Wellness for the Rare and Resilient<br/>
            <span className="text-2xl md:text-4xl text-terra-dark font-medium">Support for EDS, POTS, and MCAS</span>
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
          <p className="text-lg md:text-xl mb-8 text-neutral-dark/80 fade-in max-w-xl mx-auto font-lora">
            Pure, organic formulations designed specifically for sensitive systems.
          </p>
          <a 
            href="#avacore" 
            className="inline-block bg-terra hover:bg-terra-dark text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 fade-in flex items-center mx-auto"
          >
            <i className="fas fa-leaf mr-2"></i>View Core Formula
          </a>

        </div>
      </div>

    </section>
  );
}
