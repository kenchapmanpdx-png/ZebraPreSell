import { Link } from 'wouter';
import fatherDaughterImg from '../assets/father-daughter.jpg';
import ZebraHeart from './ZebraHeart';

export default function OurStory() {
  return (
    <section id="story" className="py-6 md:py-10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-1">
        <div className="max-w-6xl mx-auto rounded-xl p-8 md:p-12 shadow-lg border border-terra/10" style={{
          background: 'linear-gradient(0deg, rgba(200, 89, 43, 1) 0%, rgba(184, 112, 81, 1) 49%, rgba(200, 89, 43, 1) 100%)'
        }} data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-lora text-center mb-6 text-white" data-aos="fade-up">
            Behind every bottle of ZebraWell™ is a deeper purpose — and her name is <span className="text-white" style={{ fontSize: '1.2em' }}>Ava</span>.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 items-center" data-aos="fade">
            <div className="md:col-span-2 space-y-4 text-white">
              <p className="text-base md:text-lg leading-relaxed">
                Ava is our daughter — brave, brilliant, and resilient in ways most will never have to be.
                She lives with Scoliosis, Ehlers-Danlos Syndrome (hEDS), and POTS — complex, mostly invisible conditions that affect everything from how her body utilizes nutrients to how she lives with chronic pain, dislocating joints, and extreme fatigue.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                ZebraWell™ was born from our relentless pursuit to help her feel better — not just temporarily, but sustainably and safely.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                This isn't just a business. It's personal. Every ingredient was chosen with Ava 
                in mind — and with the hope of helping others like her feel stronger, steadier, and cared for.
              </p>

              <p className="font-bold text-white text-center font-serif text-2xl md:text-3xl mt-4">
                She is our Why!
              </p>

              <p className="text-center font-medium text-base italic text-white mt-4">
                If you or someone you love is a Zebra, welcome to the herd. <span className="inline-block align-middle ml-1"><ZebraHeart size={24} /></span>
              </p>
            </div>

            <div className="flex justify-center">
              <div className="border border-terra/30 p-1 rounded-md shadow-sm">
                <img src={fatherDaughterImg} alt="Father and daughter" className="rounded-md max-w-full h-auto" style={{ maxHeight: '280px' }} />
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link to="#products">
              <button className="bg-[#89B317] text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#89B317]/90">
                Discover Our Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}