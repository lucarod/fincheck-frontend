import { ReactNode } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { cn } from 'src/app/utils/cn';

interface DropdownMenuContentProps {
  children: ReactNode;
  className?: string;
}

interface DropdownMenuItemProps {
  children: ReactNode;
  className?: string;
  onSelect?: () => void;
}

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

function DropdownMenuTrigger({ children }: { children: ReactNode }) {
  return (
    <DropdownMenuPrimitive.Trigger
      className="outline-none select-none"
    >
      {children}
    </DropdownMenuPrimitive.Trigger>
  );
}

function DropdownMenuContent({ children, className }: DropdownMenuContentProps) {
  return (
    <DropdownMenuPortal>
      <DropdownMenuPrimitive.Content
        className={cn(
          `rounded-2xl p-2 bg-white space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]`,
          'data-[side=bottom]:animate-slide-up-and-fade',
          className
        )}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPortal>
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
        hover:bg-gray-50 rounded-lg transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50
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
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
};
