import React from 'react';
import { User, Phone, MapPin, GraduationCap, Award, Calendar } from 'lucide-react';

interface InfoItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-3 py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors">
    <div className="mt-0.5 p-1.5 bg-slate-100 text-slate-500 rounded-md">
      <Icon size={14} />
    </div>
    <div>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{label}</p>
      <p className="text-xs font-semibold text-slate-700 leading-tight">{value}</p>
    </div>
  </div>
);

export const StudentProfileCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 card-shadow h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-brand-50 text-brand-600 rounded-lg">
            <User size={20} />
          </div>
          <h2 className="text-base font-bold text-slate-800">Informasi Mahasiswa</h2>
        </div>
        <span className="px-2.5 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded-full uppercase border border-green-100">Aktif</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
        <InfoItem icon={User} label="Nama Lengkap" value="MUHAMMAD FARHAN" />
        <InfoItem icon={Calendar} label="Tempat, Tgl Lahir" value="Pekanbaru, 04 Maret 2005" />
        <InfoItem icon={User} label="NIM" value="230401089" />
        
        <InfoItem icon={GraduationCap} label="Program Studi" value="Teknik Informatika" />
        <InfoItem icon={Award} label="Dosen PA" value="Rahmad Firdaus, S.Kom., M.TI" />
        <InfoItem icon={GraduationCap} label="Kelas/Sistem" value="REGULER-A" />

        <InfoItem icon={MapPin} label="Alamat" value="JL. BANDUNG GG.BANDUNG 1 NO.33" />
        <InfoItem icon={Phone} label="Telepon" value="083173633639" />
        <InfoItem icon={Award} label="Beasiswa" value="Beasiswa Prestasi" />
      </div>
    </div>
  );
};
