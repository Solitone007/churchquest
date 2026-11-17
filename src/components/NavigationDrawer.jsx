import React from 'react';
import { X, Home, BookOpen, Users, Phone, Settings } from 'lucide-react';

export default function NavigationDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />

      {/* Drawer Panel */}
      <div className="relative w-80 max-w-full bg-[#004A94] h-full shadow-2xl p-6 flex flex-col border-l border-blue-400/20 text-white animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between pb-6 border-b border-blue-400/20">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-blue-700/50 transition cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 py-6 flex flex-col gap-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-700/40 transition font-medium">
            <Home className="w-5 h-5 text-[#D6F852]" /> Home
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-700/40 transition font-medium">
            <BookOpen className="w-5 h-5 text-[#D6F852]" /> Features
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-700/40 transition font-medium">
            <Users className="w-5 h-5 text-[#D6F852]" /> Ministries
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-700/40 transition font-medium">
            <Phone className="w-5 h-5 text-[#D6F852]" /> Contact Support
          </a>
        </nav>

        <div className="pt-6 border-t border-blue-400/20">
          <button onClick={onClose} className="w-full py-3 rounded-xl bg-blue-700/60 hover:bg-blue-600 transition text-sm font-semibold cursor-pointer">
            Sign In to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}