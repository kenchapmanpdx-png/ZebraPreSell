import zebraPattern from '../assets/zebra-pattern.jpg';

export default function ZebraPattern() {
  // Get the sage-green color from our palette for the zebra pattern
  return (
    <div 
      className="absolute inset-0 z-0" 
      style={{
        backgroundImage: `url(${zebraPattern})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '400px auto', // 300% smaller than the main pattern (which is 1200px)
        opacity: 0.1,
        filter: `sepia(100%) hue-rotate(80deg) saturate(60%) brightness(110%)` // Transforms to sage green like the main pattern
      }}
    />
  );
}
