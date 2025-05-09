import zebraLogoSvg from '../assets/zebra-logo.svg';

export default function ZebraLogo() {
  return (
    <div className="flex items-center">
      <div className="h-24 w-24 mr-3 flex items-center justify-center">
        <img 
          src={zebraLogoSvg} 
          alt="Zebra head logo" 
          className="h-full w-full object-contain"
        />
      </div>
      <div className="text-[hsl(var(--inw-teal))] font-heading">
        <div className="text-xl font-bold tracking-wide">Wellness For Zebras</div>
        <div className="text-xs">Support for the Rare and Resilient</div>
      </div>
    </div>
  );
}
