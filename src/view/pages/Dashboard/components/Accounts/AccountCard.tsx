import { BankAccount } from 'src/app/entities/BankAccount';
import { useDashboard } from 'src/app/hooks/useDashboard';
import { cn } from 'src/app/utils/cn';
import { formatCurrency } from 'src/app/utils/formatCurrency';

import { BankAccountTypeIcon } from '@components/icons/BankAccountTypeIcon';

interface AccountCardProps {
  bankAccount: BankAccount;
}

export function AccountCard({ bankAccount }: AccountCardProps) {
  const { name, color, currentBalance, type  } = bankAccount;
  const { areValuesVisible, openEditAccountModal } = useDashboard();

  return (
    <div
      onClick={() => openEditAccountModal(bankAccount)}
      role="button"
      className="flex flex-col justify-between rounded-2xl h-[200px] bg-white overflow-hidden"
    >
      <div className="p-4 flex flex-col justify-between">
        <header>
          <BankAccountTypeIcon type={type} />
          <span className="text-gray-800 font-medium tracking-[-0.5px] mt-4 block">
            {name}
          </span>
        </header>
        <div>
          <span
            className={cn(
              'text-gray-800 font-medium tracking-[-0.5px] mt-4 block',
              !areValuesVisible && 'blur-sm'
            )}
          >
            {formatCurrency(currentBalance)}
          </span>
          <small className="text-gray-600 text-sm">
            Saldo atual
          </small>
        </div>
      </div>
      <div
        className="h-1 bg-teal-900"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}
