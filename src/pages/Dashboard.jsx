import { useState } from 'react';
import { FiGrid, FiActivity, FiDollarSign } from 'react-icons/fi';
import SummaryCard from '../components/SummaryCard';
import GroupCard from '../components/GroupCard';
import FloatingButton from '../components/FloatingButton';
import { mockGroups, mockSummaryStats } from '../utils/mockData';

const Dashboard = () => {
  const [groups] = useState(mockGroups);

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-20 lg:pb-8">
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Hello 👋</h1>
        <p className="text-subtext mt-1">Here's what's happening with your chits today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard 
          title="Total Groups" 
          value={mockSummaryStats.totalGroups} 
          icon={FiGrid} 
          colorClass="bg-primary/20 text-primary" 
        />
        <SummaryCard 
          title="Active Groups" 
          value={mockSummaryStats.activeGroups} 
          icon={FiActivity} 
          colorClass="bg-success/20 text-success" 
        />
        <SummaryCard 
          title="This Month" 
          value={`₹${mockSummaryStats.monthlyCollection.toLocaleString()}`} 
          icon={FiDollarSign} 
          colorClass="bg-blue-500/20 text-blue-500" 
        />
      </div>

      <div>
        <h2 className="text-xl font-bold text-white mb-6">Your Groups</h2>
        {groups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map(group => (
              <GroupCard key={group.id} group={group} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-card rounded-2xl border border-white/5">
            <p className="text-subtext">No groups found. Create one to get started!</p>
          </div>
        )}
      </div>

      <FloatingButton to="/create-group" />
    </div>
  );
};

export default Dashboard;
