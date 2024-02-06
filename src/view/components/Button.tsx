import { ComponentProps } from 'react';
import { cn } from 'src/app/utils/cn';
import { Spinner } from '@components/Spinner';

interface ButtonProps extends ComponentProps<'button'> {
  isPending?: boolean;
  variant?: 'danger' | 'ghost';
}

export function Button({ className, isPending, disabled, children, variant, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isPending}
      className={cn(
        `bg-teal-900 hover:bg-teal-800 px-6 h-[54px] rounded-2xl font-medium flex items-center justify-center
        text-white disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed
        transition-all tracking-[-0.5px]`,
        variant === 'danger' && 'bg-red-900 hover:bg-red-800',
        variant === 'ghost' && 'bg-transparent border border-gray-800 text-gray-800 hover:bg-gray-800/5',
        className
      )}
    >
      {!isPending && children}
      {isPending && <Spinner className="w-6 h-6" />}
    </button>
  );
}
