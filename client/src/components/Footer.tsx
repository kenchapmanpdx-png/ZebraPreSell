import ZebraLogo from './ZebraLogo';

export default function Footer() {
  return (
    <footer className="text-white py-12" style={{
      background: '#0F2E24',
      backgroundImage: 'linear-gradient(90deg, rgba(15, 46, 36, 1) 6%, rgba(132, 150, 80, 1) 50%, rgba(15, 46, 36, 1) 94%)'
    }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <ZebraLogo />
              <span className="text-2xl font-bold"><span className="text-white">Zebra</span><span className="text-white font-normal">Well</span><span className="text-xs align-top bg-white/10 text-white px-1 py-0.5 rounded ml-1">MD</span></span>
            </div>
            <p className="text-white/70 mb-6">Advanced Supplementation for Complex Conditions</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center"><i className="fas fa-link text-white/50 mr-2"></i>Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#why" className="hover:text-white transition-colors">Why ZebraWell</a></li>
              <li><a href="#avacore" className="hover:text-white transition-colors">Core Formula</a></li>
              <li><a href="#boosters" className="hover:text-white transition-colors">Medical Boosters</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center"><i className="fas fa-question-circle text-white/50 mr-2"></i>Resources</h4>
            <ul className="space-y-2">
              <li><a href="#comparison" className="hover:text-white transition-colors">Clinical Research</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Consultation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Medical FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Scientific Research</a></li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-white/20" />
        
        <div className="text-center text-white/70">
          <p>&copy; ZebraWell 2025. All rights reserved.</p>
          <p className="mt-2 text-sm">These statements have not been evaluated by the FDA. Products are not intended to diagnose, treat, cure, or prevent any disease.</p>
        </div>
      </div>
    </footer>
  );
}
