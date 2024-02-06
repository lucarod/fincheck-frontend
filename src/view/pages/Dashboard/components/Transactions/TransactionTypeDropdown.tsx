import { ChevronDownIcon } from '@radix-ui/react-icons';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@components/DropdownMenu';
import { ExpensesIcon } from '@components/icons/ExpensesIcon';
import { IncomeIcon } from '@components/icons/IncomeIcon';
import { TransactionsIcon } from '@components/icons/TransactionsIcon';

export function TransactionTypeDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button className="flex items-center gap-2 py-3">
          <TransactionsIcon />
          <span className="text-gray-800 text-sm tracking-[-0.5px] font-medium">
            Transações
          </span>
          <ChevronDownIcon className="text-gray-900 w-6 h-6" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[279px]"
      >
        <DropdownMenuItem className="gap-2">
          <IncomeIcon />
          Receitas
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <ExpensesIcon />
          Despesas
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <TransactionsIcon />
          Transações
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
