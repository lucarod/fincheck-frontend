import { ReactNode } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cn } from 'src/app/utils/cn';

interface PopoverContentProps {
  className?: string;
  align?: 'center' | 'start' | 'end' | undefined;
  sideOffset?: number | undefined;
  children?: ReactNode;
}

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = ({
  className,
  align = 'center',
  sideOffset = 4,
  children,
}: PopoverContentProps) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'z-[52] w-[352px] rounded-2xl p-4 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]',
        'bg-white outline-none data-[side=bottom]:animate-slide-up-and-fade data-[side=top]:animate-slide-down-and-fade',
        className
      )}
    >
      {children}
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
);

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
