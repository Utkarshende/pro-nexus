import DashboardLayout from './components/layout/DashboardLayout';

function App() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-slate-800">Welcome, Utkarsha</h1>
      <p className="text-slate-500 mt-2">Here is what's happening with your business today.</p>
      
      {/* We will add Stats Cards here next! */}
    </DashboardLayout>
  );
}

export default App;