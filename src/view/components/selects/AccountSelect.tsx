import { BankAccount } from 'src/app/entities/BankAccount';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@components/selects/Select';

interface AccountSelectProps {
  type: 'INCOME' | 'EXPENSE' | null;
  error?: string;
  accounts: Pick<BankAccount, 'id' | 'name'>[];
  value?: string;
  onChange?: (value: string) => void;
}

export function AccountSelect({
  type,
  error,
  value,
  accounts,
  onChange,
}: AccountSelectProps) {
  const isExpense = type === 'EXPENSE';

  return (
    <Select defaultValue={value} onChange={onChange} error={error}>
      <SelectTrigger>
        <SelectValue
          placeholder={isExpense ? 'Pagar com' : 'Receber na conta' }
        />
      </SelectTrigger>
      <SelectContent>
        {accounts.map((account) => (
          <SelectItem value={account.id} key={account.id}>
            {account.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
