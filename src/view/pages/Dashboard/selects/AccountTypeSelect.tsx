import { InputErrorLabel } from 'src/view/components/InputErrorLabel';
import { SelectProvider } from 'src/view/components/Select/SelectContext';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/view/components/Select';

interface AccountTypeSelectProps {
  error?: string;
  onChange?: (value: string) => void;
  value?: string;
}

export function AccountTypeSelect({ error, onChange, value }: AccountTypeSelectProps) {
  return (
    <SelectProvider defaultValue={value} onChange={onChange}>
      <Select>
        <SelectTrigger error={error}>
          <SelectValue placeholder="Tipo"  />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="INVESTMENT">
          Investimento
          </SelectItem>
          <SelectItem value="CASH">
          Dinheiro físico
          </SelectItem>
          <SelectItem value="CHECKING">
          Conta corrente
          </SelectItem>
        </SelectContent>
      </Select>

      <InputErrorLabel error={error} />
    </SelectProvider>
  );
}
