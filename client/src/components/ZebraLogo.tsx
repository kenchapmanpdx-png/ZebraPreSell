export default function ZebraLogo() {
  return (
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white bg-opacity-90 flex items-center justify-center mr-3 shadow-lg relative overflow-hidden">
      {/* New zebra head image */}
      <div className="relative z-10 w-14 h-14 md:w-18 md:h-18 flex items-center justify-center">
        <img 
          src="/images/zebra-head-latest.png" 
          alt="Zebra head" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
