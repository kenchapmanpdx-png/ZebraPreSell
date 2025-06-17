
import React from 'react';
import { Package } from 'lucide-react';

export default function WhatYouGet() {
  return (
    <section className="py-16 px-8" style={{
      background: 'hsla(33, 34%, 86%, 1)',
      backgroundImage: 'linear-gradient(90deg, hsla(33, 34%, 86%, 1) 0%, hsla(34, 37%, 96%, 1) 52%, hsla(33, 34%, 86%, 1) 100%)'
    }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-bold text-forest mb-6 fade-in">📦 What's Inside</h2>
        <p className="text-xl text-forest/80 leading-relaxed fade-in">
          Each bottle contains 120 capsules (30-day supply). Take 4 capsules in the morning and 4 at night. 
          That's it—no more 12-bottle stacks.
        </p>
      </div>
    </section>
  );
}
