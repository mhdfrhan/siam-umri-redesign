import React from 'react';
import { 
  LayoutDashboard, 
  GraduationCap, 
  Mail, 
  Settings, 
  LogOut,
  ChevronDown,
  Star,
  Globe,
  Lightbulb,
  Group,
  Megaphone,
  X
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  onClose?: () => void;
  isMobile?: boolean;
}

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  isOpen?: boolean;
  onClick?: () => void;
  hasSubmenu?: boolean;
  to?: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, active, isOpen, onClick, hasSubmenu, to }) => {
  const content = (
    <motion.div 
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={cn(
        "flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition-all duration-300 group select-none relative",
        active 
          ? "bg-emerald-500/10 text-white shadow-[inset_0_0_0_1px_rgba(16,185,129,0.2)]" 
          : "text-emerald-100/50 hover:bg-white/5 hover:text-white"
      )}
    >
      {active && (
        <motion.div 
          layoutId="activeSide"
          className="absolute left-0 w-1 h-5 bg-emerald-400 rounded-r-full"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      
      <div className="flex items-center gap-3">
        <Icon 
          size={18} 
          className={cn(
            "transition-colors duration-300",
            active ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" : "text-emerald-400/30 group-hover:text-emerald-400"
          )} 
        />
        <span className={cn(
          "text-[13px] tracking-tight transition-colors font-medium",
          active ? "font-bold text-white" : ""
        )}>
          {label}
        </span>
      </div>

      {hasSubmenu && (
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown 
            size={14} 
            className={cn(
              "transition-colors",
              active ? "text-emerald-300" : "text-emerald-400/30"
            )} 
          />
        </motion.div>
      )}
    </motion.div>
  );

  if (to && !hasSubmenu) {
    return <Link to={to} className="block">{content}</Link>;
  }

  return content;
};

const SubNavItem: React.FC<{ label: string; index: number; active?: boolean; to: string }> = ({ label, index, active, to }) => (
  <Link to={to} className="block">
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        delay: (index * 0.05) + 0.1, // Add small extra delay to wait for container
        duration: 0.3,
        ease: "easeOut"
      }}
      className={cn(
        "pl-6 pr-3 py-1.5 text-[12px] cursor-pointer transition-all duration-200 relative flex items-center gap-3 group rounded-lg mx-1",
        active 
          ? "text-emerald-300 font-semibold bg-emerald-500/5" 
          : "text-emerald-100/30 hover:text-emerald-200 hover:bg-white/5"
      )}
    >
      <div className={cn(
        "w-1.5 h-1.5 rounded-full transition-all duration-300",
        active ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" : "bg-emerald-500/10 group-hover:bg-emerald-500/40"
      )} />
      <span className="truncate tracking-tight font-medium">{label}</span>
    </motion.div>
  </Link>
);

