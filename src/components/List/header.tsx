interface Props {
  tasksCounter: number;
  checkedTasksCounter: number;
}

export function Header({ tasksCounter, checkedTasksCounter }: Props) {
  return (
    <header className="flex flex-1 items-center justify-between">
      <aside className="flex items-center gap-2 font-bold text-blue">
        <p className="text-sm text-blue-600">Tarefas criadas</p>
        <span className="px-2 py-0.5 rounded-full text-xs text-gray-200 bg-gray-600">
          {tasksCounter}
        </span>
      </aside>

      <aside className="flex items-center gap-2 font-bold text-purple">
        <p className="text-sm text-purple-800">Concluídas</p>
        <span className="px-2 py-0.5 rounded-full text-xs text-gray-200 bg-gray-600">
          {tasksCounter === 0 ? tasksCounter : `${checkedTasksCounter} de ${tasksCounter}`}
        </span>
      </aside>
    </header>
  );
}
