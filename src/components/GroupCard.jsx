import { Link } from 'react-router-dom';
import { FiUsers, FiClock, FiTarget } from 'react-icons/fi';

const GroupCard = ({ group }) => {
  const progress = Math.round((group.currentMonth / group.duration) * 100);

  return (
    <Link to={`/group/${group.id}`} className="block">
      <div className="bg-card rounded-2xl p-6 border border-white/5 shadow-md hover:bg-card-hover hover:border-primary/30 transition-all duration-300 group">
        <div className="flex justify-between items-start mb-5">
          <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors line-clamp-1">{group.name}</h3>
          {group.pendingCount > 0 ? (
            <span className="px-3 py-1 bg-danger/10 text-danger text-xs font-semibold rounded-full whitespace-nowrap">
              {group.pendingCount} Pending
            </span>
          ) : (
            <span className="px-3 py-1 bg-success/10 text-success text-xs font-semibold rounded-full whitespace-nowrap">
              Up to date
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-subtext text-sm">
            <FiUsers className="text-primary/70" size={16} />
            <span>{group.totalMembers} Members</span>
          </div>
          <div className="flex items-center gap-2 text-subtext text-sm">
            <FiClock className="text-primary/70" size={16} />
            <span>Month {group.currentMonth}/{group.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-subtext text-sm col-span-2">
            <FiTarget className="text-primary/70" size={16} />
            <span>₹{group.amountPerMonth.toLocaleString()} / month</span>
          </div>
        </div>

        <div className="mb-2 flex justify-between text-xs font-medium">
          <span className="text-subtext">Collection Progress</span>
          <span className="text-white">{progress}%</span>
        </div>
        <div className="w-full bg-background rounded-full h-2.5 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-primary to-primary-hover h-full rounded-full transition-all duration-1000" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </Link>
  );
};

export default GroupCard;
