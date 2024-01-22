import { formatCurrency } from 'src/app/utils/formatCurrency';
import { BankAccountTypeIcon } from 'src/view/components/icons/BankAccountTypeIcon';
import { useDashboard } from '../DashboardContext/useDashboard';
import { cn } from 'src/app/utils/cn';

interface AccountCardProps {
  color: string;
  name: string;
  balance: number;
  type: 'CASH' | 'CHECKING' | 'INVESTMENT'
}

export function AccountCard({ color, name, balance, type }: AccountCardProps) {
  const { areValuesVisible } = useDashboard();

  return (
    <div className="flex flex-col justify-between rounded-2xl h-[200px] bg-white overflow-hidden">
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
            {formatCurrency(balance)}
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
