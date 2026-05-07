import React from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Printer, 
  ChevronDown, 
  AlertCircle, 
  User, 
  MapPin, 
  CheckCircle2, 
  XCircle,
  FileText,
  Info,
  BookOpen,
  Mail,
  Search
} from 'lucide-react';
import { cn } from '../lib/utils';

const ujianData = [
  { code: '40401704', name: 'Kerja Praktik', sks: 2, room: 'Online Tif 01', lecturer: 'Tim dosen TIF', status: 'warning', note: 'Jumlah pertemuan kurang' },
  { code: '40401512', name: 'Analisis dan Visualisasi Data', sks: 3, room: 'MMT 08', lecturer: 'Reny Medikawati Taufiq, S.Kom., MT', status: 'ok', note: 'OK' },
  { code: '40401511', name: 'Arsitektur dan Desain Perangkat Lunak', sks: 3, room: 'RA 54', lecturer: 'Reny Medikawati Taufiq, S.Kom., MT', status: 'ok', note: 'OK' },
  { code: '40401505', name: 'Pembelajar Mesin', sks: 3, room: 'RM. 03', lecturer: 'Assoc. Prof. Regiolina Hayami, S.T., M.Kom', status: 'ok', note: 'OK' },
  { code: '40401506', name: 'Administrasi dan Desain Jaringan', sks: 3, room: 'RA 55', lecturer: 'Desti Mualfah, S.Kom., M.Kom', status: 'warning', note: 'Jumlah kehadiran anda kurang' },
  { code: '40401503', name: 'Sistem Tertanam', sks: 3, room: 'MMT 03', lecturer: 'Sunanto, S.Kom, M.Kom', status: 'warning', note: 'Jumlah kehadiran anda kurang' },
  { code: '40401504', name: 'Manajemen Proyek Teknologi Informasi', sks: 2, room: 'GTC 03', lecturer: 'Yoze Rizki, M.T', status: 'warning', note: 'Jumlah kehadiran anda kurang' },
  { code: '40401501', name: 'Pemrograman Lanjutan', sks: 3, room: 'GTC 03', lecturer: 'Yoze Rizki, M.T', status: 'ok', note: 'OK' },
  { code: '40401502', name: 'Praktikum Pemrograman Lanjutan', sks: 1, room: 'RA 49 LAB', lecturer: 'Yoze Rizki, M.T', status: 'ok', note: 'OK' },
];

