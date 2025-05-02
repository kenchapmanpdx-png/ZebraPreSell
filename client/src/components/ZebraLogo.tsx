import ZebraPattern from './ZebraPattern';

export default function ZebraLogo() {
  return (
    <div className="flex items-center">
      <div className="h-20 w-20 mr-2 rounded-full bg-sage flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-earth-cream relative overflow-hidden">
          <ZebraPattern />
          <i className="fas fa-leaf text-forest absolute inset-0 flex items-center justify-center opacity-70 text-xl"></i>
        </div>
      </div>
    </div>
  );
}
