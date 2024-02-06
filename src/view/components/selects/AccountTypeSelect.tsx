import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@components/selects/Select';

interface AccountTypeSelectProps {
  error?: string;
  onChange?: (value: string) => void;
  value?: string;
}

export function AccountTypeSelect({ error, onChange, value }: AccountTypeSelectProps) {
  return (
    <Select defaultValue={value} onChange={onChange} error={error}>
      <SelectTrigger>
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
  );
}
