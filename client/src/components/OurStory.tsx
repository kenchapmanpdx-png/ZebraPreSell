import { Link } from 'wouter';

export default function OurStory() {
  return (
    <section id="story" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-1">
        <div className="max-w-4xl mx-auto bg-earth-cream rounded-xl p-8 md:p-12 shadow-lg border border-terra/10">
          <h2 className="text-3xl md:text-4xl font-lora text-center mb-8 text-forest">
            <span className="text-xl text-terra block mb-2 font-medium">"WHY"</span>
            Behind every bottle of ZebraWell™ is a deeper purpose — and her name is Ava.
          </h2>
          
          <div className="prose prose-lg prose-forest max-w-3xl mx-auto">
            <p>
              Ava is my daughter. She is brave, brilliant, and resilient in ways that most will never have to be. 
              She lives with Ehlers-Danlos Syndrome (hEDS), Postural Orthostatic Tachycardia Syndrome (POTS). 
              These are complex, often invisible conditions that affect every aspect of her life — from the way 
              her body processes nutrients to how it responds to her chronic pain, inflammation, and even gravity.
            </p>
            
            <p>
              ZebraWell™ was born from my relentless search to help her feel better — not just temporarily, but 
              sustainably and safely. I've spent countless nights studying the science, researching and fine-tuning 
              formulations that could offer real support without triggering the sensitivities that make typical 
              supplements a minefield for people like her.
            </p>
            
            <p>
              This isn't just a business. It's personal. Every ingredient in ZebraWell™ has been chosen with Ava 
              in mind — and with the hope that it helps others like her feel stronger, steadier, and seen.
            </p>
            
            <p className="font-bold text-terra-dark">
              She is my Why.
            </p>
            
            <p className="text-center font-medium">
              And if you or someone you love is a zebra too — you're part of our herd now.
            </p>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Link to="#products">
              <button className="bg-terra hover:bg-terra-dark text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                <i className="fas fa-leaf mr-2"></i>Discover Our Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}