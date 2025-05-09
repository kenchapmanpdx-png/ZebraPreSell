import ZebraPattern from './ZebraPattern';
import zebraHeadSilhouette from '../assets/zebra-head-silhouette.svg';

export default function ZebraLogo() {
  return (
    <div className="flex items-center">
      <div className="h-20 w-20 mr-2 rounded-full flex items-center justify-center border-2 border-[hsl(var(--inw-teal))] p-1">
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white relative overflow-hidden">
            <ZebraPattern />
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={zebraHeadSilhouette} 
                alt="Zebra silhouette" 
                className="h-14 w-auto object-contain z-10" 
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-[hsl(var(--inw-teal))] font-heading">
        <div className="text-xl font-bold tracking-wide">ZebraWell</div>
        <div className="text-xs">Wellness for the Rare and Resilient</div>
      </div>
    </div>
  );
}
