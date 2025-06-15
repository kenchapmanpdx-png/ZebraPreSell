export default function ZebraLogo() {
  return (
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black flex items-center justify-center mr-3 shadow-lg relative overflow-hidden">
      {/* White inner circle with gap and opacity */}
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white bg-opacity-60 flex items-center justify-center relative">
        {/* New zebra head image */}
        <div className="relative z-10 w-9 h-9 md:w-13 md:h-13 flex items-center justify-center">
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
