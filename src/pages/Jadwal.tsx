import React from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarDays, 
  ChevronDown, 
  Search, 
  Printer, 
  MapPin, 
  User, 
  Clock, 
  Layers,
  BookOpen,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { cn } from '../lib/utils';

const jadwalData = [
  { no: 1, day: 'Minggu', time: '14:41 - 16:21', code: 'UMRI409', smt: 6, name: 'KKN', sks: 2, lecturer: 'Tim dosen TIF', class: 'Reg A', room: 'Ruang Online Tif 01' },
  { no: 2, day: 'Senin', time: '07:00 - 09:30', code: '40401404', smt: 4, name: 'Rekayasa Perangkat Lunak', sks: 3, lecturer: 'Reny Medikawati Taufiq, S.Kom., MT', class: '4A5', room: 'MMT 210' },
  { no: 3, day: 'Senin', time: '13:00 - 15:30', code: '40401608', smt: 6, name: 'Penjaminan Kualitas Perangkat Lunak', sks: 3, lecturer: 'Fitri Handayani, S.T., M.Kom', class: 'PAT 6A2', room: 'MMT 211' },
  { no: 4, day: 'Senin', time: '15:31 - 18:01', code: '40401602', smt: 6, name: 'Pemrograman Mobile', sks: 3, lecturer: 'Bayu Anugerah Putra, S.Kom., M.Cs', class: '6A5', room: 'RB 24' },
  { no: 5, day: 'Rabu', time: '15:31 - 18:01', code: '40401204', smt: 2, name: 'Arsitektur Komputer', sks: 3, lecturer: 'Desti Mualfah, S.Kom., M.Kom', class: '6A2', room: 'MMT 311' },
  { no: 6, day: 'Kamis', time: '09:31 - 12:01', code: '40401403', smt: 4, name: 'Kecerdasan Artifisial', sks: 3, lecturer: 'Assoc. Prof. Regiolina Hayami, S.T., M.Kom', class: '6A7', room: 'GR. 504' },
  { no: 7, day: 'Kamis', time: '13:00 - 15:30', code: '40401601', smt: 6, name: 'Teknologi Grafik dan Multimedia', sks: 3, lecturer: 'Fauzan Azim, S.Kom., M.Kom', class: '6A9', room: 'GR. 504' },
  { no: 8, day: 'Kamis', time: '15:31 - 18:01', code: '40401405', smt: 4, name: 'Aljabar Linear dan Metode Numerik', sks: 3, lecturer: "Hasanatul Fu'adah Amran, S.Pd., M.Pd", class: '4A5', room: 'GTC 31' },
];

const dayColors: any = {
  'Minggu': 'bg-pink-50 text-pink-600 border-pink-100',
  'Senin': 'bg-blue-50 text-blue-600 border-blue-100',
  'Selasa': 'bg-emerald-50 text-emerald-600 border-emerald-100',
  'Rabu': 'bg-amber-50 text-amber-600 border-amber-100',
  'Kamis': 'bg-violet-50 text-violet-600 border-violet-100',
  'Jumat': 'bg-rose-50 text-rose-600 border-rose-100',
  'Sabtu': 'bg-slate-50 text-slate-600 border-slate-100',
};

