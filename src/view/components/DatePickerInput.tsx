import { cn } from 'src/app/utils/cn';

import { InputErrorLabel } from './InputErrorLabel';
import { useState } from 'react';
import { formatDate } from 'src/app/utils/formatDate';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import { DatePicker } from './DatePicker';

interface DatePickerInputProps {
  error?: string;
  className?: string;
}

export function DatePickerInput({ error, className }: DatePickerInputProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerPopoverOpen, setIsDatePickerPopoverOpen] = useState(false);

  function handleChangeDatePickerValue(date: Date) {
    setSelectedDate(date);
    setIsDatePickerPopoverOpen(false);
  }

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
            <span className="text-gray-800">{formatDate(selectedDate)}</span>
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <DatePicker value={selectedDate} onChange={handleChangeDatePickerValue} />
        </PopoverContent>
      </Popover>
      <InputErrorLabel error={error} />
    </div>
  );
}
