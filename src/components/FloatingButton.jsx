import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

const FloatingButton = ({ to }) => {
  return (
    <Link 
      to={to}
      className="fixed bottom-6 right-6 w-14 h-14 bg-primary hover:bg-primary-hover text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center transition-transform hover:scale-110 z-40 lg:hidden"
    >
      <FiPlus size={28} />
    </Link>
  );
};

export default FloatingButton;
