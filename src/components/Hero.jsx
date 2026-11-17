import React from 'react';

export default function Hero({ onGetStarted, onViewDemo }) {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 text-center max-w-3xl mx-auto">
      {/* Status Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/40 border border-blue-400/30 text-white text-xs md:text-sm font-medium mb-8 backdrop-blur-sm shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#D6F852] animate-pulse"></span>
        Built for ministries that want to grow
      </div>

      {/* Headline */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
        Empowering Ministries with <span className="text-[#8AC7FF]">Smart Digital Management</span>
      </h1>

      {/* Subheadline */}
      <p className="text-blue-100 text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-normal">
        One beautifully simple platform for member tracking, donations, events, and attendance—so your team can focus on what matters most.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-12">
        <button 
          onClick={onGetStarted}
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D6F852] hover:bg-[#cbf134] text-slate-900 font-bold text-base flex items-center justify-center gap-2 transition shadow-lg cursor-pointer"
        >
          Get Started 
          <span className="text-lg">↗</span>
        </button>

        <button 
          onClick={onViewDemo}
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-700/60 hover:bg-blue-600/70 border border-blue-400/30 text-white font-semibold text-base flex items-center justify-center gap-2 transition backdrop-blur-sm cursor-pointer"
        >
          <span className="text-xs">▶</span> View Demo
        </button>
      </div>

      {/* Social Proof Avatars */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex -space-x-2">
          <div className="w-9 h-9 rounded-full bg-white text-slate-800 text-xs font-bold flex items-center justify-center border-2 border-[#005EB8] shadow">JM</div>
          <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center border-2 border-[#005EB8] shadow">AR</div>
          <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-900 text-xs font-bold flex items-center justify-center border-2 border-[#005EB8] shadow">SK</div>
        </div>
        <p className="text-xs sm:text-sm text-blue-100 font-medium">
          Loved by <span className="text-white font-bold">120+ ministries</span> worldwide
        </p>
      </div>
    </main>
  );
}