export const Jadwal: React.FC = () => {
  return (
    <div className="space-y-4 pb-12">
      {/* Compact Header matching KRS */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-100 card-shadow text-brand-600">
             <CalendarDays size={20} />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-slate-800 tracking-tight">Jadwal Kuliah</h1>
            <p className="text-[12px] text-slate-500 font-medium">Genap 2025 • Aktif</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
           <div className="relative">
              <select className="appearance-none pl-3 pr-8 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-bold outline-none card-shadow cursor-pointer min-w-[180px]">
                <option>2025 GENAP</option>
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
           </div>
           <button className="flex items-center gap-2 px-4 py-1.5 bg-white text-slate-700 border border-slate-200 rounded-lg text-xs font-bold hover:bg-slate-50 card-shadow active:scale-95 transition-all">
              <Printer size={14} />
              Cetak
           </button>
        </div>
      </div>

      {/* Summary Row Compact */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
         <CompactSummaryCard label="Total MK" value="8 Mata Kuliah" icon={BookOpen} />
         <CompactSummaryCard label="Beban SKS" value="23 SKS" icon={Layers} />
         <CompactSummaryCard label="Dosen PA" value="Rahmad Firdaus" icon={User} />
      </div>

      {/* Schedule Table Compact */}
      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden card-shadow">
        <div className="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <div className="w-1.5 h-3 bg-brand-500 rounded-full"></div>
              Jadwal Mingguan
            </h3>
            <div className="flex items-center gap-2">
               <div className="relative w-full sm:w-48">
                <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Cari..." 
                  className="w-full pl-8 pr-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[11px] font-medium outline-none focus:border-brand-500"
                />
               </div>
               <button className="p-1.5 text-slate-300 hover:text-brand-600 transition-colors">
                  <Filter size={16} />
               </button>
            </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[1050px]">
            {/* Table Head */}
            <div className="grid grid-cols-[50px_90px_130px_100px_1fr_60px_200px_90px_150px] gap-2 px-5 py-2 bg-slate-50 border-b border-slate-100 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-left">
               <span>No</span>
               <span>Hari</span>
               <span>Jam</span>
               <span>Kode (Smt)</span>
               <span>Mata Kuliah</span>
               <span className="text-center">SKS</span>
               <span>Dosen Pengampu</span>
               <span>Kelas</span>
               <span className="text-right pr-4">Ruangan</span>
            </div>

            <div className="divide-y divide-slate-50">
               {jadwalData.map((row, idx) => (
                 <motion.div 
                   key={idx}
                   className="group hover:bg-slate-50/50 transition-colors"
                 >
                    <div className="grid grid-cols-[50px_90px_130px_100px_1fr_60px_200px_90px_150px] gap-2 px-5 py-2.5 items-center text-left">
                       <span className="text-[11px] font-bold text-slate-300">{(idx + 1).toString().padStart(2, '0')}</span>
                       
                       <div className="flex">
                          <span className={cn(
                            "px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-tight border",
                            dayColors[row.day] || "bg-slate-50 text-slate-600 border-slate-100"
                          )}>
                             {row.day}
                          </span>
                       </div>

                       <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-600">
                          <Clock size={12} className="text-brand-400 shrink-0" />
                          <span className="tabular-nums tracking-tighter">{row.time}</span>
                       </div>

                       <div className="flex items-center gap-1">
                          <span className="text-[10px] font-bold text-slate-500 font-mono tracking-tighter">{row.code}</span>
                          <span className="text-[9px] font-black text-brand-400 bg-brand-50 w-3.5 h-3.5 flex items-center justify-center rounded-sm leading-none">{row.smt}</span>
                       </div>

                       <div className="min-w-0">
                          <span className="text-[13px] font-bold text-slate-800 group-hover:text-brand-600 transition-colors block leading-tight">
                            {row.name}
                          </span>
                       </div>

                       <div className="text-center text-[11px] font-bold text-slate-600">
                          {row.sks}
                       </div>

                       <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 overflow-hidden">
                          <User size={12} className="text-slate-300 shrink-0" />
                          <span className="truncate leading-tight">{row.lecturer}</span>
                       </div>

                       <div className="text-[11px] font-bold text-slate-500">
                          <span className="px-1.5 py-0.5 border border-slate-100 bg-white rounded uppercase tracking-tighter text-[9px]">{row.class}</span>
                       </div>

                       <div className="flex justify-end pr-2 text-right">
                          <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                            <MapPin size={10} className="text-brand-400 shrink-0" />
                            <span className="truncate max-w-[110px]">{row.room}</span>
                          </div>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>

        {/* Footer info blocks Compact */}
        <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
           <p className="text-[9px] font-bold text-slate-400 italic">Jadwal dapat berubah sewaktu-waktu.</p>
           <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-lg border border-slate-100 card-shadow text-[9px] font-black text-emerald-600">
              <CheckCircle2 size={12} />
              JADWAL TERVERIFIKASI
           </div>
        </div>
      </div>
    </div>
  );
};

const CompactSummaryCard = ({ label, value, icon: Icon }: any) => (
  <div className="bg-white p-3 rounded-xl border border-slate-100 card-shadow flex items-center gap-3 transition-all hover:scale-[1.01]">
     <div className="w-8 h-8 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center shrink-0">
        <Icon size={16} />
     </div>
     <div>
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{label}</p>
        <p className="text-xs font-black text-slate-800 leading-none">{value}</p>
     </div>
  </div>
);
