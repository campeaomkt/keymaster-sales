
import React from 'react';

const Testimonials: React.FC = () => {
  const transformations = [
    {
      title: "Percepção Musical Elevada",
      tag: "Domínio Cognitivo",
      content: "Sua percepção musical será transformada. Em poucas semanas, a teoria abstrata se tornará instintiva e você finalmente sentirá a segurança de tocar com total liberdade em qualquer tom.",
      icon: (
        <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Vocabulário de Acordes Infinito",
      tag: "Harmonia Avançada",
      content: "Diga adeus aos acordes básicos e repetitivos. Você dominará inversões e voicings profissionais que darão um brilho sofisticado a cada música, impressionando quem te ouve.",
      icon: (
        <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Ouvido Blindado e Preciso",
      tag: "Independência Musical",
      content: "Você aprenderá a decifrar músicas de ouvido com precisão absoluta. Ao entender a lógica dos Campos Harmônicos, você será capaz de antecipar o próximo acorde antes mesmo dele acontecer.",
      icon: (
        <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(14,165,233,0.1),transparent)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 italic uppercase tracking-tighter text-white">
            SUA NOVA REALIDADE <br/> <span className="text-sky-500 logo-glow underline decoration-sky-500/30">COM O KEYMASTER</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-medium max-w-xl mx-auto uppercase tracking-widest opacity-60">
            A transformação que você sempre buscou está a apenas alguns cliques de distância.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((item, idx) => (
            <div key={idx} className="glass p-8 rounded-[40px] border border-white/5 hover:border-sky-500/30 transition-all duration-500 group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-6 border border-sky-500/20 shadow-[0_0_20px_rgba(14,165,233,0.1)] group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                
                <span className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em] mb-2">{item.tag}</span>
                <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tight">{item.title}</h4>
                
                <div className="w-10 h-[1px] bg-sky-500/30 mb-6 group-hover:w-20 transition-all duration-500"></div>
                
                <p className="text-slate-400 text-sm leading-relaxed italic font-medium">
                  "{item.content}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/5 px-6 py-3 rounded-full border border-white/10">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                <span className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em]">O próximo a evoluir será você.</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
