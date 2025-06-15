export default function ZebraLogo() {
  return (
    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center mr-3 shadow-lg border-2 border-white/20 relative overflow-hidden">
      {/* New zebra head image */}
      <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
        <img 
          src="/images/zebra-head-new.png" 
          alt="Zebra head" 
          className="w-full h-full object-contain"
        />
        
        {/* Bright green heart overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 md:w-4 md:h-4 bg-[#89B317] transform rotate-45 relative">
            <div className="absolute -top-1 -left-1 w-2 h-2 md:w-3 md:h-3 bg-[#89B317] rounded-full"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-[#89B317] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
