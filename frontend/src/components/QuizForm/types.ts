import type { Question, Quiz } from '@models/types.ts';

export type QuizFormValues = {
  title: string;
  questions: Question[];
};

export interface QuizFormProps {
  onSubmit: (quiz: Quiz) => void;
}
