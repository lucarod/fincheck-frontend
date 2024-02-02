import { useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import { cn } from 'src/app/utils/cn';
import { COLORS } from 'src/app/config/constants';
import { Color } from 'src/app/config/types';

import { InputErrorLabel } from './InputErrorLabel';
import { ColorIcon } from './icons/ColorIcon';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './DropdownMenu';

interface ColorsDropdownInputProps {
  error?: string;
  className?: string;
  onChange?: (color: string) => void;
  value?: string;
}

export function ColorsDropdownInput({ error, className, onChange, value }: ColorsDropdownInputProps) {
  const [selectedColor, setSelectedColor] = useState<null | Color>(() => {
    if (!value) {
      return null;
    }

    return COLORS.find((color) => color.color === value) ?? null;
  });

  function handleSelect(color: Color) {
    setSelectedColor(color);
    onChange?.(color.color);
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button
            className={cn(
              'bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px]',
              'text-gray-700 text-sm placeholder-shown:pt-0 focus:border-gray-800',
              'relative text-left transition-all outline-none',
              error && '!border-red-900',
              className
            )}
          >
            Cor

            <span
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {!selectedColor && (
                <ChevronDownIcon className="w-6 h-6 text-gray-800 " />
              )}

              {selectedColor && (
                <ColorIcon bg={selectedColor.bg} color={selectedColor.color} />
              )}
            </span>
          </button>

        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="center"
          className={cn(
            'grid grid-cols-4 gap-y-4 space-y-0',
            'w-full min-w-[var(--radix-dropdown-menu-trigger-width)]'
          )}
        >
          {COLORS.map((color) => (
            <DropdownMenuItem
              key={color.color}
              className="justify-center"
              onSelect={() => handleSelect(color)}
            >
              <ColorIcon bg={color.bg} color={color.color} />
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <InputErrorLabel error={error} />
    </div>
  );
}
