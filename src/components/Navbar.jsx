import { Link } from 'react-router-dom';
import { FiMenu, FiBell, FiUser } from 'react-icons/fi';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-card text-text h-16 flex items-center justify-between px-4 lg:px-8 shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="lg:hidden p-2 hover:bg-card-hover rounded-full transition-colors">
          <FiMenu size={24} />
        </button>
        {/* On desktop we might hide logo here if it's in sidebar, but keeping it visible on mobile */}
        <Link to="/dashboard" className="text-xl font-bold text-primary tracking-wide lg:hidden">
          ChitTrack
        </Link>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-card-hover rounded-full transition-colors relative">
          <FiBell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors">
          <FiUser size={18} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
