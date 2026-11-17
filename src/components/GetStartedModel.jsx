import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function GetStartedModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-[#004A94] border border-blue-400/30 rounded-3xl p-6 md:p-8 text-white shadow-2xl z-10">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full hover:bg-blue-700/50 transition cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <h2 className="text-2xl font-bold mb-2">Grow Your Ministry</h2>
            <p className="text-blue-100 text-sm mb-6">Enter your details to setup your workspace instantly.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-blue-200 mb-1">Church Name</label>
                <input required type="text" placeholder="Grace Fellowship Church" className="w-full px-4 py-3 rounded-xl bg-blue-900/60 border border-blue-400/30 text-white placeholder-blue-300/50 focus:outline-none focus:border-[#D6F852]" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-blue-200 mb-1">Your Email</label>
                <input required type="email" placeholder="leader@gracefellowship.org" className="w-full px-4 py-3 rounded-xl bg-blue-900/60 border border-blue-400/30 text-white placeholder-blue-300/50 focus:outline-none focus:border-[#D6F852]" />
              </div>
              <button type="submit" className="w-full py-4 rounded-xl bg-[#D6F852] hover:bg-[#cbf134] text-slate-900 font-bold transition cursor-pointer shadow-lg mt-2">
                Launch Workspace
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <CheckCircle2 className="w-16 h-16 text-[#D6F852] mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold mb-2">Workspace Created!</h3>
            <p className="text-blue-100 text-sm mb-6">Check your email for instructions to access your dashboard.</p>
            <button onClick={() => { setSubmitted(false); onClose(); }} className="px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-600 font-semibold transition cursor-pointer">
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}