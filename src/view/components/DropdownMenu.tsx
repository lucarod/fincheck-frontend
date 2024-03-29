import { ReactNode } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { cn } from 'src/app/utils/cn';

interface DropdownMenuContentProps {
  children: ReactNode;
  className?: string;
  sideOffset?: number | undefined;
  align?: 'center' | 'start' | 'end' | undefined;
}

interface DropdownMenuItemProps {
  children: ReactNode;
  className?: string;
  onSelect?: () => void;
}

const DropdownMenu = DropdownMenuPrimitive.Root;

function DropdownMenuTrigger({ children }: { children: ReactNode }) {
  return (
    <DropdownMenuPrimitive.Trigger
      asChild
      className="outline-none select-none"
    >
      {children}
    </DropdownMenuPrimitive.Trigger>
  );
}

function DropdownMenuContent({
  children,
  className,
  sideOffset = 4,
  align,
}: DropdownMenuContentProps) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        align={align}
        className={cn(
          'rounded-2xl p-2 bg-white space-y-2 z-[99]',
          'data-[side=bottom]:animate-slide-up-and-fade data-[side=top]:animate-slide-down-and-fade',
          'shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]',
          className
        )}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuItem({
  children,
  className,
  onSelect,
}: DropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item
      onSelect={onSelect}
      className={cn(
        `relative cursor-default select-none outline-none min-h-12 flex items-center p-2 text-sm text-gray-800
        rounded-lg transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50
        focus:bg-accent focus:text-accent-foreground`,
        className
      )}
    >
      {children}
    </DropdownMenuPrimitive.Item>
  );
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
};
