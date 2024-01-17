import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ className, ...props}: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-teal-900 hover:bg-teal-800 px-6 h-[54px] rounded-2xl font-medium
      text-white disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed
      transition-all tracking-[-0.5px] ${className}`
      }
    />
  );
}
