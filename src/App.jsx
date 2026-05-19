import { useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreateGroup from './pages/CreateGroup';
import GroupDetail from './pages/GroupDetail';
import PaymentPage from './pages/PaymentPage';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const isLoginPage = location.pathname === '/';

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-background flex text-text font-sans">
      {!isLoginPage && (
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      )}
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {!isLoginPage && (
          <Navbar toggleSidebar={toggleSidebar} />
        )}
        
        <main className={`flex-1 overflow-y-auto ${!isLoginPage ? 'p-4 lg:p-8' : ''}`}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-group" element={<CreateGroup />} />
            <Route path="/group/:id" element={<GroupDetail />} />
            <Route path="/group/:id/payment" element={<PaymentPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
