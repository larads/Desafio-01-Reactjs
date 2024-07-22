import React from 'react';

export function Input({
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <input
      className="border border-gray-700 rounded-lg bg-gray-600 text-gray-100 h-13 p-4 w-full leading-tight placeholder-gray-300"
      placeholder="Adicione uma nova tarefa"
      {...rest}
    />
  );
}
