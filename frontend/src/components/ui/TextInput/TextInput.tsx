import type { FC, ChangeEvent } from 'react';

interface Props {
  id: string;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const TextInput: FC<Props> = ({ id, value, disabled, onChange, placeholder, className }) => {
  return (
    <input
      id={id}
      type="text"
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange && onChange(e.target.value)}
      className={`border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    />
  );
};

export default TextInput;
