import { InputErrorLabel } from 'src/view/components/InputErrorLabel';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/view/components/Select';
import { SelectProvider } from 'src/view/components/Select/SelectContext';

interface AccountTypeDropdownProps {
  error?: string;
}

export function AccountTypeSelect({ error }: AccountTypeDropdownProps) {
  return (
    <SelectProvider>
      <Select>
        <SelectTrigger error={error}>
          <SelectValue placeholder="Selecione..."  />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="investment">
          Investimento
          </SelectItem>
          <SelectItem value="cash">
          Dinheiro físico
          </SelectItem>
          <SelectItem value="receiving">
          Conta corrente
          </SelectItem>
        </SelectContent>
      </Select>

      <InputErrorLabel error={error} />
    </SelectProvider>
  );
}
