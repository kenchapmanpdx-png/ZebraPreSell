import { Link } from 'wouter';
import fatherDaughterImg from '../assets/father-daughter.jpg';
import ZebraHeart from './ZebraHeart';

export default function OurStory() {
  return (
    <section id="story" className="py-6 md:py-8 relative overflow-hidden" style={{
      margin: 0,
      padding: 0,
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(135deg, #C8592B 0%, #F4D4C1 50%, #9A4321 100%)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      fontFamily: 'Inter, sans-serif',
      color: 'white'
    }}>
      <div className="container mx-auto px-6 relative z-1">
        <div className="max-w-4xl mx-auto rounded-xl p-8 md:p-12 shadow-lg border border-terra/10" style={{
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }} data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-lora text-center mb-8 text-white" data-aos="fade-up">
            Behind every bottle of ZebraWell™ is a deeper purpose — and her name is <span className="text-terra" style={{ fontSize: '1.2em' }}>Ava</span>.
          </h2>

          <div className="prose prose-lg prose-white max-w-3xl mx-auto text-white" data-aos="fade">
            <p>
              Ava is our daughter — brave, brilliant, and resilient in ways most will never have to be.
              She lives with Scoliosis, Ehlers-Danlos Syndrome (hEDS), and POTS — complex, mostly invisible conditions that affect everything from how her body utilizes nutrients to how she lives with chronic pain, dislocating joints, and extreme fatigue.
            </p>

            <p>
              ZebraWell™ was born from our relentless pursuit to help her feel better — not just temporarily, but sustainably and safely.
            </p>

            <p>
              This isn't just a business. It's personal. Every ingredient was chosen with Ava 
              in mind — and with the hope of helping others like her feel stronger, steadier, and cared for.
            </p>

            <p className="font-bold text-white text-center font-serif" style={{ fontSize: '1.75em' }}>
              She is our Why!
            </p>

            <div className="flex justify-center mt-6 mb-4">
              <div className="border border-terra/30 p-1 rounded-md shadow-sm">
                <img src={fatherDaughterImg} alt="Father and daughter" className="rounded-md max-w-full h-auto" style={{ maxHeight: '225px' }} />
              </div>
            </div>

            <p className="text-center font-medium mt-4 italic text-white">
              If you or someone you love is a Zebra, welcome to the herd. <span className="inline-block align-middle ml-1"><ZebraHeart size={26} /></span>
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Link to="#products">
              <button className="bg-[#89B317] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#89B317]/90">
                Discover Our Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}