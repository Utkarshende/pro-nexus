import React from 'react';
import Sidebar from '../Sidebar'; // We will create this next

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8">
        {/* Top Header / Search Bar can go here later */}
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;