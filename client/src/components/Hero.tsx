export default function Hero() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden zebra-bg">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight fade-in">
            Targeted Supplement Support for EDS, POTS, and MCAS
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral-dark/80 fade-in">
            Formulated for sensitive systems. Backed by science. Trusted by caregivers.
          </p>
          <a 
            href="#avacore" 
            className="inline-block bg-teal hover:bg-teal-dark text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 fade-in"
          >
            Explore AvaCore
          </a>
          <p className="mt-4 text-sm italic text-neutral-dark/60 fade-in">
            Wellness for the Rare and Resilient
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-white/60 z-0"></div>
    </section>
  );
}
