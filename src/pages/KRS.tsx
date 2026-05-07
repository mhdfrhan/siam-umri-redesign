import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardList, 
  MessageSquare, 
  Printer, 
  Info, 
  ExternalLink, 
  CheckCircle2, 
  MapPin, 
  User, 
  Clock,
  ChevronDown,
  CalendarDays
} from 'lucide-react';
import { cn } from '../lib/utils';

const krsData = [
  { 
    day: 'Minggu', 
    courses: [
      { code: 'UMRI409', name: 'KKN', class: 'Reg A', sks: 2, room: 'Online Tif 01', time: '14:41 - 16:21', lecturer: 'Tim dosen TIF', status: 'Approved' }
    ]
  },
  { 
    day: 'Senin', 
    courses: [
      { code: '40401404', name: 'Rekayasa Perangkat Lunak', class: '4A5', sks: 3, room: 'MMT 210', time: '07:00 - 09:30', lecturer: 'Reny Medikawati Taufiq, S.Kom., MT', status: 'Approved' },
      { code: '40401608', name: 'Penjaminan Kualitas Perangkat Lunak', class: 'PAT 6A2', sks: 3, room: 'MMT 211', time: '13:00 - 15:30', lecturer: 'Fitri Handayani, S.T., M.Kom', status: 'Approved' },
      { code: '40401602', name: 'Pemrograman Mobile', class: '6A5', sks: 3, room: 'RB 24', time: '15:31 - 18:01', lecturer: 'Bayu Anugerah Putra, S.Kom., M.Cs', status: 'Approved' }
    ]
  },
  { 
    day: 'Rabu', 
    courses: [
      { code: '40401204', name: 'Arsitektur Komputer', class: '6A2', sks: 3, room: 'MMT 311', time: '15:31 - 18:01', lecturer: 'Desti Mualfah, S.Kom., M.Kom', status: 'Approved' }
    ]
  },
  { 
    day: 'Kamis', 
    courses: [
      { code: '40401403', name: 'Kecerdasan Artifisial', class: '6A7', sks: 3, room: 'GR. 504', time: '09:31 - 12:01', lecturer: 'Assoc. Prof. Regiolina Hayami, S.T., M.Kom', status: 'Approved' },
      { code: '40401601', name: 'Teknologi Grafik dan Multimedia', class: '6A9', sks: 3, room: 'GR. 504', time: '13:01 - 15:31', lecturer: 'Fauzan Azim, S.Kom., M.Kom', status: 'Approved' },
      { code: '40401405', name: 'Aljabar Linear dan Metode Numerik', class: '4A5', sks: 3, room: 'GTC 31', time: '15:31 - 18:01', lecturer: "Hasanatul Fu'adah Amran, S.Pd., M.Pd", status: 'Approved' }
    ]
  }
];

