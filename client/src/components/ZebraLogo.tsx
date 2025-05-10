import ZebraPattern from './ZebraPattern';
import zebraHeadImg from '../assets/zebra-head.png';

export default function ZebraLogo() {
  return (
    <div className="flex items-center">
      <div className="h-20 w-20 mr-2 rounded-full flex items-center justify-center border-2 border-black p-1">
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-earth-cream relative overflow-hidden">
            <ZebraPattern />
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={zebraHeadImg} 
                alt="Zebra head with heart" 
                className="h-[10rem] w-auto object-contain" /* Increased to ensure proper size */
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
