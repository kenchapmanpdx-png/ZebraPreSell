export default function Testimonials() {
  return (
    <section className="bg-white py-10 px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-serif font-bold text-forest mb-6" data-aos="fade-up">💬 What People Are Saying</h2>
        <div className="space-y-4">
          <blockquote className="text-forest/80 italic text-base leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            "It's the only thing I've taken that hasn't flared me up. Total game-changer."
          </blockquote>
          <p className="text-xs text-forest/60" data-aos="fade-up" data-aos-delay="300">— Emily, EDS + MCAS patient</p>
          
          <blockquote className="text-forest/80 italic text-base leading-relaxed mt-6" data-aos="fade-up" data-aos-delay="400">
            "This is the only supplement I've tried that didn't make me feel worse. It's part of my daily survival kit now."
          </blockquote>
          <p className="text-xs text-forest/60" data-aos="fade-up" data-aos-delay="500">— Sarah, POTS community member</p>
        </div>
      </div>
    </section>
  );
}