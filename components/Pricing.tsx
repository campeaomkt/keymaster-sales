
import React from 'react';

const Pricing: React.FC = () => {
  const handlePurchase = () => {
    // Lead directly to checkout link
    window.location.href = "https://pay.hotmart.com/YOUR_LINK";
  };

  return (
    <section id="pricing" className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative Blur for Focus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-sky-500/5 blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-[480px] md:max-w-4xl mx-auto glass rounded-[32px] md:rounded-[48px] border-2 border-sky-500/30 p-6 md:p-16 text-center relative shadow-2xl">
          
          {/* Scarcity Badge - Optimized for Mobile */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-600 to-sky-400 text-white px-5 py-1.5 rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-lg shadow-sky-500/40 whitespace-nowrap z-20">
            OFERTA DE LANÇAMENTO • HOJE
          </div>
          
          <div className="pt-4 md:pt-0">
            <h2 className="text-2xl md:text-6xl font-black mb-2 md:mb-4 text-white uppercase italic tracking-tighter">
              ACESSO VITALÍCIO
            </h2>
            <p className="text-slate-400 text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] mb-8">
              Pague uma vez, use para sempre
            </p>
          </div>
          
          {/* Price Anchor Block */}
          <div className="mb-8 md:mb-12 bg-white/5 rounded-3xl py-8 px-4 border border-white/5">
            <div className="flex flex-col items-center">
                <span className="text-slate-500 line-through text-lg md:text-2xl italic font-medium mb-1">
                    De R$ 97,00
                </span>
                
                <div className="flex items-center justify-center">
                    <span className="text-2xl md:text-4xl font-black text-slate-400 mr-2 mt-2">R$</span>
                    <span className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none">
                        47
                    </span>
                    <div className="flex flex-col items-start ml-1">
                        <span className="text-2xl md:text-4xl font-black text-sky-400">,90</span>
                        <span className="text-[10px] font-black text-sky-500/60 uppercase tracking-tighter">Único</span>
                    </div>
                </div>
                
                <div className="mt-4 px-4 py-1.5 bg-sky-500/10 rounded-lg border border-sky-500/20">
                    <p className="text-sky-400 font-black text-xs md:text-lg uppercase tracking-widest animate-pulse">
                        SEM MENSALIDADES
                    </p>
                </div>
            </div>
          </div>

          {/* Optimized Features Grid for Mobile */}
          <div className="text-left mb-10">
            <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-6 text-center">O que você vai receber:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-2xl mx-auto">
                {[
                "App KeyMaster Pro",
                "Dicionário 2.000 Acordes",
                "Campo Harmônico Visual",
                "Escalas e Modos Gregos",
                "Instalação no Celular/PC",
                "Acesso Vitalício"
                ].map((feature, i) => (
                <div key={i} className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/5">
                    <div className="flex-shrink-0 w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center shadow-lg shadow-sky-500/20">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span className="text-slate-200 font-bold text-xs uppercase tracking-tight">{feature}</span>
                </div>
                ))}
            </div>
          </div>

          {/* High Conversion Button */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-sky-400 blur-lg rounded-[24px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <button 
                onClick={handlePurchase}
                className="relative w-full py-5 md:py-6 bg-sky-500 hover:bg-sky-400 text-white font-black text-xl md:text-2xl rounded-[24px] shadow-xl transition-all active:scale-95 flex flex-col items-center justify-center leading-tight overflow-hidden"
            >
                <span className="relative z-10">GARANTIR MEU ACESSO</span>
                <span className="text-[10px] opacity-80 font-bold tracking-widest uppercase mt-1">Clique para começar agora</span>
                
                {/* Visual Shine Animation */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover:animate-shine" />
            </button>
          </div>
          
          {/* Trust Badges - Tighter for Mobile */}
          <div className="mt-8 flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center space-x-6">
                <div className="flex flex-col items-center opacity-40">
                    <svg className="w-5 h-5 text-slate-400 mb-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[8px] font-black uppercase tracking-widest">Seguro</span>
                </div>
                <div className="w-[1px] h-6 bg-white/10"></div>
                <div className="flex flex-col items-center opacity-40">
                    <svg className="w-5 h-5 text-slate-400 mb-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[8px] font-black uppercase tracking-widest">Garantia</span>
                </div>
            </div>
            
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest max-w-[200px] leading-relaxed">
              Satisfação garantida ou seu dinheiro de volta em até 7 dias.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
