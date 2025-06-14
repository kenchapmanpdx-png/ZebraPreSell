import ZebraPatternOverlay from './ZebraPatternOverlay';

export default function WhyZebraWell() {
  const features = [
    {
      icon: "user-plus",
      title: "Formulated For Zebras",
      description: "Built specifically for EDS, POTS, and MCAS—no more piecing together random supplements."
    },
    {
      icon: "ban",
      title: "No Junk. Ever.",
      description: "Free from common allergens and fillers for less reactivity and more peace of mind."
    },
    {
      icon: "feather",
      title: "Gentle by Design",
      description: "Gut-safe, low-histamine formulations perfect for sensitive systems."
    },
    {
      icon: "microscope",
      title: "Total Transparency",
      description: "Third-party testing and Certificates of Analysis prove our commitment to quality."
    },
    {
      icon: "dna",
      title: "Targeted Support",
      description: "Core Formula plus specialized Boosters for personalized health management."
    },
    {
      icon: "brain",
      title: "Smart Science",
      description: "Clinical insight with forms your body can absorb at therapeutic doses."
    },
    {
      icon: "leaf",
      title: "Only What Helps",
      description: "Minimalist formulation with bioavailable ingredients that support your body."
    },
    {
      icon: "puzzle-piece",
      title: "Works as a System",
      description: "Designed to work synergistically whether you need one booster or all."
    }
  ];

  return (
    <section id="why" className="py-6 md:py-8 relative overflow-hidden" style={{
      background: '#0F2E24',
      backgroundImage: 'linear-gradient(90deg, rgba(15, 46, 36, 1) 6%, rgba(117, 133, 70, 1) 50%, rgba(15, 46, 36, 1) 94%)'
    }}>
      {/* Zebra pattern overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-repeat"
        style={{
          backgroundImage: 'url(/zebra-pattern.jpg)',
          opacity: 0.0175,
          backgroundSize: '800px 400px'
        }}
      ></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-lora text-white text-center mb-8" data-aos="fade-up">Why Choose ZebraWell</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            let bgColorClass = "";
            let iconColorClass = "";
            let textColorClass = "";

            // Special case for "No Junk. Ever." feature
            if (feature.title === "No Junk. Ever.") {
              // Forest green theme for background and text
              bgColorClass = "bg-forest/80";
              iconColorClass = "text-white";
              textColorClass = "text-white";
            } else {
              // Default theme for all other features
              bgColorClass = "bg-white/90";
              iconColorClass = "text-sage-dark";
              textColorClass = "text-forest";
            }

            return (
              <div key={index} className={`${bgColorClass} p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${feature.title === "No Junk. Ever." ? "hover:bg-forest/70" : "hover:bg-white"} border border-current/10`} data-aos="fade-up" data-aos-delay={`${index * 150}`}>
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 mr-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: (index % 5 === 0) ? '#1a5023' : 
                    (index % 5 === 1) ? '#396132' : 
                    (index % 5 === 2) ? '#435435' : 
                    (index % 5 === 3) ? 'rgba(102, 107, 94, 0.5)' : 
                    'rgba(91, 98, 80, 0.3)' }}>
                    <i className={`fas fa-${feature.icon} text-xl ${index % 5 === 1 ? 'text-forest' : 'text-white'}`}></i>
                  </div>
                  <div>
                    <h3 className={`text-xl font-lora font-bold mb-2 ${textColorClass}`}>{feature.title}</h3>
                    <p className={`text-base leading-relaxed ${feature.title === "No Junk. Ever." ? "text-white/90" : "text-neutral-dark/80"}`}>{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}