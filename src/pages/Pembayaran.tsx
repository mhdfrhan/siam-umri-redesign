import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wallet, 
  ChevronDown, 
  Search, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  CreditCard,
  Building2,
  Calendar,
  ArrowUpRight,
  ChevronRight,
  Info
} from 'lucide-react';
import { cn } from '../lib/utils';

const paymentHistory = [
  {
    ta: '20252',
    label: '2025 GENAP',
    items: [
      { name: 'SPP (Sumbangan Pembinaan Pendidikan)', total: 3500000, paid: 3500000, balance: 0, status: 'Lunas', history: [{ seq: 1, date: '15-02-2026', bank: 'Bank Riau Syariah', amount: 3500000 }] },
      { name: 'UPR (Uang Pengembangan Universitas)', total: 700000, paid: 700000, balance: 0, status: 'Lunas', history: [{ seq: 1, date: '15-12-2025', bank: 'Bank Riau Syariah', amount: 700000 }] },
      { name: 'PENINGKATAN MUTU AKADEMIK', total: 500000, paid: 500000, balance: 0, status: 'Lunas', history: [{ seq: 1, date: '15-02-2026', bank: 'Bank Riau Syariah', amount: 500000 }] }
    ]
  },
  {
    ta: '20251',
    label: '2025 GANJIL',
    items: [
      { name: 'SPP (Sumbangan Pembinaan Pendidikan)', total: 3500000, paid: 3500000, balance: 0, status: 'Lunas', history: [{ seq: 1, date: '16-08-2025', bank: 'Bank Riau Syariah', amount: 3500000 }] },
      { name: 'UPR (Uang Pengembangan Universitas)', total: 700000, paid: 700000, balance: 0, status: 'Lunas', history: [{ seq: 1, date: '15-07-2025', bank: 'Bank Riau Syariah', amount: 700000 }] },
      { name: 'PENINGKATAN MUTU AKADEMIK', total: 500000, paid: 500000, balance: 0, status: 'Lunas', history: [{ seq: 1, date: '16-08-2025', bank: 'Bank Riau Syariah', amount: 500000 }] }
    ]
  }
];

