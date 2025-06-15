
import React from 'react';

export default function DifferenceSection() {
  const features = [
    {
      icon: "🧬",
      title: "Formulated for EDS, POTS & MCAS",
      description: "Built specifically for rare, sensitive bodies."
    },
    {
      icon: "💊",
      title: "2 Bottles Replace 15",
      description: "AM & PM system delivers complete, targeted support."
    },
    {
      icon: "🌿",
      title: "Clean & MCAS-Friendly",
      description: "Free from dyes, stearates, soy, and titanium dioxide."
    },
    {
      icon: "🔬",
      title: "Third-Party Tested",
      description: "Every batch tested for purity and potency."
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
    }
  ];

  return (
    <section className="bg-surface py-20 px-6" id="what-makes-different">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4" data-aos="fade-up">What Makes ZebraWell Different</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          We've reimagined supplement design for the unique needs of rare condition warriors.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-serif font-bold mb-2 text-primary">{feature.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
