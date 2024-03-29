import { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

import { cn } from 'src/app/utils/cn';

interface ModalProps {
  open: boolean;
  children: ReactNode;
  title: string;
  rightAction?: ReactNode;
  onClose?: () => void;
}

export function Modal({ open, title, onClose, rightAction, children }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            'fixed inset-0 bg-black/25 z-50',
            'data-[state=open]:animate-overlay-show'
          )}
        />

        <Dialog.Content
          className={cn(
            'z-[51] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            'p-6 space-y-10 bg-white rounded-2xl w-full max-w-[400px]',
            'shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] outline-none',
            'data-[state=open]:animate-content-show'
          )}
        >
          <header className="h-12 flex items-center justify-between text-gray-800">
            <button
              onClick={onClose}
              className="w-12 h-12 flex items-center justify-center outline-none"
            >
              <Cross2Icon className="w-6 h-6" />
            </button>
            <span className="font-bold text-lg tracking-[-1px]">
              {title}
            </span>
            <div className="w-12 h-12 flex items-center justify-center">
              {rightAction}
            </div>
          </header>
          <div>
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
