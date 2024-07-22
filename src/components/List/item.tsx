import {  Trash2, Circle, CircleCheckBig } from 'lucide-react';
import { ITask } from '../../app';

interface Props {
  data: ITask;
  removeTask: (id: number) => void;
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void;
}

export function Item({ data, removeTask, toggleTaskStatus }: Props) {
  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked });
  }

  function handleRemove() {
    removeTask(data.id);
  }

  const paragraphCheckedClassname = data.isChecked
    ? 'line-through text-gray-300'
    : '';

  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-600 mb-5">
      <div>
        <label
          htmlFor={`checkbox-${data.id}`}
          onClick={handleTaskToggle}
          className="flex items-center gap-3 cursor-pointer"
        >
          <span
            className={`rounded-full h-4.5 w-4.5 flex items-center justify-center transition-all`}
            onClick={handleTaskToggle} 
          >
            {data.isChecked ? <CircleCheckBig size={24} className='text-purple-700' /> : <Circle size={24} className='text-blue-600' />}
          </span>

          <p className={`text-sm leading-snug user-select-none transition-all  ${paragraphCheckedClassname}`}>
            {data.text}
          </p>
        </label>
      </div>

      <button onClick={handleRemove}>
        <Trash2 size={28} className="text-gray-300 transition-colors hover:text-red-600" />
      </button>
    </div>
  );
}
