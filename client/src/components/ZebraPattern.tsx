import zebraPattern from '../assets/zebra-pattern-new.png';

export default function ZebraPattern() {
  return (
    <div 
      className="absolute inset-0 z-0" 
      style={{
        backgroundImage: `url(${zebraPattern})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '250px auto',
        opacity: 0.08,
        filter: 'sepia(100%) hue-rotate(80deg) saturate(60%) brightness(110%)',
        transform: 'rotate(180deg)'
      }}
    />
  );
}
