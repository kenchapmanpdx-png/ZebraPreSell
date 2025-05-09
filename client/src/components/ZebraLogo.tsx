import zebraHeadPng from '../assets/zebra-head.png';

export default function ZebraLogo() {
  return (
    <div className="flex items-center">
      <div className="h-30 w-30 mr-3 flex items-center justify-center">
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