export const Pembayaran: React.FC = () => {
  return (
    <div className="space-y-4 pb-12">
      {/* Compact Header matching KRS style */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-100 card-shadow text-brand-600">
             <Wallet size={20} />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-slate-800 tracking-tight">Data Pembayaran</h1>
            <p className="text-[12px] text-slate-500 font-medium">Informasi Tagihan & Histori Transaksi</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
           <div className="relative">
              <select className="appearance-none pl-3 pr-8 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-bold outline-none card-shadow cursor-pointer min-w-[150px]">
                <option>Semua TA</option>
                <option>20252</option>
                <option>20251</option>
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
           </div>
           <button className="flex items-center gap-2 px-4 py-1.5 bg-brand-600 text-white rounded-lg text-xs font-bold hover:bg-brand-700 shadow-lg shadow-brand-600/10 active:scale-95 transition-all">
              <TrendingUp size={14} />
              Grafik Pembayaran
           </button>
        </div>
      </div>

      {/* Summary Stats - Financial Dashboard Feel */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
         <FinanceCard label="Total Tagihan" value="Rp 24.5Jt" icon={CreditCard} color="blue" />
         <FinanceCard label="Total Terbayar" value="Rp 24.5Jt" icon={CheckCircle2} color="emerald" />
         <FinanceCard label="Sisa Tagihan" value="Rp 0" icon={Clock} color="amber" />
         <FinanceCard label="Status UKT" value="LUNAS" icon={ArrowUpRight} color="brand" />
      </div>

      {/* Main Billing Content */}
      <div className="space-y-4">
        {paymentHistory.map((group, groupIdx) => (
          <div key={group.ta} className="bg-white rounded-xl border border-slate-100 overflow-hidden card-shadow">
            {/* TA Header */}
            <div className="px-5 py-3 bg-brand-900 flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center text-emerald-400">
                     <Calendar size={14} />
                  </div>
                  <h3 className="text-xs font-extrabold text-white tracking-widest uppercase">Tahun Akademik {group.ta} <span className="opacity-40 ml-2 font-medium">({group.label})</span></h3>
               </div>
               <ChevronRight size={14} className="text-white/20" />
            </div>

            {/* Table Structure */}
            <div className="overflow-x-auto">
              <div className="min-w-[900px]">
                <div className="grid grid-cols-[1fr_150px_150px_150px_100px] gap-2 px-6 py-2 bg-slate-50 border-b border-slate-100 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-left">
                   <span>Nama Tagihan</span>
                   <span className="text-center">Jumlah Tagihan</span>
                   <span className="text-center">Jumlah Dibayar</span>
                   <span className="text-center">Sisa Tagihan</span>
                   <span className="text-right">Status</span>
                </div>

                <div className="divide-y divide-slate-50">
                   {group.items.map((item, idx) => (
                     <div key={idx} className="group">
                        {/* Main Billing Row */}
                        <div className="grid grid-cols-[1fr_150px_150px_150px_100px] gap-2 px-6 py-3 items-center text-left">
                           <div className="flex flex-col">
                              <span className="text-[12.5px] font-bold text-slate-800 leading-tight">{item.name}</span>
                              <div className="flex items-center gap-2 mt-1">
                                 <span className="text-[9px] font-bold text-slate-400 uppercase">Billing ID: #TX-{group.ta}-{idx}</span>
                              </div>
                           </div>

                           <div className="text-center text-[12px] font-bold text-slate-600">
                              Rp {item.total.toLocaleString()}
                           </div>

                           <div className="text-center text-[12px] font-bold text-slate-800">
                              Rp {item.paid.toLocaleString()}
                           </div>

                           <div className="text-center text-[12px] font-bold text-slate-400">
                              {item.balance === 0 ? '-' : `Rp ${item.balance.toLocaleString()}`}
                           </div>

                           <div className="flex justify-end">
                              <span className={cn(
                                "px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tight border",
                                item.status === 'Lunas' 
                                  ? "bg-emerald-50 text-emerald-600 border-emerald-100" 
                                  : "bg-amber-50 text-amber-600 border-amber-100"
                              )}>
                                 {item.status}
                              </span>
                           </div>
                        </div>

                        {/* Payment Breakdowns - Subtle Nested Rows */}
                        <div className="bg-slate-50/30 px-10 pb-3 -mt-1">
                           {item.history.map((hist, hIdx) => (
                             <div key={hIdx} className="flex items-center justify-between border-t border-slate-100 py-1.5">
                                <div className="flex items-center gap-6">
                                   <div className="flex items-center gap-1.5">
                                      <span className="w-1.5 h-1.5 bg-brand-400 rounded-full"></span>
                                      <span className="text-[11px] font-bold text-slate-500">Pembayaran ke-{hist.seq}</span>
                                   </div>
                                   <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                                      <Calendar size={10} />
                                      {hist.date}
                                   </div>
                                   <div className="flex items-center gap-1.5 px-2 py-0.5 bg-blue-50 text-blue-600 rounded-md text-[9px] font-black border border-blue-100 uppercase tracking-tighter">
                                      <Building2 size={10} />
                                      {hist.bank}
                                   </div>
                                </div>
                                <span className="text-[11px] font-extrabold text-slate-700">Rp {hist.amount.toLocaleString()}</span>
                             </div>
                           ))}
                        </div>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info Compact */}
      <div className="bg-white rounded-xl border border-slate-100 p-4 card-shadow flex items-center justify-between gap-4">
         <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-50 text-slate-400 rounded-lg">
               <Info size={16} />
            </div>
            <p className="text-[11px] font-semibold text-slate-400 italic">
               Pembayaran di luar bank yang bekerja sama wajib lapor ke bagian keuangan melalui loket atau WhatsApp Official.
            </p>
         </div>
         <button className="flex-shrink-0 text-xs font-bold text-brand-600 hover:underline flex items-center gap-1">
            Lihat Rekening Universitas <ChevronRight size={12} />
         </button>
      </div>
    </div>
  );
};

const FinanceCard = ({ label, value, icon: Icon, color }: any) => {
  const colors: any = {
    blue: 'bg-blue-50 text-blue-600 border-blue-100 shadow-blue-500/10',
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100 shadow-emerald-500/10',
    amber: 'bg-amber-50 text-amber-600 border-amber-100 shadow-amber-500/10',
    brand: 'bg-brand-50 text-brand-600 border-brand-100 shadow-brand-600/10'
  };

  return (
    <div className={cn("p-3.5 rounded-xl border-b-2 flex flex-col gap-2 bg-white card-shadow transition-all hover:scale-[1.02]", colors[color])}>
       <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</span>
          <Icon size={14} className="opacity-50" />
       </div>
       <span className="text-lg font-black tracking-tight text-slate-800 leading-none">{value}</span>
    </div>
  );
};
