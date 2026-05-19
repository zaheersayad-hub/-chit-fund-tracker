import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="bg-card w-full max-w-md p-8 rounded-3xl shadow-2xl border border-white/5">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center font-bold text-white text-2xl mx-auto shadow-lg shadow-primary/30 mb-6">
            CT
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">ChitTrack</h1>
          <p className="text-subtext mt-2 text-sm">Sign in to manage your chits</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-subtext mb-2">Mobile Number</label>
            <div className="flex bg-background rounded-xl border border-white/10 overflow-hidden focus-within:border-primary transition-colors">
              <span className="flex items-center px-4 border-r border-white/10 text-subtext bg-white/5">
                +91
              </span>
              <input 
                type="tel" 
                placeholder="00000 00000"
                className="w-full bg-transparent text-white px-4 py-3 outline-none"
                required
              />
            </div>
          </div>
          
          <button 
            type="submit"
            className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95"
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
