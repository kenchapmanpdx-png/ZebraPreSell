import { Link } from 'wouter';

export default function FloatingCTA() {
  return (
    <div id="floating-cta" className="fixed bottom-6 right-6 z-40 fade-in">
      <Link to="/preorder">
        <button 
          className="bg-[#89B317] hover:bg-[#89B317]/90 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center"
        >
          <i className="fas fa-bell mr-2"></i>
          Join Reservation List
        </button>
      </Link>
    </div>
  );
}
