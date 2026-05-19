import { useParams, Link } from 'react-router-dom';
import { FiClock, FiTarget, FiAward, FiCheckSquare, FiBell } from 'react-icons/fi';
import PageHeader from '../components/PageHeader';
import PaymentTable from '../components/PaymentTable';
import { mockGroups } from '../utils/mockData';

const GroupDetail = () => {
  const { id } = useParams();
  // Using dummy data
  const group = mockGroups.find(g => g.id === id) || mockGroups[0];
  const progress = Math.round((group.amountCollected / group.targetAmount) * 100);

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-24 lg:pb-8">
      <PageHeader 
        title={group.name} 
        showBack={true} 
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card p-6 rounded-2xl border border-white/5 shadow-md">
            <h3 className="text-lg font-semibold text-white mb-4">Collection Progress (Month {group.currentMonth})</h3>
            <div className="flex justify-between text-sm mb-2 font-medium">
              <span className="text-subtext">Collected: <span className="text-white">₹{group.amountCollected.toLocaleString()}</span></span>
              <span className="text-subtext">Target: <span className="text-white">₹{group.targetAmount.toLocaleString()}</span></span>
            </div>
            <div className="w-full bg-background rounded-full h-3 mb-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-success to-emerald-400 h-full rounded-full transition-all duration-1000" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-xs text-subtext text-right font-medium">{progress}% completed</p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Members List</h3>
              <div className="flex gap-2">
                <button className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-semibold transition-colors border border-white/5 flex items-center gap-2">
                  <FiBell size={16} /> Send Reminder
                </button>
              </div>
            </div>
            <PaymentTable members={group.members} />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-2xl border border-primary/20 shadow-md relative overflow-hidden">
            <div className="absolute -top-4 -right-4 p-4 opacity-10">
              <FiAward size={120} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">Current Month Winner</h3>
            <p className="text-subtext text-sm mb-5">Month {group.currentMonth}</p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-primary/30">
                {group.currentWinner.charAt(0)}
              </div>
              <div>
                <p className="text-xl font-bold text-white">{group.currentWinner}</p>
                <p className="text-primary text-sm font-semibold">Prize: ₹{group.targetAmount.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-2xl border border-white/5 shadow-md">
            <h3 className="text-lg font-semibold text-white mb-5">Group Stats</h3>
            <div className="space-y-5">
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <div className="flex items-center gap-2 text-subtext">
                  <FiTarget className="text-primary/70" size={18}/> Amount Per Month
                </div>
                <span className="text-white font-semibold">₹{group.amountPerMonth.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <div className="flex items-center gap-2 text-subtext">
                  <FiClock className="text-primary/70" size={18}/> Duration
                </div>
                <span className="text-white font-semibold">{group.duration} Months</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <div className="flex items-center gap-2 text-subtext">
                  <FiCheckSquare className="text-success/70" size={18}/> Paid Members
                </div>
                <span className="text-white font-semibold">{group.members.filter(m => m.paid).length}/{group.totalMembers}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-subtext">
                  <span className="w-2.5 h-2.5 rounded-full bg-danger shadow-sm shadow-danger/50"></span> Pending Payments
                </div>
                <span className="text-danger font-bold">{group.pendingCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed lg:static bottom-0 left-0 right-0 p-4 lg:p-0 bg-background lg:bg-transparent border-t border-white/10 lg:border-none z-40">
        <Link 
          to={`/group/${group.id}/payment`}
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
        >
          <FiCheckSquare size={20} /> Mark Payments
        </Link>
      </div>
    </div>
  );
};

export default GroupDetail;
