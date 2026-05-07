import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Printer, 
  ArrowRightLeft, 
  Search, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { cn } from '../lib/utils';

const transcriptData = [
  { no: 1, code: '0401101', name: 'Praktikum Pengantar Teknologi Informasi', sks: 1, grade: 'A', weight: 4.00, total: 4 },
  { no: 2, code: '0401102', name: 'Pengantar Teknologi Informasi', sks: 3, grade: 'A-', weight: 3.75, total: 11.25 },
  { no: 3, code: '0401103', name: 'Matematika Terapan', sks: 3, grade: 'B+', weight: 3.50, total: 10.5 },
  { no: 4, code: '0401104', name: 'Algoritma Dan Pemrograman', sks: 3, grade: 'A-', weight: 3.75, total: 11.25 },
  { no: 5, code: '0401105', name: 'Praktikum Algoritma Dan Pemrograman', sks: 1, grade: 'A', weight: 4.00, total: 4 },
  { no: 6, code: '0401106', name: 'Hukum Siber', sks: 3, grade: 'B+', weight: 3.50, total: 10.5 },
  { no: 7, code: '0401201', name: 'Basis Data', sks: 3, grade: 'A-', weight: 3.75, total: 11.25 },
  { no: 8, code: '0401202', name: 'Manajemen Sistem Informasi', sks: 3, grade: 'A', weight: 4.00, total: 12 },
  { no: 9, code: '0401203', name: 'Matematika Diskrit', sks: 3, grade: 'A-', weight: 3.75, total: 11.25 },
  { no: 10, code: '0401204', name: 'Komunikasi Data', sks: 3, grade: 'A', weight: 4.00, total: 12 },
  { no: 11, code: '0401205', name: 'Sistem Operasi', sks: 3, grade: 'A', weight: 4.00, total: 12 },
  { no: 12, code: '0401206', name: 'Praktikum Sistem Operasi', sks: 1, grade: 'A', weight: 4.00, total: 4 },
];

