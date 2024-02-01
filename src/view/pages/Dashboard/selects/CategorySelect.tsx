import { InputErrorLabel } from 'src/view/components/InputErrorLabel';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/view/components/Select';
import { SelectProvider } from 'src/view/components/Select/SelectContext';

interface CategorySelectProps {
  error?: string;
}

export function CategorySelect({ error }: CategorySelectProps) {
  return (
    <SelectProvider>
      <Select>
        <SelectTrigger error={error}>
          <SelectValue placeholder="Categoria"  />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="salary">
            Salário
          </SelectItem>
          <SelectItem value="food">
            Alimentação
          </SelectItem>
        </SelectContent>
      </Select>

      <InputErrorLabel error={error} />
    </SelectProvider>
  );
}
