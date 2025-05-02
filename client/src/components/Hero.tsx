export default function Hero() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden medical-pattern">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight fade-in text-medical-blue">
            Clinically-Formulated Supplementation<br/>
            <span className="text-2xl md:text-4xl text-neutral-dark">for EDS, POTS, and MCAS</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-3 mb-6 fade-in">
            <div className="flex items-center px-3 py-1 bg-medical-blue/10 rounded-full">
              <i className="fas fa-microscope text-medical-blue mr-2"></i>
              <span className="text-sm font-semibold">Evidence-Based</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-medical-blue/10 rounded-full">
              <i className="fas fa-flask text-medical-blue mr-2"></i>
              <span className="text-sm font-semibold">Medical-Grade</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-medical-blue/10 rounded-full">
              <i className="fas fa-user-md text-medical-blue mr-2"></i>
              <span className="text-sm font-semibold">Physician-Developed</span>
            </div>
          </div>
          <p className="text-lg md:text-xl mb-8 text-neutral-dark/80 fade-in max-w-xl mx-auto">
            Advanced bioavailable formulations designed specifically for sensitive systems.
          </p>
          <a 
            href="#avacore" 
            className="inline-block bg-medical-blue hover:bg-medical-blue/90 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 fade-in flex items-center mx-auto"
          >
            <i className="fas fa-microscope mr-2"></i>View Clinical Formula
          </a>
          <div className="mt-8 py-3 px-5 inline-block zebra-stripes zebra-border rounded-lg border-2 border-medical-blue/20 fade-in">
            <p className="text-lg md:text-xl font-medium text-medical-blue text-center">
              Wellness for the Rare and Resilient
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-white/60 z-0"></div>
    </section>
  );
}