export const Ujian: React.FC = () => {
  return (
    <div className="space-y-4 pb-12">
      {/* Compact Header matching KRS */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-100 card-shadow text-brand-600">
             <CreditCard size={20} />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-slate-800 tracking-tight">Kartu Ujian</h1>
            <p className="text-[12px] text-slate-500 font-medium">Semester Ganjil 2025</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
           <div className="relative border-r border-slate-200 pr-2 mr-1">
              <select className="appearance-none pl-3 pr-8 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-bold outline-none card-shadow cursor-pointer min-w-[180px]">
                <option>20251 (2025 GANJIL)</option>
              </select>
              <ChevronDown size={12} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
           </div>
           <button className="flex items-center gap-2 px-4 py-1.5 bg-brand-600 text-white rounded-lg text-xs font-bold hover:bg-brand-700 shadow-lg shadow-brand-600/10 active:scale-95 transition-all">
              <Printer size={14} />
              Cetak
           </button>
        </div>
      </div>

      {/* Profile Row Compact */}
      <div className="bg-white rounded-xl border border-slate-100 p-4 card-shadow grid grid-cols-2 lg:grid-cols-4 gap-6">
          <CompactInfoBox label="Mahasiswa" value="MUHAMMAD FARHAN" sub="230401089" icon={Info} />
          <CompactInfoBox label="Pembimbing" value="Rahmad Firdaus, M.TI" sub="TIF-PA" icon={Mail} />
          <CompactInfoBox label="Kehadiran" value="95%" sub="Status Layak" icon={FileText} />
          <CompactInfoBox label="Prodi" value="Teknik Informatika" sub="TIF-S1" icon={BookOpen} />
      </div>

      {/* Alert Block Compact */}
      <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-2 flex items-center gap-3">
         <AlertCircle size={14} className="text-amber-500 shrink-0" />
         <p className="text-[11px] text-amber-800 font-semibold leading-none">
            Kehadiran &lt; 75% wajib menghubungi dosen pendamping sebelum pelaksanaan ujian.
         </p>
      </div>

      {/* Exam Table Compact */}
      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden card-shadow">
        <div className="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <div className="w-1.5 h-3 bg-brand-500 rounded-full"></div>
              Mata Kuliah Ujian
            </h3>
            <div className="relative w-full sm:w-48">
              <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Cari..." 
                className="w-full pl-8 pr-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[11px] font-medium outline-none focus:border-brand-500"
              />
            </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[850px]">
            {/* Table Head */}
            <div className="grid grid-cols-[120px_1fr_60px_120px_200px_180px] gap-2 px-5 py-2 bg-slate-50 border-b border-slate-100 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-left">
               <span>Kode MK</span>
               <span>Mata Kuliah</span>
               <span className="text-center">SKS</span>
               <span>Ruangan</span>
               <span>Dosen</span>
               <span className="text-right pr-4">Status</span>
            </div>

            <div className="divide-y divide-slate-50">
               {ujianData.map((row, idx) => (
                 <motion.div 
                   key={row.code}
                   className="group hover:bg-slate-50/50 transition-colors"
                 >
                    <div className="grid grid-cols-[120px_1fr_60px_120px_200px_180px] gap-2 px-5 py-2.5 items-center text-left">
                       <span className="text-[11px] font-bold text-brand-600 font-mono tracking-tight bg-brand-50 py-0.5 px-2 rounded-md inline-block w-fit">
                         {row.code}
                       </span>
                       
                       <div className="min-w-0">
                          <span className="text-[13px] font-bold text-slate-800 group-hover:text-brand-600 transition-colors block leading-tight">
                            {row.name}
                          </span>
                       </div>

                       <div className="text-center text-[11px] font-bold text-slate-600">
                          {row.sks}
                       </div>

                       <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                          <MapPin size={12} className="text-brand-400 shrink-0" />
                          <span className="truncate">{row.room}</span>
                       </div>

                       <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700">
                          <User size={12} className="text-slate-300 shrink-0" />
                          <span className="truncate">{row.lecturer}</span>
                       </div>

                       <div className="flex justify-end pr-2">
                          <div className={cn(
                            "px-2 py-1 rounded-lg text-[9px] font-black flex items-center gap-1.5 border uppercase tracking-tight",
                            row.status === 'ok' 
                              ? "bg-emerald-50 text-emerald-600 border-emerald-100" 
                              : "bg-red-50 text-red-600 border-red-100"
                          )}>
                             {row.status === 'ok' ? <CheckCircle2 size={10} /> : <XCircle size={10} />}
                             {row.note}
                          </div>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>

        {/* Status Footer Compact */}
        <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-emerald-500 card-shadow">
                 <CheckCircle2 size={18} />
              </div>
              <div>
                 <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">Keuangan</p>
                 <p className="text-sm font-black text-emerald-600 leading-none mt-1">LUNAS / AKTIF</p>
              </div>
           </div>
           <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">SIA VERIFIED 2026</p>
        </div>
      </div>
    </div>
  );
};

const CompactInfoBox = ({ label, value, sub }: any) => (
  <div className="flex flex-col">
    <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">{label}</span>
    <span className="text-[13px] font-bold text-slate-800 leading-tight">{value}</span>
    {sub && <span className="text-[10px] text-slate-400 font-medium leading-none mt-0.5">{sub}</span>}
  </div>
);
