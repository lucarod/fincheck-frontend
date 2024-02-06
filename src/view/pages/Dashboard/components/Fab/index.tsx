import { PlusIcon } from '@radix-ui/react-icons';

import { useDashboard } from 'src/app/hooks/useDashboard';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/DropdownMenu';

import { BankAccountIcon } from '@components/icons/BankAccountIcon';
import { CategoryIcon } from '@components/icons/categories/CategoryIcon';

export function Fab() {
  const { openNewAccountModal, openNewTransactionModal } = useDashboard();

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
          <DropdownMenuItem
            className="gap-2"
            onSelect={() => openNewTransactionModal('EXPENSE')}
          >
            <CategoryIcon type="expense" />
            Nova Despesa
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => openNewTransactionModal('INCOME')}
            className="gap-2"
          >
            <CategoryIcon type="income" />
            Nova Receita
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2" onSelect={openNewAccountModal}>
            <BankAccountIcon />
            Nova Conta
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
