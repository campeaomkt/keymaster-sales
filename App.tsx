
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PianoDemo from './components/PianoDemo';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PianoDemo />
        <Features />
        <Testimonials />
        <Pricing />
        <Guarantee />
        <FAQ />
      </main>
      <footer className="py-20 border-t border-white/5 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Footer Logo - Synced with Header */}
            <div 
              className="flex items-center gap-3 mb-8 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 bg-gradient-to-b from-[#38bdf8] to-[#2563eb] rounded-xl flex items-center justify-center shadow-lg shadow-sky-900/10 relative overflow-hidden transition-transform group-hover:scale-105">
                <div className="bg-white w-6 h-6 rounded-[3px] relative overflow-hidden flex">
                  <div className="absolute inset-0 flex">
                    <div className="flex-1 border-r border-black/5"></div>
                    <div className="flex-1 border-r border-black/5"></div>
                    <div className="flex-1"></div>
                  </div>
                  <div className="absolute top-0 left-[20%] w-[20%] h-[55%] bg-[#0f172a] rounded-b-[1px]"></div>
                  <div className="absolute top-0 left-[58%] w-[20%] h-[55%] bg-[#0f172a] rounded-b-[1px]"></div>
                </div>
              </div>
              <h1 className="text-2xl font-black tracking-tighter">
                <span className="text-white">Key</span>
                <span className="text-[#38bdf8]">Master</span>
              </h1>
            </div>
            
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-sm text-slate-500 font-medium">
              <a 
                href="#demo" 
                onClick={(e) => scrollToSection(e, 'demo')}
                className="hover:text-white transition-colors"
              >
                Piano Virtual
              </a>
              <a 
                href="#features" 
                onClick={(e) => scrollToSection(e, 'features')}
                className="hover:text-white transition-colors"
              >
                Recursos
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => scrollToSection(e, 'pricing')}
                className="hover:text-white transition-colors"
              >
                Preços
              </a>
              <a 
                href="#top" 
                onClick={(e) => scrollToSection(e, 'top')}
                className="hover:text-white transition-colors"
              >
                Privacidade
              </a>
              <a 
                href="#top" 
                onClick={(e) => scrollToSection(e, 'top')}
                className="hover:text-white transition-colors"
              >
                Termos
              </a>
            </nav>

            <div className="h-[1px] w-full max-w-xs bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

            <p className="text-[10px] text-slate-600 uppercase tracking-[0.3em] font-bold">
              © 2026 KeyMaster Pro. Desenvolvido para músicos que buscam a excelência.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
