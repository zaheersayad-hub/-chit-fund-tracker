const SummaryCard = ({ title, value, icon: Icon, colorClass }) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-lg border border-white/5 hover:-translate-y-1 transition-transform duration-300">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-subtext text-sm font-medium mb-2">{title}</p>
          <h3 className="text-3xl font-bold text-white tracking-tight">{value}</h3>
        </div>
        <div className={`p-3.5 rounded-2xl ${colorClass}`}>
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
