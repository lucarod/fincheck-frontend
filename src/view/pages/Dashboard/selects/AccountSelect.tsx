import { BankAccount } from 'src/app/entities/BankAccount';
import { InputErrorLabel } from 'src/view/components/InputErrorLabel';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/view/components/Select';
import { SelectProvider } from 'src/view/components/Select/SelectContext';

interface AccountSelectProps {
  type: 'INCOME' | 'EXPENSE' | null;
  error?: string;
  value?: string;
  accounts: Pick<BankAccount, 'id' | 'name'>[];
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
    <SelectProvider defaultValue={value} onChange={onChange}>
      <Select>
        <SelectTrigger error={error}>
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

      <InputErrorLabel error={error} />
    </SelectProvider>
  );
}
