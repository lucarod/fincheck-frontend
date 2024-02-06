import { ChevronDownIcon } from '@radix-ui/react-icons';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@components/DropdownMenu';
import { ExpensesIcon } from '@components/icons/ExpensesIcon';
import { IncomeIcon } from '@components/icons/IncomeIcon';
import { TransactionsIcon } from '@components/icons/TransactionsIcon';

interface TransactionTypeDropdownProps {
  onSelect: (type: 'INCOME' | 'EXPENSE' | undefined) => void;
  selectedType: 'INCOME' | 'EXPENSE' | undefined;
}

export function TransactionTypeDropdown({ onSelect, selectedType }: TransactionTypeDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button className="flex items-center gap-2 py-3">
          {selectedType === 'INCOME' && <ExpensesIcon />}
          {selectedType === 'EXPENSE' && <IncomeIcon />}
          {selectedType === undefined && <TransactionsIcon />}
          <span className="text-gray-800 text-sm tracking-[-0.5px] font-medium">
            {selectedType === 'INCOME' && 'Receitas'}
            {selectedType === 'EXPENSE' && 'Despesas'}
            {selectedType === undefined && 'Transações'}
          </span>
          <ChevronDownIcon className="text-gray-900 w-6 h-6" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[279px]"
      >
        <DropdownMenuItem className="gap-2" onSelect={() => onSelect('INCOME')}>
          <IncomeIcon />
          Receitas
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2" onSelect={() => onSelect('EXPENSE')}>
          <ExpensesIcon />
          Despesas
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2" onSelect={() => onSelect(undefined)}>
          <TransactionsIcon />
          Transações
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
