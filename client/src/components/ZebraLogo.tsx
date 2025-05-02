export default function ZebraLogo() {
  return (
    <div className="flex items-center">
      <div className="h-10 w-10 mr-2 rounded-full bg-lavender flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-white relative overflow-hidden">
          <div className="absolute inset-0 zebra-bg opacity-80"></div>
        </div>
      </div>
    </div>
  );
}
