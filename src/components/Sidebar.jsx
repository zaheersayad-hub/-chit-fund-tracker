import { NavLink } from 'react-router-dom';
import { FiHome, FiPlusCircle, FiList, FiSettings, FiLogOut } from 'react-icons/fi';

const Sidebar = ({ isOpen, closeSidebar }) => {
  const menuItems = [
    { name: 'Dashboard', icon: FiHome, path: '/dashboard' },
    { name: 'Create Group', icon: FiPlusCircle, path: '/create-group' },
    { name: 'All Groups', icon: FiList, path: '/dashboard' },
    { name: 'Settings', icon: FiSettings, path: '#' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity" 
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-card shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col border-r border-white/5`}
      >
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-primary/30">
            CT
          </div>
          <span className="text-2xl font-bold text-white tracking-wide">ChitTrack</span>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 ${
                    isActive && item.path !== '#'
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-subtext hover:bg-card-hover hover:text-white'
                  }`
                }
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5 mt-auto">
          <NavLink
            to="/"
            className="flex items-center gap-3 px-4 py-3.5 text-subtext hover:bg-danger/10 hover:text-danger rounded-xl transition-all duration-200"
          >
            <FiLogOut size={20} />
            <span>Logout</span>
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
