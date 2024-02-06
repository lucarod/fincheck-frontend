import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import { cn } from 'src/app/utils/cn';
import { Button } from '@components/Button';
import { Modal } from '@components/modals/Modal';

import { useFiltersModal } from './useFiltersModalController';

interface FilterModalProps {
  open: boolean;
  onClose: () => void;
  onApplyFilters: (filters: {
    bankAccountId: string | undefined,
    year: number
  }) => void;
}

export function FiltersModal({ open, onClose, onApplyFilters }: FilterModalProps) {
  const {
    selectedBankAccountId,
    selectedYear,
    accounts,
    handleSelectBankAccountId,
    handleChangeYear,
  } = useFiltersModal();

  return (
    <Modal
      open={open}
      title="Filtros"
      onClose={onClose}
    >
      <div>
        <span className="text-lg tracking-[-1px] font-bold text-gray-800
        hover:bg-gray-50 transition-colors">
          Conta
        </span>
        <div className="space-y-2 mt-2">
          {accounts.map(account => (
            <button
              key={account.id}
              onClick={() => handleSelectBankAccountId(account.id)}
              className={cn(
                'text-sm p-2 rounded-2xl w-full text-left text-gray-800',
                'hover:bg-gray-50 transition-colors',
                account.id === selectedBankAccountId && '!bg-gray-200'
              )}
            >
              {account.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 text-gray-800">
        <span className="text-lg tracking-[-1px] font-bold text-gray-800
        hover:bg-gray-50 transition-colors">
          Ano
        </span>
        <div className="mt-2 w-52 flex items-center justify-between">
          <button
            onClick={() => handleChangeYear(-1)}
            className="w-12 h-12 flex items-center justify-center"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <div className="flex-1 text-center">
            <span className="text-sm font-medium tracking-[-0.5px]">
              {selectedYear}
            </span>
          </div>
          <button
            onClick={() => handleChangeYear(1)}
            className="w-12 h-12 flex items-center justify-center"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      <Button
        className="w-full mt-10"
        onClick={() => onApplyFilters({
          bankAccountId: selectedBankAccountId,
          year: selectedYear,
        })}
      >
        Aplicar filtros
      </Button>
    </Modal>
  );
}
