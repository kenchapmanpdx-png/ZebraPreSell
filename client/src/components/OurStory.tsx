import { Link } from 'wouter';
import fatherDaughterImg from '../assets/father-daughter.jpg';
import ZebraHeart from './ZebraHeart';

export default function OurStory() {
  return (
    <section id="story" className="py-6 md:py-8 relative overflow-hidden" style={{
      background: 'linear-gradient(0deg, rgba(105, 37, 0, 1) 0%, rgba(200, 89, 43, 1) 100%)'
    }}>
      <div className="container mx-auto px-6 relative z-1">
        <div className="max-w-4xl mx-auto rounded-xl p-8 md:p-12 shadow-lg border border-white/10" style={{
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }} data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-lora text-center mb-8 text-white" data-aos="fade-up">
            Behind every bottle of ZebraWell™ is a deeper purpose — and her name is <span className="text-white" style={{ fontSize: '1.2em', textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>Ava</span>.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img 
                src="/attached_assets/20160530_194549_HDR (1).jpg" 
                alt="Ava - the inspiration behind ZebraWell" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>

            <div className="space-y-4 text-white">
              <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                When my daughter Ava was diagnosed with <strong>Ehlers-Danlos Syndrome (EDS)</strong> and <strong>Postural Orthostatic Tachycardia Syndrome (POTS)</strong>, the recommended supplement regimen was overwhelming — over 12 different bottles, multiple doses throughout the day, and a constant fear of missing something critical.
              </p>

              <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="400">
                As a concerned parent, I knew there had to be a better way. That's when I partnered with leading researchers and formulators to create <strong>ZebraWell™</strong> — a comprehensive, science-backed solution that consolidates everything into just two formulas.
              </p>

              <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="600">
                <strong>AM Formula</strong> supports energy, mental clarity, and vascular tone. <strong>PM Formula</strong> focuses on recovery, inflammation management, and restorative sleep. No more juggling bottles or worrying about missed doses.
              </p>

              <div className="pt-4" data-aos="fade-up" data-aos-delay="800">
                <a href="#products" className="inline-block text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.05]" style={{
                  background: 'linear-gradient(90deg, hsla(161, 51%, 12%, 1) 15%, hsla(115, 41%, 27%, 1) 49%, hsla(161, 51%, 12%, 1) 85%)'
                }}>
                  Discover Our Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}