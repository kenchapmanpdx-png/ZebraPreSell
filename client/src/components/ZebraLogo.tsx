import ZebraPattern from './ZebraPattern';

export default function ZebraLogo() {
  return (
    <div className="flex items-center">
      <div className="h-20 w-20 mr-2 rounded-full flex items-center justify-center border-2 border-black p-1">
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-earth-cream relative overflow-hidden">
            <ZebraPattern />
            <i className="fas fa-leaf absolute inset-0 flex items-center justify-center opacity-70 text-3xl" style={{ color: '#2a7635' }}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
