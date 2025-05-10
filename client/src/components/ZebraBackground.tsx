import zebraPattern from '../assets/zebra-pattern-green.png';

export default function ZebraBackground() {
  return (
    <div 
      className="absolute inset-0 z-0" 
      style={{
        backgroundImage: `url(${zebraPattern})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '300px 300px',
        opacity: 1 // Set to 100% (fully visible)
      }}
    />
  );
}
