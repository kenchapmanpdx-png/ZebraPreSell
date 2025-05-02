import ZebraBackground from './ZebraBackground';

export default function Hero() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-4 md:pb-8 relative overflow-hidden">
      <ZebraBackground />
      <div className="container mx-auto px-6 relative z-1">
        <div className="max-w-3xl mx-auto text-center">
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
          <blockquote className="mb-6 italic text-base border-l-4 border-terra pl-4 max-w-2xl mx-auto text-neutral-dark/80 fade-in font-bold">
            "Medical students are taught, 'When you hear hoofbeats, think horses'—to expect common conditions, not rare ones. But sometimes, the patient is a zebra. The zebra represents those with complex, often misunderstood conditions like EDS, POTS, and MCAS. At ZebraWell, we honor the zebra—because rare shouldn't mean invisible. You deserve care made for you."
          </blockquote>
          <p className="text-lg md:text-xl mb-4 text-neutral-dark/80 fade-in max-w-xl mx-auto font-lora">
            Pure, organic formulations designed specifically for sensitive systems.
          </p>


        </div>
      </div>

    </section>
  );
}
