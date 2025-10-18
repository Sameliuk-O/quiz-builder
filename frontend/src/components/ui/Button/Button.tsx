import type { FC, ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'blue' | 'red' | 'green' | 'gray';
}

const colors: Record<string, string> = {
  gray: 'bg-gray-500 hover:bg-gray-600 text-white',
  blue: 'bg-blue-500 hover:bg-blue-600 text-white',
  red: 'bg-red-500 hover:bg-red-600 text-white',
  green: 'bg-green-500 hover:bg-green-600 text-white',
};

const Button: FC<Props> = ({ children, color = 'blue', className, ...rest }) => {
  return (
    <button {...rest} className={`px-3 py-1 rounded-md transition ${colors[color]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
