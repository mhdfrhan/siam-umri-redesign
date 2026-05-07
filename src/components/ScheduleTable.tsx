import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface ScheduleItem {
  title: string;
  start: string;
  end: string;
  status: 'active' | 'upcoming' | 'past';
}

const scheduleData: ScheduleItem[] = [
  { title: 'Tanggal Pengisian KRS', start: '09 Maret 2026', end: '14 Maret 2026', status: 'past' },
  { title: 'Tanggal Pembayaran UKT', start: '01 Januari 2026', end: '30 Juni 2026', status: 'active' },
  { title: 'Ujian Tengah Semester', start: '15 Mei 2026', end: '22 Mei 2026', status: 'upcoming' },
];

export const ScheduleTable: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 card-shadow">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
            <Clock size={20} />
          </div>
          <h2 className="text-base font-bold text-slate-800">Jadwal Semester 20252</h2>
        </div>
        <button className="text-[10px] font-bold text-brand-600 uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all">
          Lihat Kalender <ArrowRight size={12} />
        </button>
      </div>

      <div className="overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-50">
              <th className="pb-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Kegiatan</th>
              <th className="pb-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mulai</th>
              <th className="pb-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Selesai</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {scheduleData.map((item, idx) => (
              <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                <td className="py-4">
                  <p className="text-xs font-bold text-slate-700">{item.title}</p>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Calendar size={12} />
                    <span className="text-[11px] font-medium">{item.start}</span>
                  </div>
                </td>
                <td className="py-4 text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={12} />
                    <span className="text-[11px] font-medium">{item.end}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
