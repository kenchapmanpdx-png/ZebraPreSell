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
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Be the first to access our clinical-grade AM/PM formulas designed for rare and resilient bodies. Limited early release.
          </p>
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