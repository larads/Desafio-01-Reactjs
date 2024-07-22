import React from 'react';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({ children, ...rest }: Props) {
  return (
    <button
      className="flex items-center justify-center h-13 p-4 bg-blue-600 text-white rounded-lg gap-2 font-bold text-sm transition duration-200 hover:bg-purple-800"
      {...rest}
    >
      {children}
    </button>
  );
}
