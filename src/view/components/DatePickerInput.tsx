import { cn } from 'src/app/utils/cn';

import { InputErrorLabel } from './InputErrorLabel';
import { useState } from 'react';
import { formatDate } from 'src/app/utils/formatDate';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import { DatePicker } from './DatePicker';

interface DatePickerInputProps {
  error?: string;
  className?: string;
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
}

export function DatePickerInput({ error, className, value, defaultValue, onChange }: DatePickerInputProps) {
  const [selectedDate, setSelectedDate] = useState(defaultValue ?? new Date());
  const [isDatePickerPopoverOpen, setIsDatePickerPopoverOpen] = useState(false);

  function handleChangeDate(date: Date) {
    setSelectedDate(date);
    onChange?.(date);
    setIsDatePickerPopoverOpen(false);
  }

  const date = value ?? selectedDate;

  console.log({ value, defaultValue, selectedDate, date });

  return (
    <div>
      <Popover
        open={isDatePickerPopoverOpen}
        onOpenChange={(open) => setIsDatePickerPopoverOpen(open)}
      >
        <PopoverTrigger asChild>
          <button
            type="button"
            className={cn(
              'bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px]',
              'text-gray-700 text-sm placeholder-shown:pt-0 focus:border-gray-800',
              'relative text-left transition-all outline-none pt-4',
              error && '!border-red-900',
              className
            )}
          >
            <span className="text-gray-700 text-xs absolute left-[13px] pointer-events-none top-2">
              Data
            </span>
            <span className="text-gray-800">{formatDate(date)}</span>
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <DatePicker value={date} onChange={handleChangeDate} />
        </PopoverContent>
      </Popover>
      <InputErrorLabel error={error} />
    </div>
  );
}
