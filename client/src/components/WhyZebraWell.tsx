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
      description: "Free from common allergens and fillers for less reactivity and more peace of mind.",
      color: "forest"
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
    <section id="why" className="py-12 md:py-16 leaf-pattern">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-lora text-forest text-center mb-8 fade-in">Why Choose ZebraWell</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            let bgColorClass = "";
            let iconColorClass = "";
            let textColorClass = "";
            
            // Special case for "No Junk. Ever." feature
            if (feature.title === "No Junk. Ever.") {
              // Forest green theme for background and text
              bgColorClass = "bg-forest/10";
              iconColorClass = "text-forest";
              textColorClass = "text-forest";
            } else {
              // Default theme for all other features
              bgColorClass = "bg-earth-cream";
              iconColorClass = "text-sage-dark";
              textColorClass = "text-forest";
            }
            
            return (
              <div key={index} className={`${bgColorClass} p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 fade-in hover:bg-white border border-current/10`}>
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 mr-2 bg-sage-light rounded-full flex items-center justify-center">
                    <i className={`fas fa-${feature.icon} text-lg ${iconColorClass}`}></i>
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
