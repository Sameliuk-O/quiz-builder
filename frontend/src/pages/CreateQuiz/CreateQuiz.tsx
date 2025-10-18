import { QuizForm } from '@components/QuizForm';
import { createQuiz } from '@api/quizzes';
import { useNavigate } from 'react-router-dom';
import type { FC } from 'react';

const CreateQuiz: FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (quiz: any) => {
    await createQuiz(quiz);
    navigate('/quizzes');
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Create Quiz</h1>
      <QuizForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateQuiz;
