import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ShieldAlert, ShieldCheck, HeartHandshake, Microscope, Ban, CheckCircle2, FileText, Lock } from 'lucide-react';

export default function OurPromise() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navigation />

      {/* HEADER: Light & Clean */}
      <section className="pt-40 pb-12 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#E8DCCA]/40 border border-[#C8592B]/20 text-[#C8592B] text-xs font-bold uppercase tracking-widest">
            <HeartHandshake size={14} />
            Code of Ethics
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-[#0f2e24]">
            The Zebra <span className="text-[#C8592B] italic">Promise</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#5D4037] font-medium max-w-2xl mx-auto leading-relaxed">
            Our commitment to the hEDS, POTS, and MCAS community.
          </p>
          <div className="w-24 h-1 bg-[#C8592B]/20 mx-auto mt-8 rounded-full"></div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-serif font-bold text-[#2c1810] mb-6">
            We exist because the system failed you.
          </h2>
          <p className="text-lg text-[#5D4037] leading-relaxed mb-8">
            You've been dismissed by doctors, harmed by "safe" supplements, and marketed to by companies that don't understand your body. 
          </p>
          <div className="bg-white p-8 rounded-2xl border-l-4 border-[#C8592B] shadow-sm">
            <p className="text-lg font-medium text-[#2c1810] italic">
              "This company was built by a caregiver who watched someone they love struggle—and promised to do better."
            </p>
          </div>
        </div>
      </section>

      {/* MANIFESTO GRID */}
      <section className="py-16 px-4 bg-white border-t border-[#E8DCCA]/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-700 shadow-sm">
                  <Ban size={20} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#2c1810]">What We Will <span className="text-red-700 decoration-red-200 underline underline-offset-4">Never</span> Do</h3>
              </div>
              <PromiseItem title="Never hide ingredients." desc="Full transparency. Every ingredient, every source, every excipient disclosed. No 'proprietary blends.' No secrets." />
              <PromiseItem title="Never use known triggers." desc="No titanium dioxide. No mold-derived citric acid. No artificial dyes. No carrageenan. We prioritize function over aesthetics." />
              <PromiseItem title="Never underdose." desc="Every ingredient at clinically effective levels—or not included at all. No 'pixie dusting' to pad labels." />
              <PromiseItem title="Never ignore your medications." desc="We research interactions with beta-blockers, fludrocortisone, midodrine, and the other medications you actually take." />
              <PromiseItem title="Never exploit your desperation." desc="No miracle claims. No fear tactics. No hype. Just evidence and honesty." />
              <PromiseItem title="Never dismiss your reactions." desc="If you report a problem, we believe you first and investigate second. You've been gaslit enough." />
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-[#0f2e24] shadow-sm">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#2c1810]">What We Will <span className="text-[#0f2e24] decoration-[#0f2e24]/30 underline underline-offset-4">Always</span> Do</h3>
              </div>
              <PromiseItem title="Always lead with evidence." desc="Every formulation grounded in human clinical research. When we don't know something, we say so." positive />
              <PromiseItem title="Always test for what matters to you." desc="Histamine screening. Heavy metals. Biogenic amines. The contaminants that affect your population." positive />
              <PromiseItem title="Always use MCAS-safe excipients." desc="Minimal fillers. Hypoallergenic alternatives. We treat 'inactive' ingredients as active." positive />
              <PromiseItem title="Always support titration." desc="Openable capsules. Powder options. Micro-dosing guidance. Because 'low and slow' is how your body works." positive />
              <PromiseItem title="Always simplify." desc="Multi-ingredient formulations that reduce pill burden. One trusted solution, not twenty bottles." positive />
              <PromiseItem title="Always listen." desc="Your feedback shapes our work. Your lived experience matters. We earn trust through actions, not marketing." positive />
            </div>
          </div>
        </div>
      </section>

      {/* ACCOUNTABILITY */}
      <section className="py-20 px-4 bg-[#E8DCCA]/30 border-y border-[#C89F87]/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-center text-[#0f2e24] mb-12">Our Accountability</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AccountabilityCard icon={<FileText />} text="Full ingredient sourcing disclosed on every product" />
            <AccountabilityCard icon={<ShieldCheck />} text="Certificates of Analysis available upon request" />
            <AccountabilityCard icon={<Microscope />} text="cGMP manufacturing with third-party testing" />
            <AccountabilityCard icon={<Lock />} text="Decision logs documenting why we include or exclude ingredients" />
          </div>
          <div className="mt-8 text-center">
            <div className="inline-block bg-white px-6 py-4 rounded-xl border border-[#C8592B]/20 shadow-sm">
              <p className="font-medium text-[#C8592B]">
                We publicly acknowledge when we make mistakes—and share exactly what we've changed to fix them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM LINE: DARK GREEN GRADIENT (No Zebra Pattern) */}
      <section className="py-24 px-4 bg-gradient-to-r from-[#1a4a3a] to-[#0f2e24] text-center relative overflow-hidden">
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-8 text-[#FDFBF7]">The Bottom Line</h2>
          <p className="text-lg md:text-xl text-[#E8EDE6]/90 mb-12 leading-relaxed">
            We're not a wellness brand chasing trends. <br/>
            We're a safe harbor for people whose bodies don't follow the rules.
          </p>

          <div className="bg-[#FDFBF7] text-[#2c1810] p-8 md:p-12 rounded-2xl shadow-2xl relative border border-[#C8592B]/20">
            <div className="text-xs font-bold text-[#8D6E63] uppercase tracking-widest mb-4">The Zebra Filter</div>
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-[#C8592B]">
              "Does this serve the patient?"
            </h3>
            <div className="space-y-4 text-lg font-medium">
              <p className="flex items-center justify-center gap-2">
                <CheckCircle2 className="text-[#0f2e24]" size={20} /> If yes, we do it.
              </p>
              <p className="flex items-center justify-center gap-2">
                <Ban className="text-red-700" size={20} /> If no, we don't.
              </p>
              <p className="flex items-center justify-center gap-2">
                <ShieldAlert className="text-[#C8592B]" size={20} /> If we got it wrong, we fix it.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-[#E8DCCA]">
              <p className="font-serif italic text-2xl text-[#0f2e24]">That's our promise.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Helper Components
function PromiseItem({ title, desc, positive = false }: { title: string, desc: string, positive?: boolean }) {
  return (
    <div className="group">
      <h4 className={`text-xl font-bold mb-2 flex items-center gap-2 ${positive ? 'text-[#0f2e24]' : 'text-[#2c1810]'}`}>
        {title}
      </h4>
      <p className="text-[#5D4037] leading-relaxed pl-0">{desc}</p>
    </div>
  );
}

function AccountabilityCard({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-4 bg-white p-5 rounded-xl border border-[#E8DCCA] shadow-sm hover:shadow-md transition-all">
      <div className="text-[#0f2e24] shrink-0">{icon}</div>
      <p className="font-medium text-[#2c1810]">{text}</p>
    </div>
  );
}