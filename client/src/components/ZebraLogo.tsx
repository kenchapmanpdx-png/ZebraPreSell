export default function ZebraLogo() {
  return (
    <div className="w-14 h-14 md:w-18 md:h-18 rounded-full bg-black flex items-center justify-center mr-3 shadow-lg relative overflow-hidden">
      {/* White inner circle with gap */}
      <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center relative">
        {/* New zebra head image */}
        <div className="relative z-10 w-7 h-7 md:w-9 md:h-9 flex items-center justify-center">
          <img 
            src="/images/zebra-head-latest.png" 
            alt="Zebra head" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
