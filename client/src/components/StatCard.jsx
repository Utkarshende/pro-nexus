import React from 'react';

const StatCard = ({ title, value, icon, trend, trendColor }) => {
  return (
    // This single <div> is the "One Parent" React is looking for
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
          {icon}
        </div>
        <span className={`text-xs font-bold px-2 py-1 rounded-full ${trendColor}`}>
          {trend}
        </span>
      </div>
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <h3 className="text-2xl font-bold text-slate-800 mt-1">{value}</h3>
      </div>
    </div>
  );
};

export default StatCard;