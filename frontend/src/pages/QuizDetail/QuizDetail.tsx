import { type FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getQuiz } from '@api/quizzes';
import { type Quiz, TypeInput } from '@models/types';
import TextInput from '../../components/ui/TextInput/TextInput.tsx';

const QuizDetail: FC = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState<Quiz | null>(null);

  useEffect(() => {
    if (!id) return;
    getQuiz(Number(id)).then(setQuiz);
  }, [id]);

  if (!quiz) return <div>Loading...</div>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">{quiz.title}</h1>

      {quiz.questions.map((question, qi) => (
        <div key={question.id} className="border p-4 rounded-lg shadow-sm bg-gray-50 mb-4">
          {question.type === TypeInput.INPUT && (
            <div className="flex flex-col mb-2">
              <label className="font-semibold mb-1">
                {qi + 1}. {question.text}
              </label>
              <TextInput
                id={`question-${qi}`}
                placeholder="Your answer here"
                className="border p-2 rounded-md w-full bg-gray-100 ml-2"
                disabled
              />
            </div>
          )}

          {question.type === TypeInput.BOOLEAN && (
            <fieldset className="mb-2">
              <legend className="font-semibold mb-1">
                {qi + 1}. {question.text}
              </legend>
              <div className="flex gap-4 ml-2">
                <label className="flex items-center gap-1">
                  <input type="radio" name={`q-${question.id}`} disabled />
                  True
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name={`q-${question.id}`} disabled />
                  False
                </label>
              </div>
            </fieldset>
          )}

          {question.type === TypeInput.CHECKBOX && (
            <div className="mb-2 ml-2">
              <p className="font-semibold mb-1">
                {qi + 1}. {question.text}
              </p>
              <div className="flex flex-col gap-1 pl-2">
                {question.options?.map((option, i) => (
                  <label key={i} className="flex items-center gap-2">
                    <input type="checkbox" disabled />
                    {option.text}
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuizDetail;
