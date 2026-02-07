
import React from 'react';

const Header: React.FC = () => {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass h-20 flex items-center">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section - Exact Match to Reference Image */}
        <div 
          className="flex items-center gap-3 group cursor-pointer" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          {/* Logo Icon: Rounded Blue Square with Perfectly Aligned Piano Keys */}
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-b from-[#38bdf8] to-[#2563eb] rounded-xl flex items-center justify-center shadow-lg shadow-sky-900/20 relative overflow-hidden transition-transform group-hover:scale-105">
            <div className="bg-white w-6 h-6 md:w-8 md:h-8 rounded-[4px] relative overflow-hidden flex shadow-inner">
              {/* White keys background with subtle dividers */}
              <div className="absolute inset-0 flex">
                <div className="flex-1 border-r border-black/5"></div>
                <div className="flex-1 border-r border-black/5"></div>
                <div className="flex-1"></div>
              </div>
              
              {/* Black keys - Precisely centered on the dividers as in the image */}
              <div className="absolute top-0 left-[20%] w-[20%] h-[55%] bg-[#0f172a] rounded-b-[1.5px]"></div>
              <div className="absolute top-0 left-[58%] w-[20%] h-[55%] bg-[#0f172a] rounded-b-[1.5px]"></div>
            </div>
          </div>

          <h1 className="text-xl md:text-3xl font-black tracking-tighter flex items-center">
            <span className="text-white">Key</span>
            <span className="text-[#38bdf8] drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">Master</span>
          </h1>
        </div>

        {/* Action Button */}
        <a 
          href="#pricing" 
          onClick={scrollToPricing}
          className="bg-sky-500 hover:bg-sky-400 text-white px-5 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-black glow-button transition-all uppercase tracking-widest"
        >
          COMEÇAR AGORA
        </a>
      </div>
    </header>
  );
};

export default Header;
