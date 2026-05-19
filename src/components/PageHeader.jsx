import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const PageHeader = ({ title, showBack = false, action }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        {showBack && (
          <button 
            onClick={() => navigate(-1)}
            className="p-2.5 bg-card hover:bg-card-hover rounded-full text-white transition-colors border border-white/5"
          >
            <FiArrowLeft size={20} />
          </button>
        )}
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{title}</h1>
      </div>
      {action && (
        <div>{action}</div>
      )}
    </div>
  );
};

export default PageHeader;
