import { Controller } from 'react-hook-form';

import { Modal } from '@components/modals/Modal';
import { InputCurrency } from '@components/inputs/InputCurrency';
import { Input } from '@components/inputs/Input';
import { DatePickerInput } from '@components/inputs/DatePickerInput';
import { CategorySelect } from '@components/selects/CategorySelect';
import { AccountSelect } from '@components/selects/AccountSelect';
import { Button } from '@components/Button';

import { useEditTransactionModalController } from './useEditTransactionModalController';

export function EditTransactionModal() {
  const {
    isEditTransactionModalOpen,
    editTransactionType,
    errors,
    control,
    accounts,
    categories,
    isPending,
    register,
    onCloseModal,
    handleSubmit,
  } = useEditTransactionModalController();

  const isExpense = editTransactionType === 'EXPENSE';

  return (
    <Modal
      title={isExpense ? 'Nova Despesa' : 'Nova Receita'}
      open={isEditTransactionModalOpen}
      onClose={onCloseModal}
    >
      <form onSubmit={handleSubmit}>
        <fieldset>
          <span className="text-gray-600 text-xs tracking-[-0.5px]">
            Valor {isExpense ? 'da despesa' : 'da receita' }
          </span>
          <div className="flex gap-2">
            <span className="text-gray-600 text-lg tracking-[-0.5px]">R$</span>
            <Controller
              control={control}
              name="value"
              defaultValue={0}
              render={({ field: { onChange, value } }) => (
                <InputCurrency
                  error={errors.value?.message}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </div>
        </fieldset>
        <fieldset className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            placeholder={isExpense ? 'Nome da despesa' : 'Nome da receita'}
            {...register('name')}
            error={errors.name?.message}
          />

          <Controller
            control={control}
            name="categoryId"
            render={({ field: { onChange, value } }) => (
              <CategorySelect
                error={errors.categoryId?.message}
                onChange={onChange}
                value={value}
                categories={categories}
              />
            )}
          />
          <Controller
            control={control}
            name="bankAccountId"
            render={({ field: { onChange, value } }) => (
              <AccountSelect
                type={editTransactionType}
                error={errors.bankAccountId?.message}
                onChange={onChange}
                value={value}
                accounts={accounts}
              />
            )}
          />
          <Controller
            control={control}
            name="date"
            defaultValue={new Date()}
            render={({ field: { onChange, value } }) => (
              <DatePickerInput
                error={errors.date?.message}
                value={value}
                onChange={onChange}
              />
            )}
          />

        </fieldset>

        <Button type="submit" className="w-full mt-6" isPending={isPending}>
          Criar
        </Button>
      </form>
    </Modal>
  );
}
