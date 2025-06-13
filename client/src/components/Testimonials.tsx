export default function Testimonials() {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-bold text-forest mb-8 fade-in">💬 What People Are Saying</h2>
        <div className="space-y-6">
          <blockquote className="text-forest/80 italic text-lg leading-relaxed fade-in">
            "It's the only thing I've taken that hasn't flared me up. Total game-changer."
          </blockquote>
          <p className="text-sm text-forest/60 fade-in">— Emily, EDS + MCAS patient</p>
          
          <blockquote className="text-forest/80 italic text-lg leading-relaxed fade-in mt-8">
            "This is the only supplement I've tried that didn't make me feel worse. It's part of my daily survival kit now."
          </blockquote>
          <p className="text-sm text-forest/60 fade-in">— Sarah, POTS community member</p>
        </div>
      </div>
    </section>
  );
}