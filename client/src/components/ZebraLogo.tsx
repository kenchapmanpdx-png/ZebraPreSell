import ZebraPattern from './ZebraPattern';
import zebraHeadImg from '../assets/zebra-head.png';

export default function ZebraLogo() {
  return (
    <div className="flex items-center">
      <div className="h-16 w-16 mr-3 rounded-full flex items-center justify-center bg-[hsl(var(--inw-teal))] p-[2px]">
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
          <div className="w-[95%] h-[95%] rounded-full bg-white relative overflow-hidden">
            <div className="absolute inset-0 inw-gradient opacity-10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={zebraHeadImg} 
                alt="Zebra head with heart" 
                className="h-[7rem] w-auto object-contain transform translate-y-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-[hsl(var(--inw-teal))] font-heading">
        <div className="text-xl font-bold tracking-wide">ZebraWell</div>
        <div className="text-xs uppercase tracking-wider">Wellness for the Rare and Resilient</div>
      </div>
    </div>
  );
}
