import type { Quiz } from '@models/types';
import { fetcher } from '@utils/fetcher.ts';

export const getQuizzes = () => fetcher<Quiz[]>('/quizzes');
export const getQuiz = (id: number) => fetcher<Quiz>(`/quizzes/${id}`);
export const createQuiz = (quiz: Quiz) =>
  fetcher<Quiz>('/quizzes', {
    method: 'POST',
    body: JSON.stringify(quiz),
  });
export const deleteQuiz = (id: number) => fetcher<void>(`/quizzes/${id}`, { method: 'DELETE' });
