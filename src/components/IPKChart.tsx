import React from 'react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Area, 
  AreaChart 
} from 'recharts';
import { TrendingUp } from 'lucide-react';

const data = [
  { semester: 'S1', ip: 3.75 },
  { semester: 'S2', ip: 3.90 },
  { semester: 'S3', ip: 3.94 },
  { semester: 'S4', ip: 3.92 },
  { semester: 'S5', ip: 4.00 },
];

export const IPKChart: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 card-shadow h-full flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
            <TrendingUp size={20} />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-800 leading-tight">Grafik IP Semester</h2>
            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Academic Performance</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-tight">IPK (rata-ratanya)</p>
          <p className="text-xl font-bold text-brand-600 leading-none">3.91</p>
        </div>
      </div>

      <div className="flex-1 w-full min-h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
            <defs>
              <linearGradient id="colorIp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.15}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="semester" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 600 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 10 }} 
              domain={[3, 4]} 
              ticks={[3.0, 3.25, 3.5, 3.75, 4.0]}
            />
            <Tooltip 
              contentStyle={{ 
                borderRadius: '12px', 
                border: 'none', 
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', 
                fontSize: '12px',
                fontWeight: '600'
              }}
              itemStyle={{ color: '#059669' }}
              cursor={{ stroke: '#10b981', strokeWidth: 1, strokeDasharray: '4 4' }}
            />
            <Area 
              type="monotone" 
              dataKey="ip" 
              stroke="#10b981" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorIp)" 
              activeDot={{ r: 6, fill: '#10b981', stroke: '#fff', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-semibold text-slate-500 uppercase">Target IPK: 4.00</span>
        </div>
        <span className="text-[10px] font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">+2.5% vs Last Sem</span>
      </div>
    </div>
  );
};
