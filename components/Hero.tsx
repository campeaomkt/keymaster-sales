
import React, { useEffect } from 'react';

const Hero: React.FC = () => {
  useEffect(() => {
    // Inject Vturb player script
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/1b23d824-f7d5-46ac-8edc-700038ffb33d/players/6988e8652a1ff25848748983/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
    
    return () => {
      if (document.head.contains(s)) {
        document.head.removeChild(s);
      }
    };
  }, []);

  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      {/* Background Orbs - Centered behind the content group */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-sky-500/5 blur-[160px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content Column (Left) */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-block px-4 py-1.5 mb-8 glass rounded-full border border-sky-500/20 bg-sky-500/5">
              <span className="text-[10px] md:text-xs font-black text-sky-400 uppercase tracking-[0.2em]">A tríade da maestria musical</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black mb-6 tracking-tighter text-white leading-[1.05]">
              A CHAVE PARA TOCAR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-500 logo-glow">COM LIBERDADE.</span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-400 mb-10 max-w-md leading-relaxed">
              Domine <span className="text-white font-semibold">Acordes, Campos Harmônicos e Escalas</span> com o KeyMaster Pro. Um App projetado para transformar sua teoria em música viva.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 text-slate-500">
              <div className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                <svg className="w-3.5 h-3.5 text-sky-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                <span className="text-[9px] font-black uppercase tracking-widest">Celular</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                <svg className="w-3.5 h-3.5 text-sky-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                <span className="text-[9px] font-black uppercase tracking-widest">Tablet</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                <svg className="w-3.5 h-3.5 text-sky-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="text-[9px] font-black uppercase tracking-widest">Desktop</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <a 
                href="#pricing" 
                onClick={scrollToPricing}
                className="w-full sm:w-60 px-8 py-5 bg-sky-500 hover:bg-sky-400 text-white font-black text-lg rounded-2xl glow-button transition-all text-center"
              >
                QUERO MEU ACESSO
              </a>
              <a 
                href="#demo" 
                onClick={scrollToDemo}
                className="w-full sm:w-auto px-8 py-5 glass border border-white/10 hover:bg-white/10 text-white font-bold text-base rounded-2xl transition-all uppercase tracking-tight text-center"
              >
                TESTAR PIANO
              </a>
            </div>
          </div>

          {/* Video Column (Right) - Vturb Smartplayer */}
          <div className="flex justify-center lg:justify-center">
            <div className="hero-video relative group w-full max-w-[280px] md:max-w-[320px] aspect-[9/16]">
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-sky-500/30 to-indigo-600/30 blur-2xl rounded-[40px] opacity-70 group-hover:opacity-100 transition-all duration-700"></div>
              
              {/* phone-frame */}
              <div className="phone-frame relative w-full h-full bg-[#020617] border-[6px] border-slate-800 rounded-[40px] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                
                {/* Speaker Grill Mockup */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-2xl z-30"></div>

                {/* Vturb Player Integration */}
                <div 
                  className="w-full h-full relative z-10 bg-black flex items-center justify-center"
                  dangerouslySetInnerHTML={{ 
                    __html: '<vturb-smartplayer id="vid-6988e8652a1ff25848748983" style="display: block; margin: 0 auto; width: 100%; height: 100%; object-fit: cover;"></vturb-smartplayer>' 
                  }}
                />

                {/* Decorative Label */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-[7px] font-black text-white tracking-[0.2em] uppercase">VÍDEO DE APRESENTAÇÃO</span>
                </div>
              </div>

              {/* Decorative base reflection shadow */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-sky-500/10 blur-xl rounded-full"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
