export default function WhyZebraWell() {
  const features = [
    {
      icon: "user-plus",
      title: "Made For Zebras, By Someone Who Understands",
      description: "Built specifically for those living with Ehlers-Danlos Syndrome (hEDS), POTS, and MCAS. No more piecing together random supplements."
    },
    {
      icon: "ban",
      title: "No Junk. Ever.",
      description: "Free from magnesium stearate, gluten, dairy, soy, corn, titanium dioxide, and talc. Less reactivity, more peace of mind."
    },
    {
      icon: "leaf",
      title: "Only What Helps, Nothing That Hurts",
      description: "Minimalist and purposeful formulation with clean, justified excipients. Everything is bioavailable and supports your body."
    },
    {
      icon: "microscope",
      title: "Transparency in Every Batch",
      description: "Third-party testing. Certificates of Analysis. cGMP-compliant facilities. We don't just say it's clean—we prove it."
    },
    {
      icon: "dna",
      title: "Targeted Support—Not Just Multivitamins",
      description: "Our Core Formula supports mitochondrial and connective tissue function, while Boosters address joint stability, autonomic regulation, and mast cell calming."
    },
    {
      icon: "brain",
      title: "Smart Science, Not Marketing Hype",
      description: "Designed around clinical insight and real-world experience. Forms your body can absorb at doses that make a difference."
    },
    {
      icon: "feather",
      title: "Gentle by Design",
      description: "Gut-safe, low-histamine formulations with zero artificial colors or preservatives. Perfect for sensitive systems."
    },
    {
      icon: "puzzle-piece",
      title: "A System That Works Together",
      description: "Whether you need one booster or the full stack, ZebraWell™ was built to work synergistically for confident health management."
    }
  ];

  return (
    <section id="why" className="py-16 md:py-24 leaf-pattern">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-lora text-forest text-center mb-12 fade-in">Why Choose ZebraWell</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-earth-cream p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow fade-in">
              <div className="w-16 h-16 mx-auto mb-4 bg-sage-light rounded-full flex items-center justify-center">
                <i className={`fas fa-${feature.icon} text-2xl text-sage-dark`}></i>
              </div>
              <h3 className="text-xl font-lora text-forest text-center mb-3">{feature.title}</h3>
              <p className="text-center text-neutral-dark/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
