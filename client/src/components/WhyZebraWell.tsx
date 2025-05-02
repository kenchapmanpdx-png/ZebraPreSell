export default function WhyZebraWell() {
  const features = [
    {
      icon: "seedling",
      title: "Bioavailable Nutrients",
      description: "Active forms your body can actually absorb and utilize, even with compromised systems."
    },
    {
      icon: "check-circle",
      title: "Allergen-Free & No Fillers",
      description: "Free from common allergens, artificial colors, and unnecessary fillers that can trigger sensitivities."
    },
    {
      icon: "flask",
      title: "Transparent Dosing",
      description: "Precise amounts of each ingredient clearly listed. No proprietary blends or hidden quantities."
    },
    {
      icon: "capsules",
      title: "Simplified Regimen",
      description: "Thoughtfully combined formulas reduce pill burden and complex supplementation schedules."
    },
    {
      icon: "user-md",
      title: "Practitioner Trusted",
      description: "Recommended by healthcare providers specializing in connective tissue disorders and related conditions."
    },
    {
      icon: "dollar-sign",
      title: "Cost-Efficient",
      description: "Comprehensive formulas reduce the need for multiple separate supplements, saving you money long-term."
    }
  ];

  return (
    <section id="why" className="py-16 md:py-24 bg-neutral-light zebra-stripes">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 fade-in">Why Choose ZebraWell</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow fade-in">
              <div className="w-16 h-16 mx-auto mb-4 bg-lavender/10 rounded-full flex items-center justify-center">
                <i className={`fas fa-${feature.icon} text-2xl text-lavender`}></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{feature.title}</h3>
              <p className="text-center text-neutral-dark/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
