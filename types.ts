
export type NoteName = 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#' | 'A' | 'A#' | 'B';

export interface ChordType {
  name: string;
  intervals: number[];
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
