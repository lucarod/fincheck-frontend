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
    closeNewTransactionModal,
    newTransactionType,
  } = useNewTransactionModalController();

  const isExpense = newTransactionType === 'EXPENSE';

  return (
    <Modal
      title={isExpense ? 'Nova Despesa' : 'Nova Receita'}
      open={isNewTransactionModalOpen}
      onClose={closeNewTransactionModal}
    >
      <form action="">
        <fieldset>
          <span className="text-gray-600 text-xs tracking-[-0.5px]">
            Valor {isExpense ? 'da despesa' : 'da receita' }
          </span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-lg tracking-[-0.5px]">R$</span>
            <InputCurrency />
          </div>
        </fieldset>
        <fieldset className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder={isExpense ? 'Nome da despesa' : 'Nome da receita'}
          />

          <CategorySelect />
          <AccountSelect type={newTransactionType} />
          <DatePickerInput />
        </fieldset>

        <Button type="submit" className="w-full mt-6">
          Criar
        </Button>
      </form>
    </Modal>
  );
}
