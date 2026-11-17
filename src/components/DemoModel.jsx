import React from 'react';
import { X, Play } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl bg-[#004A94] border border-blue-400/30 rounded-3xl p-6 md:p-8 text-white shadow-2xl z-10">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full hover:bg-blue-700/50 transition cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Play className="w-6 h-6 text-[#D6F852] fill-[#D6F852]" /> Platform Walkthrough
        </h2>
        <p className="text-blue-100 text-sm mb-6">See how ChurchQuest streamlines attendance and member management in under 2 minutes.</p>

        <div className="w-full aspect-video bg-blue-950 rounded-2xl border border-blue-400/20 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer shadow-inner">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent"></div>
          <div className="w-16 h-16 rounded-full bg-[#D6F852] flex items-center justify-center text-slate-900 shadow-xl group-hover:scale-110 transition duration-300 z-10">
            <Play className="w-7 h-7 fill-slate-900 ml-1" />
          </div>
          <span className="text-xs uppercase font-bold tracking-widest text-blue-200 mt-4 z-10">Click to Play Demo Video</span>
        </div>
      </div>
    </div>
  );
}