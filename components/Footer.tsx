
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-8 text-zinc-500 max-w-sm text-lg font-light leading-relaxed">
              Conectando el Cantábrico con el mundo. Exportación boutique de Txakoli desde el corazón del País Vasco.
            </p>
          </div>
          <div className="space-y-6">
            <h5 className="font-archivo text-xs uppercase tracking-[0.3em] text-[#e2ff00]">Encuéntranos</h5>
            <ul className="space-y-4 text-sm text-zinc-400 uppercase tracking-widest">
              <li>Donostia - San Sebastián</li>
              <li>Bilbao, Bizkaia</li>
              <li>NYC Office (Partners)</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="font-archivo text-xs uppercase tracking-[0.3em] text-[#e2ff00]">Digital</h5>
            <ul className="space-y-4 text-sm text-zinc-400 uppercase tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.4em] text-zinc-600">
          <span>&copy; {new Date().getFullYear()} ULTRAMAR WINES. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
