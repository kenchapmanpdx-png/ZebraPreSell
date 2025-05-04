import zebraPattern from '../assets/zebra-pattern-new.png';

export default function ZebraPatternAlt() {
  return (
    <div 
      className="absolute inset-0 z-0" 
      style={{
        backgroundImage: `url(${zebraPattern})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '500px auto',
        opacity: 0.08,
        filter: 'sepia(100%) hue-rotate(345deg) saturate(80%) brightness(50%)'
      }}
    />
  );
}