import zebraPattern from '../assets/zebra-pattern.jpg';

export default function ZebraBackground() {
  return (
    <div 
      className="absolute inset-0 z-0" 
      style={{
        backgroundImage: `url(${zebraPattern})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '400px auto',
        opacity: 0.2
      }}
    />
  );
}
