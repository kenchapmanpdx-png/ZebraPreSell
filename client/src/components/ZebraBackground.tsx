import zebraPattern from '../assets/zebra-pattern.jpg';

export default function ZebraBackground() {
  // Get the sage-green color from our palette for the zebra pattern
  const sageGreen = "rgb(122, 156, 101)"; // This is the sage green from our palette
  
  return (
    <div 
      className="absolute inset-0 z-0" 
      style={{
        backgroundImage: `url(${zebraPattern})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '1200px auto', // 300% larger than the original 400px
        opacity: 0.06, // Increased by 20%
        filter: `sepia(100%) hue-rotate(80deg) saturate(60%) brightness(110%)` // Transforms black to sage green
      }}
    />
  );
}
