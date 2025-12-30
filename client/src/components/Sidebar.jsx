import React from 'react';
import { LayoutDashboard, Briefcase, Users, FileText, Settings } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Overview' },
    { icon: <Briefcase size={20} />, label: 'Projects' },
    { icon: <Users size={20} />, label: 'Clients' },
    { icon: <FileText size={20} />, label: 'Invoices' },
    { icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-slate-900 h-screen fixed left-0 top-0 text-white p-6 shadow-xl">
      <div className="mb-10 flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
        <span className="text-xl font-bold tracking-tight">PRO-NEXUS</span>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 p-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white cursor-pointer transition-all"
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;