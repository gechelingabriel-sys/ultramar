
import React from 'react';
import { STARTER_PACKS } from '../constants';

const StarterPacks: React.FC = () => {
  return (
    <section id="packs" className="py-24 bg-zinc-950 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="font-archivo text-5xl md:text-8xl tracking-tighter mb-4">STARTER PACKS</h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <p className="text-zinc-500 max-w-md uppercase text-xs tracking-widest">
              Selección curada para hostelería joven. Importación directa simplificada.
            </p>
            <span className="text-[#e2ff00] font-archivo text-sm uppercase tracking-widest border-b border-[#e2ff00]">Precios Netos / B2B Only</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {STARTER_PACKS.map((pack) => (
            <div key={pack.id} className="group relative bg-zinc-900 overflow-hidden border border-white/10 hover:border-[#e2ff00]/50 transition-all duration-500">
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={pack.image} 
                  alt={pack.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-6 right-6 bg-black text-white px-4 py-2 font-archivo text-2xl">
                  {pack.price}€
                </div>
              </div>
              <div className="p-10 space-y-6">
                <div>
                  <h4 className="text-zinc-500 font-archivo text-xs uppercase tracking-widest mb-2">{pack.type}</h4>
                  <h3 className="font-archivo text-4xl group-hover:text-[#e2ff00] transition-colors">{pack.name}</h3>
                </div>
                <p className="text-zinc-400 font-light text-lg italic leading-relaxed">
                  {pack.description}
                </p>
                <ul className="space-y-3">
                  {pack.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-zinc-300 uppercase tracking-wider">
                      <div className="w-1 h-1 bg-[#e2ff00]"></div>
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-white text-black font-archivo py-5 text-sm uppercase tracking-[0.2em] hover:bg-[#e2ff00] transition-colors">
                  Solicitar vía WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StarterPacks;
