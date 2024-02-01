import { Modal } from 'src/view/components/Modal';

import { useNewAccountModalController } from './useNewAccountModalController';
import { InputCurrency } from 'src/view/components/InputCurrency';
import { Input } from 'src/view/components/Input';
import { ColorsDropdownInput } from 'src/view/components/ColorsDropdownInput';

import { AccountTypeSelect } from '../../selects/AccountTypeSelect';
import { Button } from 'src/view/components/Button';

export function NewAccountModal() {
  const {
    isNewAccountModalOpen,
    closeNewAccountModal,
  } = useNewAccountModalController();

  return (
    <Modal
      title="Nova conta"
      open={isNewAccountModalOpen}
      onClose={closeNewAccountModal}
    >
      <form action="">
        <fieldset>
          <span className="text-gray-600 text-xs tracking-[-0.5px]">Saldo</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-lg tracking-[-0.5px]">R$</span>
            <InputCurrency />
          </div>
        </fieldset>
        <fieldset className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder="Nome da conta"
          />

          <AccountTypeSelect />
          <ColorsDropdownInput />
        </fieldset>

        <Button type="submit" className="w-full mt-6">
          Criar
        </Button>
      </form>
    </Modal>
  );
}
