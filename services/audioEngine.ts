
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

  public playNote(note: NoteName, octaveShift: number = 0, duration: number = 0.5) {
    if (!this.ctx || !this.gainNode) return;
    
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const baseFreq = FREQUENCIES[note];
    const freq = baseFreq * Math.pow(2, octaveShift);

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    osc1.type = 'triangle';
    osc2.type = 'sine';
    
    osc1.frequency.setValueAtTime(freq, this.ctx.currentTime);
    osc2.frequency.setValueAtTime(freq * 1.005, this.ctx.currentTime); // Slight detune for richness

    noteGain.gain.setValueAtTime(0, this.ctx.currentTime);
    noteGain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + 0.05);
    noteGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

    osc1.connect(noteGain);
    osc2.connect(noteGain);
    noteGain.connect(this.gainNode);

    osc1.start();
    osc2.start();
    osc1.stop(this.ctx.currentTime + duration);
    osc2.stop(this.ctx.currentTime + duration);
  }

  public playChord(root: NoteName, intervals: number[]) {
    const rootIndex = NOTES.indexOf(root);
    intervals.forEach(interval => {
      const noteIndex = (rootIndex + interval) % NOTES.length;
      const octaveShift = Math.floor((rootIndex + interval) / NOTES.length);
      this.playNote(NOTES[noteIndex], octaveShift);
    });
  }
}
