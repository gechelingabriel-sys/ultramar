
import React from 'react';

const SpotifySection: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <iframe 
              data-testid="embed-iframe" 
              style={{ borderRadius: '12px' }} 
              src="https://open.spotify.com/embed/playlist/67W7EOJiY7bWmH4eHZyUIU?utm_source=generator" 
              width="100%" 
              height="400" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="font-archivo text-5xl md:text-7xl tracking-tighter leading-none">
              WINE <br /> <span className="text-[#e2ff00]">VIBES</span> <br /> ONLY.
            </h2>
            <p className="text-xl text-zinc-400 font-light leading-relaxed">
              El vino no es solo líquido; es ambiente. Hemos curado una selección sonora que acompaña perfectamente la acidez de nuestro Txakoli. Dale al play y siente ULTRAMAR.
            </p>
            <div className="flex items-center gap-4 text-xs font-archivo tracking-widest text-zinc-500 uppercase">
              <span className="w-8 h-[1px] bg-zinc-700"></span>
              <span>Curated by Gabriel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotifySection;
