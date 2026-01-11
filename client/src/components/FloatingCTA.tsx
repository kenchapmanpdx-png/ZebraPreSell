export default function FloatingCTA() {
  const handleClick = () => {
    const heroForm = document.getElementById('waitlist-form');
    if (heroForm) {
      heroForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div id="floating-cta" className="fixed bottom-6 right-6 z-40 fade-in">
      <button 
        onClick={handleClick}
        className="bg-[#C8592B] hover:bg-[#B04A20] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center"
      >
        Join Waitlist
      </button>
    </div>
  );
}
