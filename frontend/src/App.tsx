import type { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { CreateQuiz } from '@pages/CreateQuiz';
import { QuizList } from '@pages/QuizList';
import { QuizDetail } from '@pages/QuizDetail';
import { Header } from '@components/Header';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CreateQuiz />} />
        <Route path="/quizzes" element={<QuizList />} />
        <Route path="/quizzes/:id" element={<QuizDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
