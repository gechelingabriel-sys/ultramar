
import React from 'react';
import { GABRIEL_STORY } from '../constants';

const GabrielStory: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2.5fr] gap-12 lg:gap-24 items-center">
          <div className="relative flex justify-center lg:justify-start">
             <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#e2ff00] -z-10"></div>
             <img 
              src={GABRIEL_STORY.image} 
              alt="Gabriel - Ultramar" 
              className="w-full max-w-sm h-[450px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
            />
            <div className="absolute bottom-4 right-4 lg:-right-4 bg-black text-white p-4 max-w-[180px] font-archivo text-[10px] uppercase tracking-widest leading-tight">
              Gabriel. Curador & Fundador.
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="font-archivo text-5xl md:text-8xl leading-[0.9] tracking-tighter">
              EL ALMA <br /> <span className="text-zinc-300">DETRÁS DE</span> <br /> CADA COPA.
            </h2>
            <div className="max-w-2xl space-y-6">
              <p className="text-2xl font-light italic text-zinc-500 leading-tight border-l-4 border-[#e2ff00] pl-6">
                "{GABRIEL_STORY.quote}"
              </p>
              <p className="text-lg text-zinc-800 leading-relaxed font-light">
                {GABRIEL_STORY.text}
              </p>
            </div>
            <div className="pt-4 flex items-center gap-6">
              <div className="h-[1px] w-12 bg-black"></div>
              <p className="font-archivo text-[10px] uppercase tracking-[0.3em] text-zinc-400">Autenticidad sin intermediarios</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GabrielStory;
