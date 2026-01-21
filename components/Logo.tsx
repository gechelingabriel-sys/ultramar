
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-start leading-none group cursor-pointer">
      <span className="font-archivo text-3xl md:text-4xl tracking-tighter text-white group-hover:text-[#e2ff00] transition-colors duration-300">
        ULTRA
      </span>
      <div className="flex items-center gap-2">
        <span className="font-archivo text-3xl md:text-4xl tracking-tighter text-white group-hover:text-[#e2ff00] transition-colors duration-300">
          MAR
        </span>
        <div className="h-2 w-12 bg-[#e2ff00] group-hover:w-24 transition-all duration-500 ease-in-out"></div>
      </div>
    </div>
  );
};

export default Logo;
