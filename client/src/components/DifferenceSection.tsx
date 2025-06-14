import React from 'react';
import { Target, Layers, Leaf } from 'lucide-react';

export default function DifferenceSection() {
  return (
    <section className="bg-surface py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold text-primary mb-4" data-aos="fade-up">What Makes ZebraWell Different</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          We've reimagined supplement design for the unique needs of rare condition warriors.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-delay="300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-4 text-primary">Targeted for EDS & POTS</h3>
            <p className="text-gray-700 leading-relaxed">Built specifically to support collagen, mast cells, blood volume, and autonomic balance.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 premium-hover fade-in">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Layers className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-4 text-primary">2 Bottles Replace 15</h3>
            <p className="text-gray-700 leading-relaxed">AM + PM system simplifies routines. No guesswork, no 20-bottle supplement graveyard.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-delay="600">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-4 text-primary">Clean & MCAS-Friendly</h3>
            <p className="text-gray-700 leading-relaxed">No titanium dioxide, stearates, soy, corn, dyes, or mystery additives.</p>
          </div>
        </div>
      </div>
    </section>
  );
}