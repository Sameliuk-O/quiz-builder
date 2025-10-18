import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Header: FC = () => {
  return (
    <header className="bg-white shadow-md mb-6">
      <nav className="max-w-3xl mx-auto flex items-center justify-between p-4">
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
              } hover:text-blue-500 transition`
            }
          >
            Create Quiz
          </NavLink>
          <NavLink
            to="/quizzes"
            className={({ isActive }) =>
              `${
                isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
              } hover:text-blue-500 transition`
            }
          >
            Quiz List
          </NavLink>
        </div>
        <h1 className="text-gray-500 font-light">Quiz Builder</h1>
      </nav>
    </header>
  );
};

export default Header;
