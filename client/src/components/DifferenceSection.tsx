
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ZebraPatternAlt from './ZebraPatternAlt';

const differences = [
  {
    icon: "🦓",
    title: "Formulated for EDS, POTS & MCAS",
    description: "Specifically designed for connective tissue disorders and dysautonomia"
  },
  {
    icon: "🔄",
    title: "2 Bottles Replace 15",
    description: "Comprehensive AM/PM formulas eliminate supplement clutter"
  },
  {
    icon: "🛡️",
    title: "MCAS-Friendly",
    description: "Hypoallergenic formulation safe for mast cell activation"
  },
  {
    icon: "⚡",
    title: "Therapeutic Doses",
    description: "Clinical-strength ingredients at proven effective levels"
  },
  {
    icon: "🚫",
    title: "No Fillers or Stearates",
    description: "Pure ingredients without unnecessary additives"
  },
  {
    icon: "🔬",
    title: "Third-Party Tested",
    description: "Independent verification for purity and potency"
  },
  {
    icon: "🧠",
    title: "Smart Science",
    description: "Evidence-based formulation backed by clinical research"
  },
  {
    icon: "💚",
    title: "Designed for Sensitive Systems",
    description: "Gentle on the stomach, effective for complex conditions"
  }
];

export default function DifferenceSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <ZebraPatternAlt />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Makes ZebraWell Different
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Designed specifically for the unique needs of rare disease communities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {differences.map((difference, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-3">{difference.icon}</div>
                <h3 className="font-semibold text-sm md:text-base text-gray-800 mb-2">
                  {difference.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {difference.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
