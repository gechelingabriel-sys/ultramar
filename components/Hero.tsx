
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Parallax-like video/image placeholder */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center opacity-40 grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=2000)' }}
        ></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-5xl">
          <h1 className="font-archivo text-6xl md:text-[10rem] leading-[0.85] tracking-tighter mb-8">
            BASQUE <br /> 
            <span className="text-[#e2ff00] italic">WINE</span> <br /> 
            SOUL.
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <p className="text-xl md:text-2xl font-light max-w-xl text-zinc-400">
              Conectamos viñedos boutique de Euskadi con las barras más disruptivas de España y EEUU. 
              Sin dramas, sin burocracia.
            </p>
            <a 
              href="#packs" 
              className="bg-white text-black font-archivo px-10 py-5 text-sm uppercase tracking-widest hover:bg-[#e2ff00] transition-all duration-300"
            >
              Ver Packs B2B
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 flex items-center gap-4 text-xs tracking-widest uppercase text-zinc-500">
        <div className="w-12 h-[1px] bg-zinc-700"></div>
        <span>Desplazar para descubrir</span>
      </div>
    </section>
  );
};

export default Hero;
