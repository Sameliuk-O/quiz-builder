export const TypeInput = {
  BOOLEAN: 'BOOLEAN',
  INPUT: 'INPUT',
  CHECKBOX: 'CHECKBOX',
} as const;

export type TypeInput = (typeof TypeInput)[keyof typeof TypeInput];

export interface Option {
  id?: number;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id?: number;
  text: string;
  type: TypeInput;
  options?: Option[];
}

export interface Quiz {
  id?: number;
  title: string;
  questions: Question[];
  questionCount?: number;
}
