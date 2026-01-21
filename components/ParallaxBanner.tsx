
import React from 'react';

const ParallaxBanner: React.FC = () => {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <div 
        className="absolute inset-0 parallax-bg"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1543412849-0355465e933d?auto=format&fit=crop&q=80&w=2000)' }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-6">
            <h3 className="font-archivo text-4xl md:text-8xl tracking-tighter mb-4 text-[#e2ff00]">
              VERDE, ELÉCTRICO, TXAKOLI.
            </h3>
            <p className="font-archivo text-xs md:text-sm tracking-[0.5em] uppercase">De los viñedos de Getaria al mundo.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxBanner;
