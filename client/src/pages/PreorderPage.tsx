import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export default function PreorderPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form processing
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Save to localStorage for now
    const preorders = JSON.parse(localStorage.getItem('zebrawell-preorders') || '[]');
    const newPreorder = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };
    preorders.push(newPreorder);
    localStorage.setItem('zebrawell-preorders', JSON.stringify(preorders));

    console.log('Preorder submitted:', newPreorder);

    setIsLoading(false);
    setIsSubmitted(true);
    
    toast({
      title: "Reservation Confirmed!",
      description: "You'll be first to know when ZebraWell launches.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{
        background: 'linear-gradient(135deg, hsl(var(--forest)) 0%, hsl(var(--sage)) 50%, hsl(var(--earth-sand)) 100%)'
      }}>
        <div className="max-w-md w-full bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-2xl">
          <div className="w-16 h-16 mx-auto mb-6 bg-cta-green rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-serif text-forest mb-4">You're All Set!</h2>
          <p className="text-sage-dark mb-6">
            Thank you for reserving your spot. We'll email you when ZebraWell is ready to ship.
          </p>
          <p className="text-sm text-sage opacity-75">
            Expected launch: Spring 2025
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-forest py-6 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 200 100" className="scale-150">
            <defs>
              <pattern id="zebraPattern" patternUnits="userSpaceOnUse" width="20" height="20">
                <rect width="20" height="20" fill="transparent"/>
                <path d="M0,10 Q10,0 20,10 Q10,20 0,10" fill="currentColor" fillOpacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#zebraPattern)"/>
          </svg>
        </div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-serif text-earth-cream mb-2 font-bold">
            ZebraWell Supplements
          </h1>
          <p className="text-forest-light text-lg">
            Therapeutic Solutions for POTS, EDS, and Dysautonomia
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 text-center overflow-hidden" style={{
        background: 'linear-gradient(135deg, hsl(var(--forest)) 0%, hsl(var(--sage)) 50%, hsl(var(--earth-sand)) 100%)'
      }}>
        {/* Subtle zebra pattern overlay */}
        <div className="absolute inset-0 opacity-3">
          <svg width="100%" height="100%" viewBox="0 0 400 200" className="scale-125">
            <defs>
              <pattern id="heroZebra" patternUnits="userSpaceOnUse" width="40" height="40">
                <rect width="40" height="40" fill="transparent"/>
                <path d="M0,20 Q20,0 40,20 Q20,40 0,20" fill="white" fillOpacity="0.05"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroZebra)"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 font-bold leading-tight">
            Coming Soon:<br />
            <span className="text-earth-cream">Reserve Your Bottle</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
            Be the first to access our clinical-grade AM/PM formulas designed for rare and resilient bodies. Limited early release.
          </p>
          <div className="max-w-3xl mx-auto text-white/80 text-lg leading-relaxed">
            <p className="mb-4">
              <strong className="text-earth-cream">Finally, supplements made for us.</strong> ZebraWell is the first therapeutic supplement line specifically formulated for Ehlers-Danlos Syndrome (EDS), Postural Orthostatic Tachycardia Syndrome (POTS), and Mast Cell Activation Syndrome (MCAS).
            </p>
            <p>
              No more piecing together random vitamins or wondering if they'll trigger your symptoms. Our clinical-grade AM/PM system delivers exactly what your body needs, when it needs it.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-serif text-forest text-center mb-12 font-bold">
            What You're Reserving
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* AM Formula */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-terra/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-serif text-terra font-bold">AM Formula</h4>
                  <p className="text-sage-dark">Morning Energy & Stability</p>
                </div>
              </div>
              <ul className="space-y-3 text-sage-dark">
                <li className="flex items-start">
                  <span className="text-terra mr-2">•</span>
                  <span><strong>Vitamin C (1000mg)</strong> - Collagen support and immune function</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terra mr-2">•</span>
                  <span><strong>B-Complex</strong> - Energy metabolism and nervous system support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terra mr-2">•</span>
                  <span><strong>Electrolyte Blend</strong> - Sodium, potassium for POTS management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terra mr-2">•</span>
                  <span><strong>Quercetin</strong> - Natural mast cell stabilizer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terra mr-2">•</span>
                  <span><strong>CoQ10</strong> - Cellular energy and heart health</span>
                </li>
              </ul>
            </div>

            {/* PM Formula */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-forest/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-serif text-forest font-bold">PM Formula</h4>
                  <p className="text-sage-dark">Evening Recovery & Repair</p>
                </div>
              </div>
              <ul className="space-y-3 text-sage-dark">
                <li className="flex items-start">
                  <span className="text-forest mr-2">•</span>
                  <span><strong>Magnesium Glycinate (400mg)</strong> - Muscle relaxation and sleep</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest mr-2">•</span>
                  <span><strong>Melatonin (3mg)</strong> - Natural sleep cycle regulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest mr-2">•</span>
                  <span><strong>L-Theanine</strong> - Calm focus and anxiety reduction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest mr-2">•</span>
                  <span><strong>Glycine</strong> - Joint support and sleep quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest mr-2">•</span>
                  <span><strong>Taurine</strong> - Cardiovascular and nervous system support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-16 md:py-20 px-4" style={{
        background: 'linear-gradient(135deg, hsl(var(--sage-light)) 0%, hsl(var(--earth-cream)) 100%)'
      }}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-serif text-forest mb-8 font-bold">
            Why ZebraWell is Different
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/80 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-serif text-forest mb-2 font-semibold">Made for Zebras</h4>
              <p className="text-sage-dark text-sm">
                Specifically formulated for EDS, POTS, and MCAS - not generic supplements adapted for our conditions.
              </p>
            </div>
            
            <div className="bg-white/80 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-terra rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                </svg>
              </div>
              <h4 className="text-xl font-serif text-forest mb-2 font-semibold">No Junk. Ever.</h4>
              <p className="text-sage-dark text-sm">
                Free from common allergens, fillers, and triggers. Low-histamine and gentle on sensitive systems.
              </p>
            </div>
            
            <div className="bg-white/80 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-cta-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h4 className="text-xl font-serif text-forest mb-2 font-semibold">Clinical Transparency</h4>
              <p className="text-sage-dark text-sm">
                Third-party tested with full Certificates of Analysis. You know exactly what you're getting.
              </p>
            </div>
          </div>
          
          <div className="bg-white/90 rounded-2xl p-8 shadow-sm">
            <h4 className="text-2xl font-serif text-forest mb-4 font-semibold">
              Finally, supplements that understand your body
            </h4>
            <p className="text-sage-dark text-lg leading-relaxed">
              We know what it's like to live with invisible conditions that most people don't understand. That's why every ingredient is chosen specifically to support the unique challenges of EDS, POTS, and MCAS - from collagen synthesis and joint stability to mast cell stabilization and autonomic nervous system support.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-earth-cream py-16 md:py-24 px-4">
        <div className="max-w-lg mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-serif text-forest mb-4 font-bold">
            Preorder Now
          </h3>
          <p className="text-lg text-sage-dark mb-8 leading-relaxed">
            Enter your details to reserve your spot. No payment required until shipping begins.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full p-4 text-lg border-2 border-sage/30 rounded-xl focus:border-forest focus:ring-2 focus:ring-forest/20 bg-white"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-4 text-lg border-2 border-sage/30 rounded-xl focus:border-forest focus:ring-2 focus:ring-forest/20 bg-white"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-terra hover:bg-terra-dark text-white text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Reserving...
                </div>
              ) : (
                'Reserve Now'
              )}
            </Button>
          </form>
          
          <p className="text-sm text-sage mt-6 opacity-75">
            Expected launch: Spring 2025 • No payment required today
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest py-8 px-4 text-center">
        <p className="text-forest-light">
          &copy; 2025 ZebraWell. All rights reserved.
        </p>
      </footer>
    </div>
  );
}