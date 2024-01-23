import { ExitIcon } from '@radix-ui/react-icons';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './DropdownMenu';
import { useAuth } from 'src/app/hooks/useAuth';

export function UserMenu() {
  const { signout } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center border border-teal-100">
          <span className="text-sm tracking-[-0.5px] text-teal-900 font-medium">LR</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32" sideOffset={16} align="end" >
        <DropdownMenuItem
          onSelect={signout}
          className="flex items-center justify-between"
        >
          Sair
          <ExitIcon className="w-4 h-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
