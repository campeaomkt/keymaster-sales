
import { NoteName, ChordType, Testimonial, FAQItem } from './types';

export const NOTES: NoteName[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export const NOTE_LABELS_PT: Record<NoteName, string> = {
  'C': 'DÓ', 'C#': 'DÓ#', 'D': 'RÉ', 'D#': 'RÉ#', 'E': 'MI',
  'F': 'FÁ', 'F#': 'FÁ#', 'G': 'SOL', 'G#': 'SOL#', 'A': 'LÁ',
  'A#': 'LÁ#', 'B': 'SI'
};

export const FREQUENCIES: Record<NoteName, number> = {
  'C': 261.63, 'C#': 277.18, 'D': 293.66, 'D#': 311.13, 'E': 329.63,
  'F': 349.23, 'F#': 369.99, 'G': 392.00, 'G#': 415.30, 'A': 440.00,
  'A#': 466.16, 'B': 493.88
};

export const CHORDS: ChordType[] = [
  { name: 'Maior', intervals: [0, 4, 7] },
  { name: 'Menor', intervals: [0, 3, 7] },
  { name: '7M', intervals: [0, 4, 7, 11] },
  { name: 'm7', intervals: [0, 3, 7, 10] },
  { name: '7', intervals: [0, 4, 7, 10] },
  { name: 'Sus4', intervals: [0, 5, 7] }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ricardo Mendes",
    role: "Iniciante",
    content: "O KeyMaster mudou minha percepção sobre teoria musical. Em uma semana já estava tocando meus primeiros campos harmônicos.",
    avatar: "https://picsum.photos/seed/ricardo/100/100"
  },
  {
    name: "Ana Julia",
    role: "Estudante de Música",
    content: "A interface é incrível e a lógica de campo harmônico é muito fácil de entender. Recomendo para todos os níveis.",
    avatar: "https://picsum.photos/seed/ana/100/100"
  },
  {
    name: "Pedro Santos",
    role: "Produtor Musical",
    content: "Ferramenta indispensável para quem quer compor com rapidez e entender a lógica por trás dos acordes.",
    avatar: "https://picsum.photos/seed/pedro/100/100"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Preciso de um teclado físico para usar?",
    answer: "Não! O KeyMaster Pro possui um teclado virtual completo e interativo, mas você também pode conectar seu teclado MIDI via USB para uma experiência profissional."
  },
  {
    question: "Quanto tempo demora para ver resultados?",
    answer: "Nossos alunos relatam uma melhora drástica na compreensão de acordes e harmonia já nas primeiras 48 horas de uso."
  },
  {
    question: "O acesso é vitalício?",
    answer: "Sim, ao adquirir o KeyMaster Pro hoje, você garante acesso vitalício a todas as atualizações futuras e materiais complementares."
  }
];
