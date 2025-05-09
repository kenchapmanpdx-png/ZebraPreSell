import zebraHeadPng from '../assets/zebra-head.png';

export default function ZebraLogo() {
  return (
    <div className="flex items-center">
      <div className="h-20 w-20 mr-3 flex items-center justify-center">
        <img 
          src={zebraHeadPng} 
          alt="Zebra head logo" 
          className="h-full w-full object-contain"
        />
      </div>
      <div className="text-[hsl(var(--inw-teal))] font-heading">
        <div className="text-xl font-bold tracking-wide">Wellness For Zebras</div>
        <div className="text-xs">For the Rare & Resilient</div>
      </div>
    </div>
  );
}
