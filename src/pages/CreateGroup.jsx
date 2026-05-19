import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import PageHeader from '../components/PageHeader';

const CreateGroup = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState([{ id: 1, name: '', phone: '' }]);

  const handleAddMember = () => {
    setMembers([...members, { id: Date.now(), name: '', phone: '' }]);
  };

  const handleRemoveMember = (id) => {
    setMembers(members.filter(m => m.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate save
    navigate('/dashboard');
  };

  return (
    <div className="max-w-3xl mx-auto pb-24 lg:pb-8">
      <PageHeader title="Create New Group" showBack={true} />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-card p-6 rounded-2xl border border-white/5 shadow-md space-y-6">
          <h2 className="text-lg font-semibold text-white">Group Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-subtext mb-2">Group Name</label>
              <input 
                type="text" 
                placeholder="e.g. Friends Circle Fund"
                className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary transition-colors"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-subtext mb-2">Amount Per Month (₹)</label>
                <input 
                  type="number" 
                  placeholder="5000"
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-subtext mb-2">Duration (Months)</label>
                <select className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary transition-colors appearance-none">
                  <option value="10">10 Months</option>
                  <option value="12">12 Months</option>
                  <option value="20">20 Months</option>
                  <option value="24">24 Months</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-subtext mb-2">Start Date</label>
              <input 
                type="date" 
                className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary transition-colors"
                required
              />
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-2xl border border-white/5 shadow-md space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Members</h2>
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-lg text-sm font-medium">
              {members.length} Total
            </span>
          </div>

          <div className="space-y-4">
            {members.map((member, index) => (
              <div key={member.id} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-subtext text-sm shrink-0 mt-2">
                  {index + 1}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-2.5 text-white focus:border-primary transition-colors"
                    required
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-2.5 text-white focus:border-primary transition-colors"
                    required
                  />
                </div>
                {members.length > 1 && (
                  <button 
                    type="button"
                    onClick={() => handleRemoveMember(member.id)}
                    className="p-3 text-subtext hover:text-danger hover:bg-danger/10 rounded-xl transition-colors shrink-0"
                  >
                    <FiTrash2 size={20} />
                  </button>
                )}
              </div>
            ))}
          </div>

          <button 
            type="button"
            onClick={handleAddMember}
            className="w-full py-3 border border-dashed border-white/20 rounded-xl text-primary hover:bg-white/5 transition-colors flex items-center justify-center gap-2 font-medium mt-4"
          >
            <FiPlus size={20} /> Add Another Member
          </button>
        </div>

        <div className="fixed lg:static bottom-0 left-0 right-0 p-4 lg:p-0 bg-background lg:bg-transparent border-t border-white/10 lg:border-none z-40">
          <button 
            type="submit"
            className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all"
          >
            Create Group
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGroup;
