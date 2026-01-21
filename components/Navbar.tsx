
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 py-4 border-b border-white/10' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-end">
        <Logo />
        <div className="hidden md:flex gap-12 font-archivo text-xs uppercase tracking-[0.2em]">
          <a href="#packs" className="hover:text-[#e2ff00] transition-colors">Starter Packs</a>
          <a href="#story" className="hover:text-[#e2ff00] transition-colors">La Historia</a>
          <a href="#process" className="hover:text-[#e2ff00] transition-colors">Logística</a>
          <a href="https://wa.me/yournumber" className="text-[#e2ff00] border-b border-[#e2ff00] pb-1">Conecta WhatsApp</a>
        </div>
        <button className="md:hidden text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
