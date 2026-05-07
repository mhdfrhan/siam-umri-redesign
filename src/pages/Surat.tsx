import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FilePlus, 
  Search, 
  Calendar, 
  Building, 
  User, 
  Clock, 
  FileText,
  X,
  Plus,
  Send,
  MoreVertical,
  History,
  Info
} from 'lucide-react';
import { cn } from '../lib/utils';

const initialSuratData = [
  { id: 1, ta: '20251', date: '20-04-2026', number: '124/FT-UMRI/IVA/2026', place: 'PT. Telkom Indonesia', detail: 'Surat Izin Magang Industri', status: 'Selesai' },
  { id: 2, ta: '20251', date: '15-04-2026', number: '098/FT-UMRI/IVA/2026', place: 'Dinas Komunikasi & Informatika', detail: 'Surat Izin Magang', status: 'Proses' },
  { id: 3, ta: '20242', date: '10-01-2026', number: '045/FT-UMRI/IA/2026', place: 'UPT Komputer UMRI', detail: 'Surat Izin Observasi', status: 'Selesai' },
];

export const Surat: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [suratData] = useState(initialSuratData);

  return (
    <div className="space-y-4 pb-12">
      {/* Compact Header matching KRS style */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-100 card-shadow text-brand-600">
             <FileText size={20} />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-slate-800 tracking-tight">Surat Izin Magang</h1>
            <p className="text-[12px] text-slate-500 font-medium">Pengajuan & Administrasi Surat Mahasiswa</p>
          </div>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2 bg-brand-600 text-white rounded-xl text-xs font-bold hover:bg-brand-700 shadow-lg shadow-brand-600/20 active:scale-95 transition-all"
        >
           <Plus size={16} />
           Tambah Surat
        </button>
      </div>

      {/* Main Table Content - Compact Pro Style */}
      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden card-shadow">
        <div className="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <div className="w-1.5 h-3 bg-brand-500 rounded-full"></div>
              Riwayat Pengajuan Surat
            </h3>
            <div className="relative w-full sm:w-48">
              <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Cari surat..." 
                className="w-full pl-8 pr-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[11px] font-medium outline-none focus:border-brand-500"
              />
            </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[950px]">
            {/* Table Head */}
            <div className="grid grid-cols-[130px_130px_200px_1fr_120px_100px] gap-4 px-6 py-2.5 bg-slate-50 border-b border-slate-100 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-left">
               <span>Tahun Semester</span>
               <span>Waktu Catat</span>
               <span>Nomor Surat</span>
               <span>Tujuan / Tempat</span>
               <span>Status</span>
               <span className="text-right">Aksi</span>
            </div>

            <div className="divide-y divide-slate-50">
               {suratData.map((surat, idx) => (
                 <motion.div 
                   key={surat.id}
                   initial={{ opacity: 0, y: 5 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.05 }}
                   className="group hover:bg-slate-50/50 transition-colors"
                 >
                    <div className="grid grid-cols-[130px_130px_200px_1fr_120px_100px] gap-4 px-6 py-3 items-center text-left">
                       <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md inline-block w-fit">
                         {surat.ta}
                       </span>
                       
                       <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-600">
                          <Clock size={12} className="text-brand-400" />
                          {surat.date}
                       </div>

                       <div className="text-[11px] font-mono font-bold text-slate-400 italic">
                          {surat.number || 'Menunggu Verifikasi...'}
                       </div>

                       <div className="flex flex-col min-w-0">
                          <span className="text-[13px] font-bold text-slate-800 leading-tight truncate">{surat.place}</span>
                          <span className="text-[10px] text-slate-400 font-medium">{surat.detail}</span>
                       </div>

                       <div className="flex">
                          <span className={cn(
                            "px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-tight border",
                            surat.status === 'Selesai' 
                              ? "bg-emerald-50 text-emerald-600 border-emerald-100" 
                              : "bg-blue-50 text-blue-600 border-blue-100"
                          )}>
                             {surat.status}
                          </span>
                       </div>

                       <div className="flex justify-end pr-2">
                          <button className="p-1 text-slate-300 hover:text-brand-600 transition-all">
                            <MoreVertical size={16} />
                          </button>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-50/50 border-t border-slate-50 flex items-center justify-between">
           <p className="text-[9px] font-semibold text-slate-400 italic">Klik ikon titik tiga untuk melihat histori verifikasi surat.</p>
           <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-lg border border-slate-100 card-shadow text-[9px] font-bold text-slate-500">
              <History size={12} className="text-brand-400" />
              TOTAL: {suratData.length} PENGAJUAN
           </div>
        </div>
      </div>

      {/* Modal - Smooth Transition */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with Blur */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setIsModalOpen(false)}
               className="fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] cursor-pointer"
            />
            
            {/* Modal Content */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.95, y: 20 }}
               className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10"
            >
               {/* Modal Header */}
               <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center">
                        <FilePlus size={18} />
                     </div>
                     <h2 className="text-base font-extrabold text-slate-800 tracking-tight">Formulir Pengajuan Surat</h2>
                  </div>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"
                  >
                     <X size={18} />
                  </button>
               </div>

               {/* Modal Body */}
               <div className="p-6 space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                     <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                           <Building size={12} />
                           Tempat Penelitian / Magang <span className="text-red-500">*</span>
                        </label>
                        <input 
                           type="text" 
                           placeholder="Contoh: PT. Telkom Indonesia Tbk"
                           className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 outline-none focus:border-brand-500 transition-all"
                        />
                     </div>

                     <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                           <User size={12} />
                           Penerima Surat <span className="text-red-500">*</span>
                        </label>
                        <input 
                           type="text" 
                           placeholder="Contoh: Kepala HRD / Direktur Utama"
                           className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 outline-none focus:border-brand-500 transition-all"
                        />
                     </div>

                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                              <Calendar size={12} />
                              Tanggal Mulai <span className="text-red-500">*</span>
                           </label>
                           <input 
                              type="date" 
                              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:border-brand-500 transition-all"
                           />
                        </div>
                        <div className="space-y-1.5">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                              <Calendar size={12} />
                              Tanggal Berakhir <span className="text-red-500">*</span>
                           </label>
                           <input 
                              type="date" 
                              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:border-brand-500 transition-all"
                           />
                        </div>
                     </div>
                  </div>

                  <div className="bg-brand-50 p-3 rounded-xl flex items-start gap-3 border border-brand-100">
                     <Info size={14} className="text-brand-600 mt-0.5" />
                     <p className="text-[10px] text-brand-800 font-medium leading-relaxed">
                        Pastikan data tujuan surat sudah benar. Surat yang sudah disetujui tidak dapat dibatalkan melalui sistem online.
                     </p>
                  </div>
               </div>

               {/* Modal Footer */}
               <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3">
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2 text-xs font-bold text-slate-500 hover:text-slate-700 transition-colors"
                  >
                     Tutup
                  </button>
                  <button 
                    className="px-6 py-2 bg-brand-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-brand-600/20 hover:bg-brand-700 active:scale-95 transition-all flex items-center gap-2"
                  >
                     <Send size={14} />
                     Simpan & Ajukan
                  </button>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
