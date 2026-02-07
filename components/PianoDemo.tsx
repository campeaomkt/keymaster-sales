
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { AudioEngine } from '../services/audioEngine';
import { NOTES, CHORDS, NOTE_LABELS_PT } from '../constants';
import { NoteName } from '../types';

const PianoDemo: React.FC = () => {
  const [rootNote, setRootNote] = useState<NoteName>('C');
  const [selectedChordType, setSelectedChordType] = useState(CHORDS[0]);
  const audioRef = useRef<AudioEngine | null>(null);

  useEffect(() => {
    audioRef.current = new AudioEngine();
  }, []);

  // Calculate notes of the current chord
  const currentChordNotes = useMemo(() => {
    const rootIndex = NOTES.indexOf(rootNote);
    return selectedChordType.intervals.map(interval => {
      const noteIndex = (rootIndex + interval) % NOTES.length;
      return NOTES[noteIndex];
    });
  }, [rootNote, selectedChordType]);

  const handlePlayChord = () => {
    if (!audioRef.current) return;
    audioRef.current.playChord(rootNote, selectedChordType.intervals);
  };

  const renderKeys = () => {
    const keys = [];
    const rootIndex = NOTES.indexOf(rootNote);
    const activeIndices = selectedChordType.intervals.map(i => rootIndex + i);

    // Render 24 keys (2 octaves)
    for (let i = 0; i < 24; i++) {
      const noteName = NOTES[i % NOTES.length];
      const isBlack = noteName.includes('#');
      const isActive = activeIndices.includes(i);
      const ptLabel = NOTE_LABELS_PT[noteName];

      if (isBlack) {
        keys.push(
          <div 
            key={i} 
            className={`piano-key-black flex items-end justify-center pb-2 ${isActive ? 'bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.8)]' : 'bg-slate-800'}`}
          >
             {isActive && <span className="text-[6px] font-bold text-white uppercase">{ptLabel}</span>}
          </div>
        );
      } else {
        keys.push(
          <div 
            key={i} 
            className={`piano-key-white relative flex flex-col justify-end items-center pb-2 border-slate-200 ${isActive ? 'bg-sky-400 !border-sky-300 shadow-[0_0_15px_rgba(14,165,233,0.4)]' : 'bg-white'}`}
          >
            <span className={`text-[8px] font-black uppercase ${isActive ? 'text-white' : 'text-slate-400'}`}>
              {ptLabel}
            </span>
          </div>
        );
      }
    }
    return keys;
  };

  return (
    <section id="demo" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter italic text-white">INTERESSE: SINTA A LÓGICA</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Experimente a interface que integra <span className="text-sky-400 font-bold">Acordes, Campos e Escalas</span> de forma visual. Selecione uma nota e ouça a perfeição harmônica.
          </p>
        </div>

        <div className="max-w-5xl mx-auto glass rounded-[40px] p-8 md:p-12 shadow-2xl border border-white/10">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Control Left */}
            <div>
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4 block">Nota Tônica</label>
              <div className="grid grid-cols-6 gap-2">
                {NOTES.map((note) => (
                  <button
                    key={note}
                    onClick={() => setRootNote(note)}
                    className={`h-10 rounded-lg text-xs font-bold transition-all border ${
                      rootNote === note 
                        ? 'bg-sky-500 border-sky-400 text-white shadow-lg shadow-sky-500/20' 
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-600'
                    }`}
                  >
                    {note}
                  </button>
                ))}
              </div>
            </div>

            {/* Control Right */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block">Variações do Acorde</label>
                <span className="text-[9px] text-sky-500/60 font-bold uppercase tracking-widest italic">Demo de Acordes</span>
              </div>
              <div className="relative">
                <select 
                  value={selectedChordType.name}
                  onChange={(e) => {
                    const found = CHORDS.find(c => c.name === e.target.value);
                    if (found) setSelectedChordType(found);
                  }}
                  className="w-full h-14 bg-slate-900 border border-slate-800 rounded-2xl px-6 text-white font-bold focus:outline-none focus:border-sky-500 appearance-none"
                >
                  {CHORDS.map(c => (
                    <option key={c.name} value={c.name}>{c.name}</option>
                  ))}
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-sky-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
              <p className="mt-2 text-[10px] text-slate-500 italic">
                No App completo, visualize Escalas e Campos Harmônicos sobrepostos ao teclado.
              </p>
            </div>
          </div>

          {/* Chord Visualizer Display */}
          <div className="bg-slate-950/50 rounded-3xl p-10 border border-white/5 text-center mb-12 relative overflow-hidden">
             {/* Decorative subtle pulse */}
             <div className="absolute inset-0 bg-sky-500/5 animate-pulse pointer-events-none"></div>
             
             <h3 className="text-5xl md:text-7xl font-black mb-2 text-white flex items-center justify-center relative z-10">
                {rootNote}<span className="text-sky-400 logo-glow">{selectedChordType.name}</span>
             </h3>
             <p className="text-sky-500/80 text-xs font-bold uppercase tracking-[0.3em] mb-8 relative z-10">
                {NOTE_LABELS_PT[rootNote]} {selectedChordType.name.toUpperCase()}
             </p>
             
             <div className="flex justify-center space-x-4 relative z-10">
                {currentChordNotes.map((note, i) => (
                   <div key={i} className="w-12 h-12 bg-slate-900 rounded-xl border border-white/10 flex items-center justify-center font-black text-white shadow-inner">
                      {note}
                   </div>
                ))}
             </div>
          </div>

          <p className="text-center text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-4 italic">
            Arraste para o lado se necessário →
          </p>

          <div className="overflow-x-auto pb-4 custom-scrollbar">
            <div className="inline-flex bg-slate-950 p-6 rounded-[30px] border border-white/5 items-start">
              {renderKeys()}
            </div>
          </div>
          
          <div className="mt-12 flex flex-col items-center">
            <button 
              onClick={handlePlayChord}
              className="group flex items-center space-x-4 bg-sky-500 hover:bg-sky-400 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all glow-button mb-4"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 3v18l15-9L5 3z" />
              </svg>
              <span>OUVIR ACORDE</span>
            </button>
            <p className="text-[11px] text-slate-500 font-medium max-w-xs text-center">
              Apenas uma amostra. O KeyMaster Pro entrega a tríade: Acordes, Escalas e Harmonia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PianoDemo;
