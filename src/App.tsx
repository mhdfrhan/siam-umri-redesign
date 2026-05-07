import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './components/DashboardLayout';
import { StudentProfileCard } from './components/StudentProfileCard';
import { IPKChart } from './components/IPKChart';
import { BookOpen, Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';
import { Transkrip } from './pages/Transkrip';
import { KRS } from './pages/KRS';
import { KHS } from './pages/KHS';
import { Ujian } from './pages/Ujian';
import { Jadwal } from './pages/Jadwal';
import { Pembayaran } from './pages/Pembayaran';
import { Surat } from './pages/Surat';
import { cn } from './lib/utils';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Top Section: Profile and Quick Access */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <StudentProfileCard />
        </div>
        <div>
          <IPKChart />
        </div>
      </div>

      {/* Main Grid: Schedule and Announcements */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Schedule Section */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 p-6 card-shadow">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-brand-50 text-brand-600 rounded-lg">
                <Calendar size={20} />
              </div>
              <h2 className="text-lg font-bold text-slate-800 tracking-tight">Jadwal Kuliah Hari Ini</h2>
            </div>
            <button className="text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors">Lihat Semua</button>
          </div>

          <div className="space-y-4">
            <ScheduleItem 
              time="08:00 - 10:30" 
              subject="Pemrograman Lanjut" 
              room="Lab Komputer 3" 
              active
            />
            <ScheduleItem 
              time="13:00 - 15:30" 
              subject="Basis Data Terdistribusi" 
              room="Ruang 4.02" 
            />
          </div>
        </div>

        {/* Announcements / Quick Actions */}
        <div className="bg-brand-900 rounded-2xl p-6 shadow-xl shadow-brand-900/20 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-white/10 transition-all"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/10 rounded-lg">
                <BookOpen size={20} className="text-emerald-300" />
              </div>
              <h2 className="text-lg font-bold tracking-tight">Pintasan Cepat</h2>
            </div>
            
            <div className="space-y-3">
              <QuickAction label="Isi KRS Online" active />
              <QuickAction label="Unduh Transkrip" />
              <QuickAction label="Pembayaran UKT" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScheduleItem = ({ time, subject, room, active }: any) => (
  <div className={cn(
    "p-4 rounded-xl border transition-all hover:scale-[1.01] cursor-pointer",
    active ? "bg-brand-50 border-brand-100 shadow-sm" : "bg-white border-slate-100 hover:border-brand-100"
  )}>
    <div className="flex justify-between items-start mb-2">
      <h3 className="font-bold text-slate-800 text-[15px] tracking-tight">{subject}</h3>
      <span className={cn(
        "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider",
        active ? "bg-brand-500 text-white" : "bg-slate-100 text-slate-500"
      )}>
        {active ? 'Sedang Berlangsung' : 'Mendatang'}
      </span>
    </div>
    <div className="flex flex-wrap gap-4 text-[13px] text-slate-500 font-medium">
      <div className="flex items-center gap-1.5">
        <Clock size={14} className="text-brand-500" />
        {time}
      </div>
      <div className="flex items-center gap-1.5">
        <MapPin size={14} className="text-brand-500" />
        {room}
      </div>
    </div>
  </div>
);

const QuickAction = ({ label, active }: any) => (
  <button className={cn(
    "w-full flex items-center justify-between p-3.5 rounded-xl transition-all",
    active ? "bg-emerald-500 shadow-lg shadow-emerald-500/30 text-white" : "bg-white/5 border border-white/10 hover:bg-white/10 text-emerald-100"
  )}>
    <span className="text-[14px] font-bold tracking-tight">{label}</span>
    <ChevronRight size={16} />
  </button>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transkrip" element={<Transkrip />} />
          <Route path="/krs" element={<KRS />} />
          <Route path="/khs" element={<KHS />} />
          <Route path="/ujian" element={<Ujian />} />
          <Route path="/jadwal" element={<Jadwal />} />
          <Route path="/pembayaran" element={<Pembayaran />} />
          <Route path="/surat" element={<Surat />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
