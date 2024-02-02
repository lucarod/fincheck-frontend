import { NumericFormat } from 'react-number-format';
import { cn } from 'src/app/utils/cn';
import { InputErrorLabel } from './InputErrorLabel';

interface InputCurrencyProps {
  error?: string;
  onChange?: (value: string) => void;
  value?: string;
}

export function InputCurrency({ error, onChange, value }: InputCurrencyProps) {
  return (
    <div>
      <NumericFormat
        onChange={event => onChange?.(event.target.value)}
        thousandSeparator="."
        decimalSeparator=","
        value={value}
        className={cn(
          'w-full text-gray-800 text-[32px] font-bold tracking-[-1px]',
          'outline-none h-8',
          error && 'text-red-900'
        )}
      />

      <InputErrorLabel error={error} />
    </div>
  );
}
