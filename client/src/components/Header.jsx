import React from 'react'

function Header() {
  return (
    <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl border border-slate-200">
      <div>
        <h2 className="text-xl font-bold text-slate-800">Workspace Dashboard</h2>
        <p className="text-sm text-slate-500">Welcome back to your command center.</p>
      </div>
      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
          + New Project
        </button>
      </div>
    </div>
  )
}

export default Header