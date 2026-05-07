import React from 'react';
import { Bell, Search, ChevronRight, Home, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onMenuClick: () => void;
  isSidebarOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onMenuClick, isSidebarOpen }) => {
  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-10">
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Hamburger Menu Mobile */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors overflow-hidden"
        >
          <motion.div
            animate={{ rotate: isSidebarOpen ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {isSidebarOpen ? <X size={22} className="text-slate-600" /> : <Menu size={22} className="text-slate-600" />}
          </motion.div>
        </button>

        <div className="flex items-center text-slate-400 gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-medium">
          <Home size={14} className="text-slate-400 hidden xs:block" />
          <ChevronRight size={12} className="text-slate-300 hidden xs:block" />
          <span className="text-slate-400 transition-colors hover:text-brand-600 cursor-pointer">Home</span>
          <ChevronRight size={12} className="text-slate-300" />
          <span className="text-brand-600 font-semibold uppercase tracking-tight">Dashboard</span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-6">
        <div className="relative group hidden md:block">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Cari menu..." 
            className="pl-10 pr-4 py-1.5 bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-200 focus:ring-4 focus:ring-brand-500/5 transition-all text-sm rounded-lg w-40 sm:w-56 outline-none text-slate-700 placeholder:text-slate-400"
          />
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative transition-colors">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
};
