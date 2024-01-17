import { CrossCircledIcon } from '@radix-ui/react-icons';
import { ComponentProps, forwardRef, ForwardRefRenderFunction } from 'react';
import { cn } from '../../app/utils/cn';

interface InputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

const InputWithRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  placeholder,
  name,
  id,
  className,
  error,
  ...props
}, ref) => {
  const inputId = id ?? name;

  return (
    <div className="relative">
      <input
        {...props}
        name={name}
        id={inputId}
        placeholder=" "
        ref={ref}
        className={cn(
          `bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px]
          text-gray-800 text-sm pt-4 peer placeholder-shown:pt-0 focus:border-gray-800
          transition-all outline-none`,
          error && '!border-red-900',
          className
        )}
      />
      <label
        htmlFor={inputId}
        className="absolute left-[13px] pointer-events-none text-gray-700 text-xs
        top-2 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
      >
        {placeholder}
      </label>

      {error && (
        <small className="text-red-900 text-xs mt-2 flex gap-2 items-center">
          <CrossCircledIcon />
          {error}
        </small>
      )}
    </div>
  );
};

export const Input = forwardRef(InputWithRef);
