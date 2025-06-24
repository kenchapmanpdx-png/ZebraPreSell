import React from 'react';

export default function DifferenceSection() {
  const features = [

    {
      icon: "💊",
      title: "2 Bottles Replace 15",
      description: "AM & PM system delivers complete, targeted support."
    },


    {
      icon: "🧠",
      title: "Smart Science",
      description: "Only therapeutic doses of highly bioavailable ingredients."
    },
    {
      icon: "🚫",
      title: "No Junk. Ever.",
      description: "No fillers. No pixie dust. No nonsense."
    },
    {
      icon: "👥",
      title: "Formulated For Zebras",
      description: "Built specifically for EDS, POTS, and MCAS—no more piecing together random supplements."
    },
    {
      icon: "🍃",
      title: "Gentle by Design",
      description: "Gut-safe, low-histamine formulations perfect for sensitive systems."
    },
    {
      icon: "🔍",
      title: "Total Transparency",
      description: "Third-party testing and Certificates of Analysis prove our commitment to quality."
    },
    {
      icon: "🎯",
      title: "Targeted Support",
      description: "Core Formula plus specialized Boosters for personalized health management."
    },
    {
      icon: "🌱",
      title: "Only What Helps",
      description: "Minimalist formulation with bioavailable ingredients that support your body."
    },
    {
      icon: "🧩",
      title: "Works as a System",
      description: "AM and PM formulas work together for complete 24-hour support."
    },



  ];

  return (
    <section id="difference" className="py-4 md:py-12 px-6" style={{
      background: 'linear-gradient(180deg, #F3ECE1 0%, #FBFAF7 100%)'
    }}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mb-2 md:mb-4" data-aos="fade-up">What Makes ZebraWell Different</h2>
        <p className="text-xl text-gray-600 mb-6 md:mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          We've reimagined supplement design for the unique needs of rare condition warriors.
        </p>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md border-2 border-forest p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <div className="text-2xl mb-2">{feature.icon}</div>
              <h3 className="text-sm font-serif font-bold mb-1 text-primary">{feature.title}</h3>
              <p className="text-gray-700 text-xs leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}