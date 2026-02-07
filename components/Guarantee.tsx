
import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass rounded-[40px] p-8 md:p-16 border border-white/5 flex flex-col md:flex-row items-center gap-12 relative">
          {/* Decorative element */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-sky-500/10 blur-3xl -z-10 rounded-full"></div>
          
          <div className="flex-shrink-0 relative group">
            {/* Guarantee Badge Visual */}
            <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-full flex items-center justify-center p-1 shadow-2xl shadow-sky-500/20 group-hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full bg-slate-950 rounded-full flex flex-col items-center justify-center text-center p-4 border border-white/10">
                <span className="text-4xl md:text-6xl font-black text-white leading-none">7</span>
                <span className="text-sm md:text-lg font-bold text-sky-400 uppercase tracking-widest">Dias</span>
                <div className="w-8 h-1 bg-white/20 my-2"></div>
                <span className="text-[10px] md:text-xs font-medium text-slate-400 uppercase tracking-tighter">Garantia Total</span>
              </div>
            </div>
            {/* Floating icon */}
            <div className="absolute -bottom-4 -right-4 bg-sky-500 rounded-2xl p-4 shadow-xl rotate-12">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white italic">
              RISCO <span className="text-sky-400 logo-glow">ZERO</span> PARA VOCÊ.
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Acreditamos tanto na eficiência do <span className="text-white font-bold">KeyMaster Pro</span> que oferecemos uma garantia blindada. Explore todos os recursos, aprenda os campos harmônicos e sinta a evolução. 
            </p>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <p className="text-sm text-slate-300 italic">
                "Se em até 7 dias você sentir que o método não é para você, basta nos enviar um e-mail e devolveremos 100% do seu investimento. Sem perguntas, sem letras miúdas."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
