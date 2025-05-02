import ZebraLogo from './ZebraLogo';

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <ZebraLogo />
              <span className="text-2xl font-bold text-lavender">Zebra<span className="text-teal">Well</span></span>
            </div>
            <p className="text-neutral-medium mb-6">Wellness for the Rare and Resilient</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-dark border border-neutral-medium flex items-center justify-center hover:bg-lavender/20 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-dark border border-neutral-medium flex items-center justify-center hover:bg-lavender/20 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-dark border border-neutral-medium flex items-center justify-center hover:bg-lavender/20 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-lavender transition-colors">Home</a></li>
              <li><a href="#why" className="hover:text-lavender transition-colors">Why ZebraWell</a></li>
              <li><a href="#avacore" className="hover:text-lavender transition-colors">AvaCore</a></li>
              <li><a href="#boosters" className="hover:text-lavender transition-colors">Boosters</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#comparison" className="hover:text-lavender transition-colors">Comparison</a></li>
              <li><a href="#contact" className="hover:text-lavender transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-lavender transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-lavender transition-colors">Research</a></li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-neutral-medium/30" />
        
        <div className="text-center text-neutral-medium">
          <p>&copy; ZebraWell 2025. All rights reserved.</p>
          <p className="mt-2 text-sm">These statements have not been evaluated by the FDA. Products are not intended to diagnose, treat, cure, or prevent any disease.</p>
        </div>
      </div>
    </footer>
  );
}
