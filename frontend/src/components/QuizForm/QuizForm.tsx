import { type FC } from 'react';
import { useForm, useFieldArray, FormProvider, Controller } from 'react-hook-form';
import { QuestionInput } from '@components/QuestionInput';
import { TextInput } from '@components/ui/TextInput';
import { Button } from '@components/ui/Button';
import type { QuizFormProps, QuizFormValues } from '@components/QuizForm/types.ts';
import { TypeInput } from '@models/types.ts';

const QuizForm: FC<QuizFormProps> = ({ onSubmit }) => {
  const methods = useForm<QuizFormValues>({
    defaultValues: { title: '', questions: [] },
  });

  const { handleSubmit, watch, control } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions',
  });

  const watchedTitle = watch('title');
  const watchedQuestions = watch('questions');

  const isSubmitDisabled =
    !watchedTitle?.trim() ||
    watchedQuestions.length === 0 ||
    watchedQuestions.some((q) => {
      if (!q.text.trim()) return true;
      if (q.type === TypeInput.CHECKBOX && (!q.options || q.options.length === 0)) return true;
      return !!(
        q.type === TypeInput.CHECKBOX &&
        q.options &&
        q.options.some((o) => !o.text.trim())
      );
    });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => onSubmit(data))}
        className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Create a New Quiz</h2>

        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput
              id="quiz-title"
              placeholder="Quiz title"
              value={field.value}
              onChange={(val: string) => field.onChange(val)}
              className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          )}
        />

        {fields.map((field, index) => (
          <QuestionInput key={field.id} index={index} onRemove={() => remove(index)} />
        ))}

        <div className="flex gap-4 justify-end">
          <Button
            type="button"
            color="blue"
            onClick={() => append({ text: '', type: 'INPUT', options: [] })}
          >
            Add Question
          </Button>

          <Button
            type="submit"
            color={isSubmitDisabled ? 'gray' : 'green'}
            disabled={isSubmitDisabled}
          >
            Create Quiz
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default QuizForm;
