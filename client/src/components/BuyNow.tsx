export default function BuyNow() {
  return (
    <section className="bg-gray-50 py-10 px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-serif font-bold text-forest mb-4 fade-in">🛒 Available Soon</h2>
        <p className="text-lg text-forest/80 leading-relaxed mb-4 fade-in">
          ZebraWell will be available on Amazon and Shopify. Get exclusive early access and launch updates.
        </p>
        <button className="bg-cta-green text-white px-6 py-2.5 rounded-md shadow-lg hover:bg-cta-green-dark transition-all duration-300 hover:scale-[1.02] font-semibold mb-4 fade-in">
          Get Notified When We Launch
        </button>
        <div className="mt-6 flex justify-center gap-4 fade-in">
          <div className="bg-white rounded-lg p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="h-10 w-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-md">
              Amazon
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="h-10 w-20 bg-gradient-to-r from-green-500 to-green-700 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-md">
              Shopify
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}