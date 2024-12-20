"use client";
import { useState } from 'react';
import LoginForm from '@/components/Auth/loginForm';
import DashboardPage from './Dashboard/page';

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login success and update the state
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-left bg-white">
      {!isLoggedIn ? (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <DashboardPage/>
        
      )}
    </div>
  );
}