export const KRS: React.FC = () => {
  return (
    <div className="space-y-4 pb-12">
      {/* Header Section Compact */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-100 card-shadow text-brand-600">
             <CalendarDays size={20} />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-slate-800 tracking-tight">KRS Mahasiswa</h1>
            <p className="text-[12px] text-slate-500 font-medium">Semester Genap 2025</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <select className="appearance-none pl-3 pr-8 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-bold outline-none focus:border-brand-500/50 transition-all card-shadow cursor-pointer min-w-[180px]">
              <option>6. 20252 (2025 GENAP)</option>
              <option>5. 20251 (2025 GANJIL)</option>
            </select>
            <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
             <button className="px-3 py-1.5 bg-white text-slate-700 rounded-lg text-xs font-bold shadow-sm hover:text-brand-600 transition-all active:scale-95">Pilih MK</button>
             <button className="px-3 py-1.5 bg-emerald-500 text-white rounded-lg text-xs font-bold hover:bg-emerald-600 transition-all shadow-sm active:scale-95 flex items-center gap-1.5">
                <MessageSquare size={12} />
                Chat PA
             </button>
             <button className="px-3 py-1.5 bg-white text-slate-700 border border-slate-200 rounded-lg text-xs font-bold hover:bg-slate-50 transition-all shadow-sm active:scale-95 flex items-center gap-1.5">
                <Printer size={12} />
                Cetak
             </button>
          </div>
        </div>
      </div>

      {/* MBKM Alert Compact */}
      <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-2 flex items-center justify-between group">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-emerald-100 text-emerald-600 rounded-md">
            <Info size={14} />
          </div>
          <p className="text-[11px] font-semibold text-emerald-800">
            MBKM Registration: <span className="text-emerald-600 font-bold underline cursor-pointer">diary-mbkm.umri.ac.id</span>
          </p>
        </div>
        <ExternalLink size={12} className="text-emerald-400" />
      </div>

      {/* Student Profile & Total SKS Unified */}
      <div className="bg-white rounded-xl border border-slate-100 p-4 card-shadow flex flex-wrap lg:flex-nowrap items-center gap-6">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 flex-1">
             <CompactInfoBox label="Mahasiswa" value="MUHAMMAD FARHAN" sub="230401089" />
             <CompactInfoBox label="Dosen PA" value="Rahmad Firdaus, M.TI" sub="PA-04.01" />
             <CompactInfoBox label="Prodi" value="Teknik Informatika" sub="Semester 6" />
          </div>
          <div className="h-12 w-px bg-slate-100 hidden lg:block"></div>
          <div className="flex items-center gap-4 bg-brand-50 pr-4 pl-1 py-1 rounded-2xl min-w-[160px]">
             <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-brand-600/30">
                23
             </div>
             <div>
                <p className="text-[10px] font-semibold uppercase text-brand-400 leading-none mb-1">Total SKS</p>
                <p className="text-sm font-extrabold text-brand-900 leading-none">23 <span className="text-[10px] opacity-40">/ 24</span></p>
             </div>
          </div>
      </div>

      {/* Schedule Pseudo-Table Highly Compact */}
      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden card-shadow">
        <div className="hidden lg:grid grid-cols-[80px_100px_1fr_60px_110px_180px_100px] gap-2 px-5 py-2.5 bg-slate-50 border-b border-slate-100">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Hari</span>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Waktu</span>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Mata Kuliah</span>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center">SKS</span>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Ruang</span>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Dosen</span>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-right">Status</span>
        </div>

        <div className="divide-y divide-slate-50">
          {krsData.map((dayGroup, groupIdx) => (
            <React.Fragment key={dayGroup.day}>
              {dayGroup.courses.map((course, idx) => (
                <motion.div 
                  key={course.code}
                  whileHover={{ backgroundColor: '#f8fafc' }}
                  className="group transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[80px_100px_1fr_60px_110px_180px_100px] gap-2 px-5 py-2.5 items-center">
                    {/* Hari Column */}
                    <div className="lg:block hidden">
                      {idx === 0 && (
                        <span className="text-[10px] font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md uppercase">
                          {dayGroup.day}
                        </span>
                      )}
                    </div>

                    {/* Waktu */}
                    <div className="flex items-center gap-1.5 text-slate-500 font-medium text-[11px] lg:text-[12px]">
                      <Clock size={12} className="text-brand-400 shrink-0" />
                      {course.time}
                    </div>

                    {/* Mata Kuliah */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] font-bold text-slate-400 font-mono tracking-tight">{course.code}</span>
                        <span className="text-[9px] font-bold text-brand-600 bg-emerald-50 px-1 rounded uppercase">{course.class}</span>
                      </div>
                      <span className="text-[13px] font-bold text-slate-700 group-hover:text-brand-600 transition-colors truncate">
                        {course.name}
                      </span>
                    </div>

                    {/* SKS */}
                    <div className="lg:text-center text-[11px] lg:text-[12px] font-bold text-slate-600">
                      <span className="lg:hidden text-slate-400 font-medium mr-1">SKS:</span>
                      {course.sks}
                    </div>

                    {/* Ruang */}
                    <div className="flex items-center gap-1.5 text-slate-500 text-[11px] lg:text-[12px] font-medium overflow-hidden">
                      <MapPin size={12} className="text-brand-400 shrink-0" />
                      <span className="truncate">{course.room}</span>
                    </div>

                    {/* Dosen */}
                    <div className="flex items-center gap-1.5 text-slate-600 text-[11px] lg:text-[12px] font-semibold overflow-hidden">
                      <User size={12} className="text-slate-400 shrink-0" />
                      <span className="truncate leading-tight">{course.lecturer}</span>
                    </div>

                    {/* Status */}
                    <div className="flex justify-end items-center gap-1 text-[10px] font-bold text-green-600">
                      <CheckCircle2 size={10} />
                      <span className="lg:block hidden">Setuju</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </React.Fragment>
          ))}
        </div>

        <div className="px-5 py-3 bg-slate-50/50 border-t border-slate-50 flex items-center justify-between">
            <p className="text-[9px] font-semibold text-slate-400 italic">Hubungi PA jika jadwal bentrok.</p>
            <button className="px-6 py-2 bg-brand-900 text-white rounded-xl text-xs font-bold shadow-lg shadow-brand-900/10 hover:translate-y-[-1px] active:translate-y-[0px] transition-all">
               Simpan KRS
            </button>
        </div>
      </div>
    </div>
  );
};

const CompactInfoBox = ({ label, value, sub }: { label: string; value: string; sub?: string }) => (
  <div className="flex flex-col">
    <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">{label}</span>
    <span className="text-[12px] font-bold text-slate-700 leading-tight">{value}</span>
    {sub && <span className="text-[10px] text-slate-400 font-medium leading-none">{sub}</span>}
  </div>
);
