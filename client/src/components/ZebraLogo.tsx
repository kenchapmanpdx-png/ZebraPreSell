export default function ZebraLogo() {
  return (
    <div className="w-16 h-16 md:w-22 md:h-22 rounded-full bg-black flex items-center justify-center mr-3 shadow-lg relative overflow-hidden" style={{ padding: '2px' }}>
      {/* White inner circle with gap and opacity */}
      <div className="w-12 h-12 md:w-17 md:h-17 rounded-full bg-white bg-opacity-60 flex items-center justify-center relative">
        {/* New zebra head image */}
        <div className="relative z-10 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
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
