import { Link } from 'wouter';
import fatherDaughterImg from '../assets/father-daughter.jpg';
import ZebraHeart from './ZebraHeart';

export default function OurStory() {
  return (
    <section id="story" className="py-4 md:py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-1">
        <div className="max-w-6xl mx-auto rounded-xl p-2 md:p-6 shadow-lg border border-terra/10" style={{
          background: 'linear-gradient(0deg, rgba(200, 89, 43, 1) 0%, rgba(184, 112, 81, 1) 49%, rgba(200, 89, 43, 1) 100%)'
        }} data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-lora text-center mb-6 md:mb-8 text-white pt-12 md:pt-24" data-aos="fade-up" style={{ fontSize: '1.72em' }}>
            Behind every bottle of ZebraWell is a deeper purpose — and her name is <span className="text-yellow-500" style={{ fontSize: '1.56em' }}>Ava</span>.
          </h2>

          <div className="text-center space-y-4 text-white px-2 md:px-4" data-aos="fade">
            <p className="text-lg md:text-xl leading-relaxed max-w-5xl mx-auto" style={{ fontSize: '1.38em' }}>
              Ava is my daughter — brave, brilliant, and resilient in ways most will never have to be.
              She lives with Scoliosis, Ehlers-Danlos Syndrome (hEDS), and POTS — complex, mostly invisible conditions that affect everything from how her body utilizes nutrients to how she lives with chronic pain, partially dislocating joints, and extreme fatigue.
            </p>

            <p className="text-lg md:text-xl leading-relaxed max-w-5xl mx-auto" style={{ fontSize: '1.38em' }}>
              ZebraWell was born from my relentless pursuit to help her feel better, not just temporarily, but sustainably and safely.
            </p>
            <p className="text-lg md:text-xl leading-relaxed max-w-5xl mx-auto" style={{ fontSize: '1.38em' }}>
              This isn't just a business. It's personal. Every ingredient was chosen with Ava 
              in mind, and with the hope of helping others like her feel stronger, steadier, and cared for.
            </p>

            <div className="flex justify-center my-6">
              <div className="border border-terra/30 p-1 rounded-md shadow-sm">
                <img src={fatherDaughterImg} alt="Father and daughter" className="rounded-md max-w-full h-auto" style={{ maxHeight: '257px' }} />
              </div>
            </div>

            <p className="font-bold text-white text-center font-serif text-3xl md:text-4xl mt-6" style={{ fontSize: '1.38em' }}>
              She is my Why!
            </p>

            <p className="text-center font-medium text-lg italic text-white mt-6" style={{ fontSize: '1.38em' }}>
              If you or someone you love is a Zebra, welcome to the herd. <span className="inline-block align-middle ml-1"><ZebraHeart size={24} /></span>
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Link to="#products">
              <button className="bg-yellow-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-600">
                Discover Our Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}