
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Dúvidas Frequentes</h2>
        
        <div className="space-y-4">
          {FAQS.map((item, idx) => (
            <div key={idx} className="glass rounded-2xl border border-white/5 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-slate-200">{item.question}</span>
                <svg 
                  className={`w-5 h-5 text-sky-500 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-300 ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
