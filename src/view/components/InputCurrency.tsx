import { NumericFormat } from 'react-number-format';
import { cn } from 'src/app/utils/cn';
import { InputErrorLabel } from './InputErrorLabel';

interface InputCurrencyProps {
  error?: string;
  value?: string | number;
  onChange?: (value?: number) => void;
}

export function InputCurrency({ error, onChange, value }: InputCurrencyProps) {
  return (
    <div>
      <NumericFormat
        value={value}
        className={cn(
          'w-full text-gray-800 text-[32px] font-bold tracking-[-1px]',
          'outline-none h-8',
          error && 'text-red-900'
        )}
        thousandSeparator="."
        decimalSeparator=","
        onValueChange={(values) => onChange?.(values.floatValue)}
      />

      <InputErrorLabel error={error} />
    </div>
  );
}
