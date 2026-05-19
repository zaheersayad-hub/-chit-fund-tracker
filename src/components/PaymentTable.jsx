import { FiCheckCircle, FiClock, FiMessageSquare } from 'react-icons/fi';

const PaymentTable = ({ members }) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-white/5 shadow-md">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr className="bg-white/5 text-subtext text-sm">
              <th className="p-4 font-medium">Member</th>
              <th className="p-4 font-medium">Phone</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Note</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {members.map((member) => (
              <tr key={member.id} className="hover:bg-white/5 transition-colors group">
                <td className="p-4 text-white font-medium">
                  {member.name}
                </td>
                <td className="p-4 text-subtext text-sm">
                  {member.phone}
                </td>
                <td className="p-4">
                  {member.paid ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-semibold">
                      <FiCheckCircle size={14} /> Paid
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-danger/10 text-danger text-xs font-semibold">
                      <FiClock size={14} /> Pending
                    </span>
                  )}
                </td>
                <td className="p-4 text-subtext text-sm">
                  {member.note ? (
                    <span className="flex items-center gap-2" title={member.note}>
                      <FiMessageSquare className="text-primary" />
                      <span className="truncate max-w-[150px] inline-block">{member.note}</span>
                    </span>
                  ) : (
                    <span className="text-white/20">-</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentTable;
