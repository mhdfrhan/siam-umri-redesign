import React from 'react';
import { ShieldAlert, Info, X, ExternalLink } from 'lucide-react';

interface AlertProps {
  type: 'warning' | 'info';
  title: string;
  description: string;
  linkText?: string;
}

const Alert: React.FC<AlertProps> = ({ type, title, description, linkText }) => {
  const isWarning = type === 'warning';
  
  return (
    <div className={`flex gap-4 p-4 rounded-2xl border ${isWarning ? 'bg-red-50/50 border-red-100' : 'bg-blue-50/50 border-blue-100'} group relative overflow-hidden transition-all hover:shadow-md`}>
      <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${isWarning ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
        {isWarning ? <ShieldAlert size={20} /> : <Info size={20} />}
      </div>
      
      <div className="flex-1">
        <h3 className={`text-sm font-bold ${isWarning ? 'text-red-900' : 'text-blue-900'} mb-0.5`}>{title}</h3>
        <p className={`text-xs ${isWarning ? 'text-red-700/80' : 'text-blue-700/80'} leading-relaxed max-w-2xl`}>
          {description}
        </p>
        {linkText && (
          <button className={`mt-2 text-xs font-bold flex items-center gap-1.5 ${isWarning ? 'text-red-600 hover:text-red-800' : 'text-blue-600 hover:text-blue-800'} transition-colors`}>
            {linkText} <ExternalLink size={12} />
          </button>
        )}
      </div>

      <button className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-600 rounded-lg transition-colors">
        <X size={14} />
      </button>
    </div>
  );
};

export const AlertsList: React.FC = () => {
  return (
    <div className="space-y-4 mb-8">
      <Alert 
        type="warning" 
        title="Keamanan Akun" 
        description="Untuk menghindari KRS hilang, harap ganti password standart (NIM) dengan password pilihan anda. Jangan membuat password sama dengan NIM."
        linkText="Ganti Password Disini"
      />
      <Alert 
        type="info" 
        title="Pengisian Form SKPI" 
        description="Kepada seluruh mahasiswa, diharapkan segera mengisi formulir SKPI (Surat Keterangan Pendamping Ijazah) sebelum masa pendaftaran berakhir."
        linkText="Isi Form SKPI"
      />
    </div>
  );
};
