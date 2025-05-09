import ZebraPattern from './ZebraPattern';

export default function ZebraLogo() {
  return (
    <div className="flex items-center">
      <div className="h-20 w-20 mr-2 rounded-full flex items-center justify-center border-2 border-[hsl(var(--inw-teal))] p-1">
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white relative overflow-hidden flex items-center justify-center">
            <ZebraPattern />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="h-14 w-14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="#333"
                  stroke="#fff"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[hsl(var(--inw-teal))] font-heading">
        <div className="text-xl font-bold tracking-wide">Wellness For Zebras</div>
        <div className="text-xs">Support for the Rare and Resilient</div>
      </div>
    </div>
  );
}