export const Transkrip: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Transkrip Nilai</h1>
          <p className="text-sm text-slate-500 font-medium mt-1">Daftar rekapitulasi nilai mahasiswa selama masa studi.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all card-shadow">
            <Printer size={16} />
            Cetak Transkrip
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-xl text-sm font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20">
            <ArrowRightLeft size={16} />
            Transkrip Konversi
          </button>
        </div>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <SummaryCard label="Total SKS" value="105" icon={CheckCircle2} color="emerald" />
        <SummaryCard label="SKS Lulus" value="105" icon={CheckCircle2} color="emerald" />
        <SummaryCard label="Jumlah Nilai Mutu" value="410.5" icon={FileText} color="amber" />
        <SummaryCard label="IPK (Kumulatif)" value="3.91" icon={AlertCircle} color="brand" isMain />
      </div>

      {/* Student Details Section */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 card-shadow flex flex-wrap gap-8 items-start">
        <div className="flex-1 min-w-[200px] border-r border-slate-50 pr-8">
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-3">Informasi Mahasiswa</p>
          <div className="space-y-3">
            <div className="flex justify-between items-center group">
              <span className="text-xs text-slate-500 font-medium">Nama Lengkap</span>
              <span className="text-xs text-slate-800 font-bold uppercase transition-colors group-hover:text-brand-600">MUHAMMAD FARHAN</span>
            </div>
            <div className="flex justify-between items-center group">
              <span className="text-xs text-slate-500 font-medium">Nomor Induk (NIM)</span>
              <span className="text-xs text-slate-800 font-bold tracking-wider transition-colors group-hover:text-brand-600">230401089</span>
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-[200px]">
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-3">Informasi Akademik</p>
          <div className="space-y-3">
            <div className="flex justify-between items-center group">
              <span className="text-xs text-slate-500 font-medium">Program Studi</span>
              <span className="text-xs text-slate-800 font-bold transition-colors group-hover:text-brand-600">Teknik Informatika</span>
            </div>
            <div className="flex justify-between items-center group">
              <span className="text-xs text-slate-500 font-medium">Dosen PA</span>
              <span className="text-xs text-slate-800 font-bold transition-colors group-hover:text-brand-600">Rahmad Firdaus, S.Kom., M.TI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden card-shadow">
        <div className="p-4 border-b border-slate-50 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-700">Detail Transkrip</span>
            <span className="px-2 py-0.5 bg-slate-200 text-slate-600 rounded-full text-[10px] font-semibold uppercase tracking-wider">
              105 Mata Kuliah
            </span>
          </div>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Cari mata kuliah..." 
              className="pl-9 pr-4 py-1.5 bg-white border border-slate-200 focus:border-brand-500/50 transition-all text-xs rounded-lg w-full sm:w-64 outline-none"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-4 py-3 text-[11px] font-semibold text-slate-400 uppercase tracking-widest border-b border-slate-100">No</th>
                <th className="px-4 py-3 text-[11px] font-semibold text-slate-400 uppercase tracking-widest border-b border-slate-100">Kode</th>
                <th className="px-4 py-3 text-[11px] font-semibold text-slate-400 uppercase tracking-widest border-b border-slate-100">Mata Kuliah</th>
                <th className="px-4 py-3 text-[11px] font-semibold text-slate-400 uppercase tracking-widest border-b border-slate-100 text-center">SKS</th>
                <th className="px-4 py-3 text-[11px] font-semibold text-slate-400 uppercase tracking-widest border-b border-slate-100 text-center">Nilai</th>
                <th className="px-4 py-3 text-[11px] font-semibold text-slate-400 uppercase tracking-widest border-b border-slate-100 text-center">Bobot</th>
                <th className="px-4 py-3 text-[11px] font-semibold text-slate-400 uppercase tracking-widest border-b border-slate-100 text-center">Mutu</th>
              </tr>
            </thead>
            <tbody>
              {transcriptData.map((row, idx) => (
                <motion.tr 
                  key={row.code}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="hover:bg-slate-50/80 transition-colors group"
                >
                  <td className="px-4 py-3 text-xs font-medium text-slate-400">{row.no}</td>
                  <td className="px-4 py-3 text-xs font-bold text-slate-600 tracking-tight">{row.code}</td>
                  <td className="px-4 py-3 text-xs font-bold text-slate-800">
                    <div className="flex flex-col">
                      <span>{row.name}</span>
                      <span className="text-[10px] text-slate-400 font-medium uppercase mt-0.5">Wajib Prodi</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs font-bold text-slate-800 text-center">{row.sks}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={cn(
                      "px-2.5 py-1 rounded-lg text-[11px] font-bold inline-block min-w-[35px]",
                      row.grade.startsWith('A') ? "bg-emerald-50 text-emerald-600 shadow-sm shadow-emerald-200/50" :
                      row.grade.startsWith('B') ? "bg-blue-50 text-blue-600" :
                      "bg-slate-50 text-slate-600"
                    )}>
                      {row.grade}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs font-bold text-slate-500 text-center">{row.weight.toFixed(2)}</td>
                  <td className="px-4 py-3 text-xs font-bold text-slate-800 text-center">{row.total}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-slate-50 bg-slate-50/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Menampilkan 12 dari 105 Mata Kuliah</p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 text-xs font-bold text-slate-500 hover:bg-slate-100 rounded-lg transition-all">Sebelumnya</button>
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 flex items-center justify-center bg-brand-600 text-white rounded-lg text-xs font-bold shadow-md shadow-brand-600/20">1</button>
                <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 text-slate-600 rounded-lg text-xs font-bold">2</button>
                <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 text-slate-600 rounded-lg text-xs font-bold">3</button>
              </div>
              <button className="px-3 py-1.5 text-xs font-bold text-slate-500 hover:bg-slate-100 rounded-lg transition-all">Selanjutnya</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SummaryCard = ({ label, value, icon: Icon, color, isMain }: any) => {
  const colors: any = {
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    brand: "bg-brand-50 text-brand-600",
    slate: "bg-slate-50 text-slate-600",
  };

  return (
    <div className={cn(
      "p-4 rounded-2xl border transition-all hover:scale-[1.02] cursor-default card-shadow",
      isMain ? "bg-brand-900 border-brand-800 text-white shadow-xl shadow-brand-900/20" : "bg-white border-slate-100"
    )}>
      <div className="flex items-center gap-3 mb-3">
        <div className={cn("p-2 rounded-lg", isMain ? "bg-white/10 text-emerald-300" : colors[color])}>
          <Icon size={18} />
        </div>
        <span className={cn("text-[10px] font-semibold uppercase tracking-widest", isMain ? "text-emerald-100/60" : "text-slate-400")}>
          {label}
        </span>
      </div>
      <p className={cn("text-2xl font-extrabold leading-none", isMain ? "text-white" : "text-slate-800")}>
        {value}
      </p>
    </div>
  );
};
