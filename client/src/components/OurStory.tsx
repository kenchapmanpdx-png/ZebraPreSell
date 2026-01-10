import { Link } from 'wouter';
import fatherDaughterImg from '../assets/father-daughter.jpg';
import ZebraHeart from './ZebraHeart';

export default function OurStory() {
  return (
    <section id="story" className="py-16 md:py-24 relative overflow-hidden bg-[#FDFBF7]">
      {/* Background Texture (Optional: subtle warmth) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#E8EDE6]/50 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-1">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">

          {/* IMAGE SIDE: Treated like a framed photo */}
          <div className="w-full md:w-5/12 order-2 md:order-1" data-aos="fade-right">
            <div className="relative">
              {/* Decorative offset border behind image */}
              <div className="absolute top-4 -left-4 w-full h-full border-2 border-[#C8592B]/20 rounded-lg"></div>

              <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-stone-200">
                <img 
                  src={fatherDaughterImg} 
                  alt="Ken and Ava" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>

              {/* Caption/Label */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-lg rounded-lg border border-stone-100 max-w-[200px] hidden md:block">
                <p className="font-serif text-[#0f2e24] italic text-sm">
                  "She is brave, brilliant, and resilient."
                </p>
              </div>
            </div>
          </div>

          {/* CONTENT SIDE: Editorial Style */}
          <div className="w-full md:w-7/12 order-1 md:order-2 text-center md:text-left" data-aos="fade-left">
            <div className="inline-block mb-4 px-3 py-1 bg-[#C8592B]/10 text-[#C8592B] text-xs font-bold tracking-widest uppercase rounded-full">
              Our Purpose
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0f2e24] mb-8 leading-tight">
              Behind every bottle is a deeper purpose and her name is<span className="text-[#C8592B] italic relative px-2">
                Ava
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#C8592B]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>.
            </h2>

            <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                Ava is my daughter. She lives with Scoliosis, hEDS, POTS, and MCAS. 
                These are complex, mostly invisible conditions that affect everything from how her body utilizes nutrients to how she lives with chronic pain, Subluxating Joints, and extreme fatigue.
              </p>

              <p>
                ZebraWell wasn't born in a boardroom. It was born from my relentless pursuit to help her feel better—not just temporarily, but <strong className="text-[#0f2e24] font-medium">sustainably and safely</strong>.
              </p>

              <p className="italic text-[#0f2e24] font-serif text-xl border-l-4 border-[#C8592B] pl-4 my-6">
                "Every ingredient was chosen with Ava in mind, and with the hope of helping others like her feel stronger. If its not good enough for Ava its not good enough for you"
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
              <Link to="/preorder"> {/* Updated to link to preorder page or anchored section */}
                <button className="bg-[#0f2e24] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#1a4a3a] transition-all hover:-translate-y-1">
                  Read Our Full Story
                </button>
              </Link>

              <div className="flex items-center text-[#5A6C5C] text-sm font-medium">
                <span className="mr-2 p-2 bg-[#E8EDE6] rounded-full text-[#0f2e24]"><ZebraHeart size={18} /></span>
                <span>Welcome to the herd.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}