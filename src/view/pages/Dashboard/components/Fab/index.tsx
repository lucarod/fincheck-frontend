import { PlusIcon } from '@radix-ui/react-icons';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from 'src/view/components/DropdownMenu';
import { BankAccountIcon } from 'src/view/components/icons/BankAccountIcon';
import { CategoryIcon } from 'src/view/components/icons/categories/CategoryIcon';

export function Fab() {
  return (
    <div className="fixed right-4 bottom-4">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button
            className="bg-teal-900 w-12 h-12 rounded-full flex
            items-center justify-center">
            <PlusIcon className="w-5 h-5 text-white" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={16} align="end" className="space-y-3">
          <DropdownMenuItem className="gap-2">
            <CategoryIcon type="expense" />
            Nova Despesa
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <CategoryIcon type="income" />
            Nova Receita
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <BankAccountIcon />
            Nova Conta
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
