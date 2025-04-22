import React from 'react';
import { useAuth } from '../components/AuthProvider';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="mb-4 text-2xl">Dashboard</h2>
      <div>Welcome, {user?.email}!</div>
    </div>
  );
};

export default Dashboard;
