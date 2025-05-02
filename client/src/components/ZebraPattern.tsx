import zebraPattern from '../assets/zebra-pattern.jpg';

export default function ZebraPattern() {
  return (
    <div 
      className="absolute inset-0 z-0" 
      style={{
        backgroundImage: `url(${zebraPattern})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '400px auto',
        opacity: 0.10,
        filter: 'sepia(100%) hue-rotate(80deg) saturate(60%) brightness(110%)'
      }}
    />
  );
}
