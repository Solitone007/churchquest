import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NavigationDrawer from './components/NavigationDrawer';
import GetStartedModal from './components/GetStartedModel';
import DemoModal from './components/DemoModel';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#005EB8] to-[#0077DF] flex flex-col relative overflow-hidden font-sans">
      {/* Background blueprint grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* Header / Navbar */}
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />

      {/* Main Hero Section */}
      <Hero 
        onGetStarted={() => setIsGetStartedOpen(true)} 
        onViewDemo={() => setIsDemoOpen(true)} 
      />

      {/* Modals & Drawers */}
      <NavigationDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <GetStartedModal isOpen={isGetStartedOpen} onClose={() => setIsGetStartedOpen(false)} />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}