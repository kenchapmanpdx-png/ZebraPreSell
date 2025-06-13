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
    <section id="why" className="py-12 md:py-16 inw-gradient relative overflow-hidden">
      
      {/* Tagline section with semi-transparent background */}
      <div className="inw-gradient-tagline py-3 mb-8 relative z-10">
        <div className="container mx-auto px-6">
          <p className="text-white text-center font-lora text-lg italic">Wellness for the Rare and Resilient</p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-lora text-white text-center mb-8 fade-in">Why Choose ZebraWell</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
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
              <div key={index} className={`${bgColorClass} p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 fade-in ${feature.title === "No Junk. Ever." ? "hover:bg-forest/70" : "hover:bg-white"} border border-current/10`}>
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 mr-2 rounded-full flex items-center justify-center" style={{ backgroundColor: (index % 5 === 0) ? '#1a5023' : 
                    (index % 5 === 1) ? '#396132' : 
                    (index % 5 === 2) ? '#435435' : 
                    (index % 5 === 3) ? 'rgba(102, 107, 94, 0.5)' : 
                    'rgba(91, 98, 80, 0.3)' }}>
                    <i className={`fas fa-${feature.icon} text-lg ${index % 5 === 1 ? 'text-forest' : 'text-white'}`}></i>
                  </div>
                  <h3 className={`text-lg font-lora ${textColorClass}`}>{feature.title}</h3>
                </div>
                <p className="text-sm text-neutral-dark/80">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
