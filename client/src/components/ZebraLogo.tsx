export default function ZebraLogo() {
  return (
    <div className="w-14 h-14 md:w-18 md:h-18 rounded-full bg-black flex items-center justify-center mr-3 shadow-lg relative overflow-hidden">
      {/* White inner circle with gap */}
      <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center relative">
        {/* New zebra head image */}
        <div className="relative z-10 w-7 h-7 md:w-9 md:h-9 flex items-center justify-center">
          <img 
            src="/images/zebra-head-new.png" 
            alt="Zebra head" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Bright green heart overlay - properly shaped */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <svg width="12" height="12" viewBox="0 0 24 24" className="md:w-4 md:h-4">
            <path 
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="#89B317"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
