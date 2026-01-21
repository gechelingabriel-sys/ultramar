
import React from 'react';
import { LOGISTICS_INFO } from '../constants';

const ProcessSteps: React.FC = () => {
  const steps = [
    { title: "ELIGES", desc: "Seleccionas tu pack o curamos tu carta personalizada." },
    { title: "PAGAS", desc: "Transferencia rápida. Facturación B2B inmediata." },
    { title: "RECIBES", desc: "Enviamos desde Euskadi con tracking en tiempo real." }
  ];

  return (
    <section id="process" className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative mb-24">
          <div className="absolute -top-20 left-0 text-[20rem] font-archivo text-zinc-900/30 leading-none -z-0 hidden md:block select-none">
            0123
          </div>
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 pt-12 border-t border-zinc-800">
              <span className="font-archivo text-[#e2ff00] text-sm mb-6 block">ETAPA 0{i+1}</span>
              <h3 className="font-archivo text-6xl md:text-7xl tracking-tighter mb-6">{step.title}</h3>
              <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-xs uppercase">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        
        {/* Simplified Logistics Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 bg-zinc-900 border border-zinc-800">
          <div className="p-8 border-b lg:border-b-0 lg:border-r border-zinc-800">
            <h5 className="font-archivo text-[#e2ff00] text-xs tracking-widest mb-4 uppercase">Península y Baleares</h5>
            <p className="text-sm text-zinc-300 font-light">{LOGISTICS_INFO.spain}</p>
          </div>
          <div className="p-8 border-b lg:border-b-0 lg:border-r border-zinc-800">
            <h5 className="font-archivo text-[#e2ff00] text-xs tracking-widest mb-4 uppercase">Exportación USA</h5>
            <p className="text-sm text-zinc-300 font-light">{LOGISTICS_INFO.usa}</p>
          </div>
          <div className="p-8">
            <h5 className="font-archivo text-[#e2ff00] text-xs tracking-widest mb-4 uppercase">Soporte Total</h5>
            <p className="text-sm text-zinc-300 font-light">{LOGISTICS_INFO.tracking}</p>
          </div>
        </div>
        
        <div className="mt-12 p-12 bg-[#e2ff00] text-black">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h4 className="font-archivo text-3xl md:text-5xl tracking-tighter leading-none">
              EXPORTACIÓN <br /> <span className="text-black/50">SIN FRONTERAS.</span>
            </h4>
            <p className="max-w-md text-sm font-bold uppercase tracking-wider text-black/80">
              Simplificamos el Txakoli. Desde el País Vasco a cualquier barra de España o Estados Unidos. Sin burocracia, solo vino.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
