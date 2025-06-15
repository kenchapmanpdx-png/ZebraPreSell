export default function ZebraLogo() {
  return (
    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center mr-3 shadow-lg border-2 border-black relative overflow-hidden">
      {/* New zebra head image */}
      <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
        <img 
          src="/images/zebra-head-new.png" 
          alt="Zebra head" 
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Bright green heart overlay - positioned more precisely */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-[#89B317] transform rotate-45 relative">
          <div className="absolute -top-0.5 -left-0.5 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#89B317] rounded-full"></div>
          <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#89B317] rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
