import { type FC } from 'react';
import { Controller, useFormContext, useFieldArray } from 'react-hook-form';
import type { Question } from '@models/types';
import { TextInput } from '@components/ui/TextInput';
import { Button } from '@components/ui/Button';
import { SelectInput } from '@components/ui/SelectInput';
import { CONST_TYPE_INPUTS } from '@constants/constTypesInput.ts';

interface Props {
  index: number;
  onRemove?: () => void;
}

const QuestionInput: FC<Props> = ({ index, onRemove }) => {
  const { control, watch } = useFormContext<{ questions: Question[] }>();
  const question = watch(`questions.${index}`);

  const {
    fields: optionFields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: `questions.${index}.options`,
  });

  return (
    <div className="border p-4 rounded-lg shadow-sm bg-gray-50 mb-4">
      <div className="flex justify-between items-center mb-2">
        <Controller
          name={`questions.${index}.text`}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput
              {...field}
              id={`questions-${index}-text`}
              placeholder="Question text"
              className="flex-1"
            />
          )}
        />
        {onRemove && (
          <>
            <Button
              type="button"
              color="red"
              className="ml-2 hidden sm:inline-flex"
              onClick={onRemove}
            >
              Remove
            </Button>
            <Button
              type="button"
              color="red"
              className="ml-2 sm:hidden px-2 py-1"
              onClick={onRemove}
            >
              X
            </Button>
          </>
        )}
      </div>

      <Controller
        name={`questions.${index}.type`}
        control={control}
        render={({ field }) => (
          <SelectInput
            id={`questions-${index}-type`}
            {...field}
            options={CONST_TYPE_INPUTS}
            className="w-full mb-3"
          />
        )}
      />

      {question?.type === 'CHECKBOX' && (
        <div className="pl-2 space-y-2">
          {optionFields.map((opt, optIndex) => (
            <Controller
              key={opt.id}
              name={`questions.${index}.options.${optIndex}.text`}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <div className="flex items-center gap-2">
                  <TextInput
                    {...field}
                    id={`questions-${index}-options-${optIndex}-text`}
                    placeholder="Option text"
                    className="flex-1"
                  />
                  <Button type="button" color="red" onClick={() => remove(optIndex)}>
                    X
                  </Button>
                </div>
              )}
            />
          ))}
          <Button type="button" color="blue" onClick={() => append({ text: '', isCorrect: false })}>
            Add option
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuestionInput;
