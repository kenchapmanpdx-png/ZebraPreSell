export default function BuyNow() {
  return (
    <section className="bg-gray-50 py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-lora text-forest font-semibold mb-8 fade-in">🛒 Available Soon</h2>
        <p className="text-forest/80 text-lg leading-relaxed mb-8 fade-in">
          ZebraWell will be available on Amazon and Shopify. Subscribe for launch updates and exclusive early access.
        </p>
        <div className="mt-6 flex justify-center gap-8 fade-in">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="h-10 w-20 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-sm">
              Amazon
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="h-10 w-20 bg-green-600 rounded flex items-center justify-center text-white font-bold text-sm">
              Shopify
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}