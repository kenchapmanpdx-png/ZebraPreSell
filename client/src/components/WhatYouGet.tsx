
import React from 'react';
import { Package } from 'lucide-react';

export default function WhatYouGet() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Package className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-4xl font-serif font-bold text-primary mb-6">What's Inside</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Each bottle contains 120 capsules (30-day supply). Take 4 capsules in the morning and 4 at night. 
          That's it—no more 12-bottle stacks.
        </p>
      </div>
    </section>
  );
}
