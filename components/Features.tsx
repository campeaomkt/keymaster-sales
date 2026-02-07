
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Dicionário de Acordes",
      description: "Mais de 2.000 variações mapeadas visualmente. Entenda inversões e voicings profissionais com um toque.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: "sky"
    },
    {
      title: "Campo Harmônico",
      description: "Aprenda a tirar músicas de ouvido. Visualize as famílias de acordes e como elas se conectam em qualquer tom.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      color: "indigo"
    },
    {
      title: "Escalas e Modos",
      description: "A base definitiva para improvisação. Guia visual completo de escalas maiores, menores e todos os Modos Gregos.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: "emerald"
    },
    {
      title: "100% Portátil",
      description: "Instale no celular ou tablet. Tenha seu laboratório harmônico sempre no bolso, mesmo sem internet.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: "pink"
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight italic">O DESEJO DE TODO MÚSICO</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Uma plataforma desenhada para quem quer parar de apenas copiar e começar a entender a alma da música.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="glass p-8 rounded-[32px] hover:border-sky-500/50 transition-all group relative overflow-hidden">
              <div className={`w-12 h-12 mb-6 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110
                ${feature.color === 'sky' ? 'bg-sky-500/10 text-sky-500' : ''}
                ${feature.color === 'indigo' ? 'bg-indigo-500/10 text-indigo-500' : ''}
                ${feature.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-500' : ''}
                ${feature.color === 'pink' ? 'bg-pink-500/10 text-pink-500' : ''}
              `}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
              
              {/* Subtle hover background highlight */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity
                ${feature.color === 'sky' ? 'bg-sky-500' : ''}
                ${feature.color === 'indigo' ? 'bg-indigo-500' : ''}
                ${feature.color === 'emerald' ? 'bg-emerald-500' : ''}
                ${feature.color === 'pink' ? 'bg-pink-500' : ''}
              `}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
