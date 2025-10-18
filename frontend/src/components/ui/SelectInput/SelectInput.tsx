import type { FC, ChangeEvent } from 'react';
import type { Question } from '@models/types.ts';

interface Props {
  id: string;
  value: string;
  onChange: (value: Question['type']) => void;
  options: { value: string; label: string }[];
  className?: string;
}

const SelectInput: FC<Props> = ({ id, value, onChange, options, className }) => {
  return (
    <select
      id={id}
      value={value}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value as Question['type'])}
      className={`border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
