import ZebraPattern from './ZebraPattern';

export default function ZebraLogo() {
  return (
    <div className="flex items-center">
      <div className="h-20 w-20 mr-2 rounded-full flex items-center justify-center border-2 border-medical-blue p-1 shadow-[0_0_8px_rgba(hsl(var(--medical-blue)),.3)]">
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-sand relative overflow-hidden">
            <ZebraPattern />
            <i className="fas fa-leaf text-neon absolute inset-0 flex items-center justify-center opacity-90 text-xl drop-shadow-[0_0_2px_rgba(0,0,0,.3)]"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
