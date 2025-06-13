import zebraPattern from '../assets/zebra-pattern.jpg';

export default function ZebraBackground() {
  // Dark tan color for the zebra pattern background
  const darkTan = "rgb(139, 118, 94)"; // Dark tan color
  
  return (
    <div 
      className="absolute inset-0 z-0" 
      style={{
        backgroundImage: `url(${zebraPattern})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '1200px auto', // 300% larger than the original 400px
        opacity: 0.02, // Reduced by another 50% for cleaner hero section
        filter: `sepia(100%) hue-rotate(25deg) saturate(50%) brightness(90%)` // Transforms black to dark tan
      }}
    />
  );
}
