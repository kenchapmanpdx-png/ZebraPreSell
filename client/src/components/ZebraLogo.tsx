export default function ZebraLogo() {
  return (
    <div className="flex items-center">
      <div className="h-10 w-10 mr-2 rounded-full bg-sage flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-earth-cream relative overflow-hidden">
          <div className="absolute inset-0 leaf-pattern opacity-80"></div>
          <i className="fas fa-leaf text-forest absolute inset-0 flex items-center justify-center opacity-70 text-xs"></i>
        </div>
      </div>
    </div>
  );
}
