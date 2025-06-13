export default function BuyNow() {
  return (
    <section className="bg-gray-50 py-24 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-bold text-forest mb-8 fade-in">🛒 Available Soon</h2>
        <p className="text-xl text-forest/80 leading-relaxed mb-8 fade-in">
          ZebraWell will be available on Amazon and Shopify. Get exclusive early access and launch updates.
        </p>
        <button className="mt-4 bg-accent text-white px-8 py-3 rounded-md shadow-lg hover:opacity-90 transition-all duration-300 hover:scale-[1.02] font-semibold mb-8 fade-in">
          Get Notified When We Launch
        </button>
        <div className="mt-8 flex justify-center gap-6 fade-in">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="h-12 w-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md">
              Amazon
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="h-12 w-24 bg-gradient-to-r from-green-500 to-green-700 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md">
              Shopify
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}