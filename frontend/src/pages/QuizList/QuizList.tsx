import { type FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteQuiz, getQuizzes } from '@api/quizzes';
import type { Quiz } from 'types/types';
import { Button } from '@components/ui/Button';

const QuizList: FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  const fetchQuizzes = async () => {
    const data = await getQuizzes();
    setQuizzes(data);
  };

  const handleDelete = async (id: number | undefined) => {
    if (!id) return;
    await deleteQuiz(id);
    setQuizzes(quizzes.filter((q) => q.id !== id));
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">Quizzes</h1>
      <ul className="space-y-4">
        {quizzes.map((q) => (
          <li
            key={q.id}
            className="flex justify-between items-center bg-white shadow-md rounded-lg hover:shadow-lg transition"
          >
            <Link
              to={`/quizzes/${q.id}`}
              className="flex-1 text-gray-800 font-medium hover:text-blue-600 transition p-4"
            >
              {q.title} ({q?.questionCount ?? 0})
            </Link>
            <Button
              onClick={() => handleDelete(q.id)}
              className="ml-4 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition cursor-pointer mr-4"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
      {quizzes.length === 0 && (
        <p className="text-gray-500 mt-4 text-center">No quizzes found. Create your first quiz!</p>
      )}
    </div>
  );
};

export default QuizList;
