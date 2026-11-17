import React from 'react';
import { Menu } from 'lucide-react';

export default function Navbar({ onOpenMenu }) {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between border-b border-blue-400/20">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-white rotate-45 flex items-center justify-center shadow-md">
          <div className="-rotate-45 text-[#005EB8] font-black text-xl">✕</div>
        </div>
        <span className="text-white font-bold text-xl tracking-tight">ChurchQuest</span>
      </div>
      <button 
        onClick={onOpenMenu}
        className="w-10 h-10 rounded-full bg-blue-700/50 hover:bg-blue-600/60 flex items-center justify-center text-white transition border border-blue-400/20 cursor-pointer"
        aria-label="Toggle menu"
      >
        <Menu className="w-5 h-5" />
      </button>
    </header>
  );
}