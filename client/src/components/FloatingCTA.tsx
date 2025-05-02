export default function FloatingCTA() {
  const openModal = () => {
    const modal = document.getElementById('sample-modal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <div id="floating-cta" className="fixed bottom-6 right-6 z-40 fade-in">
      <button 
        id="sample-request-btn" 
        onClick={openModal}
        className="bg-medical-blue hover:bg-medical-blue/90 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center"
      >
        <i className="fas fa-vial mr-2"></i>
        Request a Sample
      </button>
    </div>
  );
}
