
import React from 'react';
import { Package } from 'lucide-react';

export default function WhatYouGet() {
  return (
    <section className="bg-white py-24 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-bold text-forest mb-8 fade-in">📦 What's Inside</h2>
        <p className="text-xl text-forest/80 leading-relaxed fade-in">
          Each bottle contains 120 capsules (30-day supply). Take 4 capsules in the morning and 4 at night. 
          That's it—no more 12-bottle stacks.
        </p>
      </div>
    </section>
  );
}
