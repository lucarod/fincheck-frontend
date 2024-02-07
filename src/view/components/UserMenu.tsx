import { ExitIcon } from '@radix-ui/react-icons';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/DropdownMenu';
import { useAuth } from 'src/app/hooks/useAuth';

export function UserMenu() {
  const { signout, user } = useAuth();
  const [firstName, lastName] = user?.name.split(' ') || '';
  const name = lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
    : firstName.slice(0, 2).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button
          className="bg-teal-50 rounded-full w-12 h-12 flex items-center
         justify-center border border-teal-100"
        >
          <span
            className="text-sm tracking-[-0.5px] text-teal-900 font-medium"
          >
            {name}
          </span>
        </button>
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
