import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { mockGroups } from '../utils/mockData';

const PaymentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const group = mockGroups.find(g => g.id === id) || mockGroups[0];
  
  const [selectedMember, setSelectedMember] = useState(group.members.filter(m => !m.paid)[0]?.id || '');
  const [note, setNote] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment logic
    navigate(`/group/${id}`);
  };

  return (
    <div className="max-w-3xl mx-auto pb-24 lg:pb-8">
      <PageHeader title="Mark Payment" showBack={true} />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-card p-6 rounded-2xl border border-white/5 shadow-md">
          <h2 className="text-lg font-semibold text-white mb-4">Select Member</h2>
          <div className="space-y-3 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
            {group.members.filter(m => !m.paid).map((member) => (
              <label 
                key={member.id} 
                className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-colors ${
                  selectedMember === member.id 
                    ? 'bg-primary/10 border-primary shadow-inner shadow-primary/5' 
                    : 'bg-background border-white/5 hover:border-white/20 hover:bg-white/5'
                }`}
              >
                <input 
                  type="radio" 
                  name="member" 
                  value={member.id}
                  checked={selectedMember === member.id}
                  onChange={(e) => setSelectedMember(e.target.value)}
                  className="w-5 h-5 accent-primary cursor-pointer"
                  required
                />
                <div>
                  <p className="text-white font-medium">{member.name}</p>
                  <p className="text-subtext text-sm">{member.phone}</p>
                </div>
              </label>
            ))}
            {group.members.filter(m => !m.paid).length === 0 && (
              <div className="text-center py-8 text-subtext">
                All members have paid for this month!
              </div>
            )}
          </div>
        </div>

        <div className="bg-card p-6 rounded-2xl border border-white/5 shadow-md space-y-6">
          <h2 className="text-lg font-semibold text-white">Payment Details</h2>
          
          <div className="p-5 bg-background border border-white/5 rounded-xl flex justify-between items-center shadow-inner">
            <span className="text-subtext font-medium">Amount Due</span>
            <span className="text-3xl font-bold text-white tracking-tight">₹{group.amountPerMonth.toLocaleString()}</span>
          </div>

          <div>
            <label className="block text-sm font-medium text-subtext mb-2">Payment Date</label>
            <input 
              type="date" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-background border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-primary transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-subtext mb-2">Optional Note</label>
            <textarea 
              placeholder="e.g. Paid in cash"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full bg-background border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-primary transition-colors resize-none h-28"
            ></textarea>
          </div>
        </div>

        <div className="fixed lg:static bottom-0 left-0 right-0 p-4 lg:p-0 bg-background lg:bg-transparent border-t border-white/10 lg:border-none z-40">
          <button 
            type="submit"
            disabled={group.members.filter(m => !m.paid).length === 0}
            className="w-full bg-success hover:bg-emerald-400 text-white font-semibold py-4 rounded-xl shadow-lg shadow-success/20 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            Confirm Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentPage;
