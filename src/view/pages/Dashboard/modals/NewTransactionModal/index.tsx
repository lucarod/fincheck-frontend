import { Controller } from 'react-hook-form';

import { Modal } from 'src/view/components/Modal';
import { InputCurrency } from 'src/view/components/InputCurrency';
import { Input } from 'src/view/components/Input';
import { Button } from 'src/view/components/Button';
import { DatePickerInput } from 'src/view/components/DatePickerInput';

import { useNewTransactionModalController } from './useNewTransactionModalController';
import { CategorySelect } from '../../selects/CategorySelect';
import { AccountSelect } from '../../selects/AccountSelect';

export function NewTransactionModal() {
  const {
    isNewTransactionModalOpen,
    newTransactionType,
    errors,
    control,
    accounts,
    categories,
    register,
    closeNewTransactionModal,
    handleSubmit,
  } = useNewTransactionModalController();

  const isExpense = newTransactionType === 'EXPENSE';

  return (
    <Modal
      title={isExpense ? 'Nova Despesa' : 'Nova Receita'}
      open={isNewTransactionModalOpen}
      onClose={closeNewTransactionModal}
    >
      <form onSubmit={handleSubmit}>
        <fieldset>
          <span className="text-gray-600 text-xs tracking-[-0.5px]">
            Valor {isExpense ? 'da despesa' : 'da receita' }
          </span>
          <div className="flex items-center gap-2">
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
                type={newTransactionType}
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

        <Button type="submit" className="w-full mt-6">
          Criar
        </Button>
      </form>
    </Modal>
  );
}
