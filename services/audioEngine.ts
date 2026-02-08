
import { FREQUENCIES, NOTES } from '../constants';
import { NoteName } from '../types';

export class AudioEngine {
  private ctx: AudioContext | null = null;
  private gainNode: GainNode | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.gainNode = this.ctx.createGain();
      this.gainNode.connect(this.ctx.destination);
    }
  }

  /**
   * Simulates a piano-like sound using additive synthesis and filters
   */
  public playNote(note: NoteName, octaveShift: number = 0, duration: number = 2.5) {
    if (!this.ctx || !this.gainNode) return;
    
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const baseFreq = FREQUENCIES[note];
    const freq = baseFreq * Math.pow(2, octaveShift);
    const now = this.ctx.currentTime;

    // Main Gain for this specific note
    const noteGain = this.ctx.createGain();
    noteGain.gain.setValueAtTime(0, now);
    // Sharp attack
    noteGain.gain.linearRampToValueAtTime(0.3, now + 0.01);
    // Long natural decay
    noteGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    // Filter to simulate the loss of high frequencies over time (warmer sound)
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2000, now);
    filter.frequency.exponentialRampToValueAtTime(400, now + duration);
    filter.Q.setValueAtTime(1, now);

    // Harmonics to create a "Piano" timber
    // A real piano string has multiple overtones
    const harmonics = [
      { ratio: 1, gain: 0.6, type: 'triangle' as OscillatorType },   // Fundamental
      { ratio: 2, gain: 0.2, type: 'sine' as OscillatorType },       // 2nd Harmonic
      { ratio: 3, gain: 0.1, type: 'sine' as OscillatorType },       // 3rd Harmonic
      { ratio: 4, gain: 0.05, type: 'sine' as OscillatorType },      // 4th Harmonic
    ];

    harmonics.forEach(h => {
      const osc = this.ctx!.createOscillator();
      const g = this.ctx!.createGain();
      
      osc.type = h.type;
      osc.frequency.setValueAtTime(freq * h.ratio, now);
      
      g.gain.setValueAtTime(h.gain, now);
      
      osc.connect(g);
      g.connect(filter);
      
      osc.start(now);
      osc.stop(now + duration);
    });

    filter.connect(noteGain);
    noteGain.connect(this.gainNode);
  }

  public playChord(root: NoteName, intervals: number[]) {
    const rootIndex = NOTES.indexOf(root);
    // Playing the chord with a slightly increased duration for resonance
    intervals.forEach((interval, i) => {
      const noteIndex = (rootIndex + interval) % NOTES.length;
      const octaveShift = Math.floor((rootIndex + interval) / NOTES.length);
      // Subtle delay between notes for a "human" strumming effect if desired, 
      // but here we play together for a clean chord.
      this.playNote(NOTES[noteIndex], octaveShift, 3.0);
    });
  }
}