const CollapsibleMenu: React.FC<{
  title: string;
  icon: any;
  items: { label: string; to: string }[];
  isOpen: boolean;
  onToggle: () => void;
  activePath: string;
}> = ({ title, icon, items, isOpen, onToggle, activePath }) => {
  const hasActiveSub = items.some(item => activePath === item.to);
  
  return (
    <div className="mb-1">
      <NavItem 
        icon={icon} 
        label={title} 
        hasSubmenu 
        isOpen={isOpen}
        onClick={onToggle}
        active={hasActiveSub}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              height: { type: "spring", stiffness: 400, damping: 30 },
              opacity: { duration: 0.3, ease: "easeInOut" }
            }}
            className="overflow-hidden border-l border-white/5 ml-2 mt-1"
          >
            <div className="py-1 flex flex-col gap-0.5">
              {items.map((item, idx) => (
                <SubNavItem 
                  key={idx} 
                  label={item.label} 
                  to={item.to}
                  index={idx} 
                  active={activePath === item.to}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ onClose, isMobile }) => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = React.useState<string | null>('Akademis');

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <aside className={cn(
      "h-screen bg-brand-900 text-emerald-50 border-r border-brand-800 flex flex-col sticky top-0 shrink-0",
      isMobile ? "w-[280px]" : "w-64"
    )}>
      <div className="p-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3.5 group/logo transition-all">
          <div className="relative">
            <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-emerald-950/20 group-hover/logo:scale-110 transition-all duration-500 overflow-hidden border border-white/10 p-1.5">
               <img src="/logo.png" alt="SIAM Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="overflow-hidden">
            <h1 className="text-[17px] font-black text-white leading-none tracking-tighter">
              SIAM<span className="text-emerald-400">.</span>
            </h1>
            <p className="text-[8px] text-emerald-400/40 font-bold tracking-[0.2em] uppercase mt-1">Sistem Informasi Akademik</p>
          </div>
        </Link>
        {isMobile && (
          <button onClick={onClose} className="p-2 text-emerald-400 hover:text-white transition-colors bg-white/5 rounded-lg">
            <X size={20} />
          </button>
        )}
      </div>

      <nav className="flex-1 px-3.5 py-2 space-y-1 overflow-y-auto custom-scrollbar">
        <NavItem 
          icon={LayoutDashboard} 
          label="Dashboard" 
          to="/"
          active={location.pathname === '/'} 
        />

        <CollapsibleMenu 
          title="Akademis" 
          icon={GraduationCap} 
          items={[
            { label: "Transkrip Nilai", to: "/transkrip" },
            { label: "Rencana Studi (KRS)", to: "/krs" },
            { label: "Hasil Studi (KHS)", to: "/khs" },
            { label: "Kartu Ujian", to: "/ujian" },
            { label: "Jadwal Kuliah", to: "/jadwal" },
            { label: "Data Pembayaran", to: "/pembayaran" }
          ]} 
          isOpen={openMenu === 'Akademis'}
          onToggle={() => toggleMenu('Akademis')}
          activePath={location.pathname}
        />

        <CollapsibleMenu 
          title="Surat" 
          icon={Mail} 
          items={[
            { label: "Izin Magang", to: "/surat" },
            { label: "Izin Penelitian", to: "/surat/penelitian" },
            { label: "Aktif Kuliah", to: "/surat/aktif" },
            { label: "Keterangan Lulus", to: "/surat/lulus" },
            { label: "Beasiswa", to: "/surat/beasiswa" },
            { label: "Cuti", to: "/surat/cuti" },
            { label: "Ket. Berkelakuan Baik", to: "/surat/baik" },
            { label: "Pengalihan Pembayaran", to: "/surat/bayar" }
          ]} 
          isOpen={openMenu === 'Surat'}
          onToggle={() => toggleMenu('Surat')}
          activePath={location.pathname}
        />

        <CollapsibleMenu 
          title="Publikasi" 
          icon={Globe} 
          items={[
            { label: "Prestasi", to: "/publikasi/prestasi" },
            { label: "Karya Ilmiah", to: "/publikasi/karya" },
            { label: "Pengabdian", to: "/publikasi/pengabdian" }
          ]} 
          isOpen={openMenu === 'Publikasi'}
          onToggle={() => toggleMenu('Publikasi')}
          activePath={location.pathname}
        />

        <NavItem icon={Star} label="Sertifikat" active={location.pathname === '/sertifikat'} />
        <NavItem icon={Lightbulb} label="Anggota" active={location.pathname === '/anggota'} />

        <div className="pt-4 pb-2 px-3">
          <p className="text-[10px] font-bold text-emerald-400/20 uppercase tracking-[0.2em] mb-3">Sistem & Bantuan</p>
          <div className="space-y-1">
             <NavItem icon={Star} label="Peringatan" active={location.pathname === '/peringatan'} />
             <NavItem icon={Group} label="PMB" active={location.pathname === '/pmb'} />
             <NavItem icon={Megaphone} label="Bantuan" active={location.pathname === '/bantuan'} />
          </div>
        </div>
      </nav>

      <div className="p-4 border-t border-white/5 space-y-2 bg-brand-950/20">
        <button className="w-full flex items-center gap-3 px-3 py-2 text-emerald-400/60 hover:text-white hover:bg-white/5 rounded-xl transition-all text-[13px] font-medium group">
          <Settings size={18} className="group-hover:rotate-45 transition-transform" />
          Pengaturan
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-red-400/60 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all text-[13px] font-medium group">
          <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
          Keluar Sistem
        </button>
      </div>
    </aside>
  );
};
