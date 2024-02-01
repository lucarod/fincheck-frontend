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
}

export function AccountSelect({ type, error }: AccountSelectProps) {
  const isExpense = type === 'EXPENSE';

  return (
    <SelectProvider>
      <Select>
        <SelectTrigger error={error}>
          <SelectValue
            placeholder={isExpense ? 'Pagar com' : 'Receber na conta' }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Nubank">
            Nubank
          </SelectItem>
          <SelectItem value="XP Investimentos">
            XP Investimentos
          </SelectItem>
        </SelectContent>
      </Select>

      <InputErrorLabel error={error} />
    </SelectProvider>
  );
}
