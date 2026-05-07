import React from 'react';
import { motion } from 'framer-motion';
import { 
  Printer, 
  ChevronDown, 
  Search, 
  CheckCircle2, 
  Info, 
  Award, 
  BookOpen, 
  Mail, 
  MoreHorizontal
} from 'lucide-react';
import { cn } from '../lib/utils';

const khsData = [
  { code: '40401511', name: 'Arsitektur dan Desain Perangkat Lunak', sks: 3, grade: 'A', weight: 4.00, total: 12.00 },
  { code: '40401704', name: 'Kerja Praktik', sks: 2, grade: 'A', weight: 4.00, total: 8.00 },
  { code: '40401502', name: 'Praktikum Pemrograman Lanjutan', sks: 1, grade: 'A', weight: 4.00, total: 4.00 },
  { code: '40401503', name: 'Sistem Tertanam', sks: 3, grade: 'A', weight: 4.00, total: 12.00 },
  { code: '40401506', name: 'Administrasi dan Desain Jaringan', sks: 3, grade: 'A', weight: 4.00, total: 12.00 },
  { code: '40401505', name: 'Pembelajar Mesin', sks: 3, grade: 'A', weight: 4.00, total: 12.00 },
  { code: '40401504', name: 'Manajemen Proyek Teknologi Informasi', sks: 2, grade: 'A', weight: 4.00, total: 8.00 },
  { code: '40401512', name: 'Analisis dan Visualisasi Data', sks: 3, grade: 'A', weight: 4.00, total: 12.00 },
  { code: '40401501', name: 'Pemrograman Lanjutan', sks: 3, grade: 'A', weight: 4.00, total: 12.00 },
];

export const KHS: React.FC = () => {
  return (
    <div className="space-y-4 pb-12">
      {/* Compact Header matching KRS */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-100 card-shadow text-brand-600">
             <Award size={20} />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-slate-800 tracking-tight">Hasil Studi (KHS)</h1>
            <p className="text-[12px] text-slate-500 font-medium">Semester Ganjil 2025</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
           <div className="relative">
              <select className="appearance-none pl-3 pr-8 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-bold outline-none card-shadow cursor-pointer min-w-[180px]">
                <option>20251 (2025 GANJIL)</option>
                <option>20242 (2024 GENAP)</option>
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
           </div>
           <button className="flex items-center gap-2 px-4 py-1.5 bg-brand-600 text-white rounded-lg text-xs font-bold hover:bg-brand-700 shadow-lg shadow-brand-600/10 active:scale-95 transition-all">
              <Printer size={14} />
              Cetak
           </button>
        </div>
      </div>

      {/* Unified Profile - Consistent with KRS */}
      <div className="bg-white rounded-xl border border-slate-100 p-4 card-shadow grid grid-cols-2 lg:grid-cols-4 gap-6">
          <CompactInfoBox label="Nama" value="MUHAMMAD FARHAN" sub="230401089" icon={Info} />
          <CompactInfoBox label="Dosen PA" value="Rahmad Firdaus, M.TI" sub="PA-TIF" icon={Mail} />
          <CompactInfoBox label="IP Semester" value="4.00" sub="Sangat Memuaskan" highlight />
          <CompactInfoBox label="Prodi" value="Teknik Informatika" sub="Semester 5" icon={BookOpen} />
      </div>

      {/* Table Content - Higher Density */}
      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden card-shadow">
        <div className="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <div className="w-1.5 h-3 bg-brand-500 rounded-full"></div>
              Detail Transkrip Nilai
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
            {/* Table Head - Strictly horizontal */}
            <div className="grid grid-cols-[60px_130px_1fr_80px_80px_80px_80px_80px] gap-2 px-5 py-2 bg-slate-50 border-b border-slate-100 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-left">
               <span>No</span>
               <span>Kode MK</span>
               <span>Nama Mata Kuliah</span>
               <span className="text-center">SKS</span>
               <span className="text-center">Nilai</span>
               <span className="text-center">Bobot</span>
               <span className="text-center">Mutu</span>
               <span className="text-right pr-4">Detail</span>
            </div>

            <div className="divide-y divide-slate-50">
               {khsData.map((row, idx) => (
                 <motion.div 
                   key={row.code}
                   className="group hover:bg-slate-50/50 transition-colors"
                 >
                    <div className="grid grid-cols-[60px_130px_1fr_80px_80px_80px_80px_80px] gap-2 px-5 py-2.5 items-center text-left">
                       <span className="text-[11px] font-bold text-slate-300">{(idx + 1).toString().padStart(2, '0')}</span>
                       <span className="text-[11px] font-bold text-slate-500 font-mono italic">{row.code}</span>
                       
                       <div className="min-w-0">
                          <span className="text-[13px] font-bold text-slate-800 group-hover:text-brand-600 transition-colors block leading-tight">
                            {row.name}
                          </span>
                       </div>

                       <div className="text-center text-[11px] font-bold text-slate-600">
                          {row.sks}
                       </div>

                       <div className="flex justify-center">
                          <span className="px-2 py-0.5 bg-brand-50 text-brand-600 rounded text-[11px] font-black border border-brand-100 shadow-sm leading-none">
                            {row.grade}
                          </span>
                       </div>

                       <div className="text-center text-[11px] font-bold text-slate-400">
                          {row.weight.toFixed(2)}
                       </div>

                       <div className="text-center text-[11px] font-extrabold text-slate-700">
                          {row.total.toFixed(2)}
                       </div>

                       <div className="flex justify-end pr-2">
                          <button className="p-1 text-slate-200 hover:text-brand-600 transition-all">
                            <MoreHorizontal size={16} />
                          </button>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>

        {/* Footer Summary - Highly Compact like KRS footer */}
        <div className="p-4 bg-white border-t border-slate-50 flex flex-col md:flex-row justify-between gap-6 items-start md:items-end">
           <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-12 w-full md:w-auto">
              <SummaryField label="Jumlah SKS" value="23 SKS" />
              <SummaryField label="Jml Nilai Mutu" value="92.00" />
              <SummaryField label="Indeks Prestasi" value="4.00" highlight />
              <SummaryField label="SKS Maksimal" value="24 SKS" />
              <SummaryField label="Status" value="AKTIF / LULUS" />
           </div>

           <div className="flex flex-col items-center md:items-end text-center md:text-right gap-3">
              <div className="">
                 <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic leading-none mb-2">Pekanbaru, Apr 2026</p>
                 <div className="border-r-2 border-brand-500 pr-3">
                    <p className="text-xs font-extrabold text-slate-800 leading-none">Yulia Fatma, M.Cs</p>
                    <p className="text-[9px] text-slate-500 font-bold tracking-widest mt-1">NIDN : 1018079001</p>
                 </div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[9px] font-black border border-emerald-100 uppercase tracking-tight">
                 <CheckCircle2 size={12} />
                 SIA DIGITAL SIGNATURE
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const CompactInfoBox = ({ label, value, sub, highlight }: any) => (
  <div className="flex flex-col">
    <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">{label}</span>
    <span className={cn("text-[13px] font-bold text-slate-800 leading-tight", highlight && "text-brand-600")}>{value}</span>
    {sub && <span className="text-[10px] text-slate-400 font-medium leading-none mt-0.5">{sub}</span>}
  </div>
);

const SummaryField = ({ label, value, highlight }: any) => (
  <div className="flex items-center gap-2 border-b border-slate-50 pb-1.5">
     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight w-24 shrink-0">{label}</span>
     <span className={cn("text-xs font-black text-slate-700", highlight && "text-brand-600")}>{value}</span>
  </div>
);
