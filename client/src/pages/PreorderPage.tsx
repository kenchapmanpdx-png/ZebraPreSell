import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ZebraPatternOverlay from '@/components/ZebraPatternOverlay';
import ZebraHeart from '@/components/ZebraHeart';
import ProductBottles from '@/components/ProductBottles';
import { CheckCircle, Heart, Sparkles, Clock, Mail } from 'lucide-react';

export default function PreorderPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      toast({
        title: "You're on the list!",
        description: "We'll notify you as soon as ZebraWell is available for order.",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navigation />
      <ZebraPatternOverlay opacity={0.03} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200 px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Coming Soon
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Be the First to Experience
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mt-2">
                ZebraWell
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Clinical-grade supplements designed specifically for EDS, POTS, and MCAS. 
              Join our reservation list to be notified when we launch.
            </p>

            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="flex items-center text-amber-700">
                <ZebraHeart className="mr-2" size={20} />
                <span className="font-medium">Made with care for rare conditions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <ProductBottles />
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    What's Inside
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Each bottle contains 120 capsules (30-day supply). Take 4 capsules in the morning and 4 at night. 
                    That's it—no more 12-bottle stacks.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-amber-200 bg-amber-50/50">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-amber-700 mb-1">AM</div>
                      <div className="text-sm text-gray-600">Morning Formula</div>
                      <div className="text-xs text-gray-500 mt-1">4 capsules</div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 bg-green-50/50">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-green-700 mb-1">PM</div>
                      <div className="text-sm text-gray-600">Evening Formula</div>
                      <div className="text-xs text-gray-500 mt-1">4 capsules</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Clinical-grade ingredients</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Formulated for rare conditions</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>30-day supply per bottle</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-amber-100/50 to-orange-100/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              💬 What People Are Saying
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-amber-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Heart className="w-5 h-5 text-red-500 mr-2" />
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                      EDS + MCAS patient
                    </Badge>
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-4 italic">
                    "It's the only thing I've taken that hasn't flared me up. Total game-changer."
                  </blockquote>
                  <cite className="text-sm font-medium text-gray-600">— Emily</cite>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Heart className="w-5 h-5 text-red-500 mr-2" />
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      POTS community member
                    </Badge>
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-4 italic">
                    "This is the only supplement I've tried that didn't make me feel worse. It's part of my daily survival kit now."
                  </blockquote>
                  <cite className="text-sm font-medium text-gray-600">— Sarah</cite>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 md:p-12 border border-amber-200">
              <div className="mb-8">
                <Clock className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-terra mb-4">
                  Reserve Your Spot – Limited First Run!
                </h2>
                <p className="text-lg text-gray-700">
                  Be the first to know when ZebraWell is available for order. 
                  No spam, just the important updates.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-12 py-3 text-lg border-amber-200 focus:border-amber-400 focus:ring-amber-400 bg-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 text-lg text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 ${
                      email 
                        ? 'bg-[#2ECC71] border-[#2ECC71] hover:bg-[#28B763]'
                        : 'bg-[#C8592B] border-[#C8592B] opacity-70 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Adding you to the list...
                      </div>
                    ) : (
                      "Claim Your Spot"
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    You're all set!
                  </h3>
                  <p className="text-gray-700">
                    We'll send you an email as soon as ZebraWell is ready to order.
                  </p>
                </div>
              )}

              <p className="text-sm text-gray-600 mt-6">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}