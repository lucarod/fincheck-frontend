import { ReactNode } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import { cn } from 'src/app/utils/cn';

interface SelectTriggerProps {
  children: ReactNode;
  className?: string;
  error?: string;
}

interface SelectContentProps {
  children: ReactNode;
  className?: string;
  position?: 'item-aligned' | 'popper' | undefined;
  sideOffset?: number;
}

interface SelectItemProps {
  children: ReactNode;
  value: string;
  className?: string;
}

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

function SelectTrigger({ children, className, error }: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        'bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px]',
        'text-gray-800 text-sm placeholder-shown:pt-0 focus:border-gray-800',
        'relative text-left transition-all outline-none',
        error && '!border-red-900',
        className
      )}
    >
      {children}
      <SelectPrimitive.Icon
        asChild
        className="absolute right-3 top-1/2 -translate-y-1/2"
      >
        <ChevronDownIcon className="w-6 h-6 text-gray-800" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = 'popper',
  sideOffset = 4,
}: SelectContentProps) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        sideOffset={sideOffset}
        position={position}
        className={cn(
          'relative z-[99] max-h-96 min-w-[8rem] overflow-hidden bg-white',
          'border border-gray-100 overflow-hidden rounded-2xl',
          'shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]',
          className
        )}
      >
        <SelectPrimitive.Viewport
          className={cn(
            'p-2',
            position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectItem({ children, className, value }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      value={value}
      className={cn(
        'outline-none p-2 cursor-default text-gray-800 text-sm rounded-lg',
        'transition-colors data-[disabled]:pointer-events-none',
        'focus:bg-accent focus:text-accent-foreground',
        'data-[state=checked]:font-bold data-[disabled]:opacity-50',
        className
      )}
    >
      <SelectPrimitive.ItemText>
        {children}
      </SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
};
