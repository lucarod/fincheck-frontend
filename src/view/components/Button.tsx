import { ComponentProps } from 'react';
import { cn } from 'src/app/utils/cn';
import { Spinner } from './Spinner';

interface ButtonProps extends ComponentProps<'button'> {
  isPending?: boolean;
}

export function Button({ className, isPending, disabled, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isPending}
      className={cn(
        `bg-teal-900 hover:bg-teal-800 px-6 h-[54px] rounded-2xl font-medium flex items-center justify-center
        text-white disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed
        transition-all tracking-[-0.5px]`,
        className
      )}
    >
      {!isPending && children}
      {isPending && <Spinner className="w-6 h-6" />}
    </button>
  );
}
