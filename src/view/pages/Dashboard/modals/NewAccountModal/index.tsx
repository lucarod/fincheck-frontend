import { Modal } from 'src/view/components/Modal';

import { useNewAccountModalController } from './useNewAccountModalController';
import { InputCurrency } from 'src/view/components/InputCurrency';
import { Input } from 'src/view/components/Input';
import { ColorsDropdownInput } from 'src/view/components/ColorsDropdownInput';

import { AccountTypeSelect } from '../../selects/AccountTypeSelect';
import { Button } from 'src/view/components/Button';
import { Controller } from 'react-hook-form';

export function NewAccountModal() {
  const {
    isNewAccountModalOpen,
    closeNewAccountModal,
    control,
    register,
    errors,
    handleSubmit,
  } = useNewAccountModalController();

  return (
    <Modal
      title="Nova conta"
      open={isNewAccountModalOpen}
      onClose={closeNewAccountModal}
    >
      <form onSubmit={handleSubmit}>
        <fieldset>
          <span className="text-gray-600 text-xs tracking-[-0.5px]">Saldo inicial</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-lg tracking-[-0.5px]">R$</span>
            <Controller
              control={control}
              name="initialBalance"
              defaultValue={0}
              render={({ field: { onChange, value } }) => (
                <InputCurrency
                  error={errors.initialBalance?.message}
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
            placeholder="Nome da conta"
            error={errors.name?.message}
            {...register('name')}
          />

          <Controller
            control={control}
            name="type"
            defaultValue="INVESTMENT"
            render={({ field: { onChange, value } }) => (
              <AccountTypeSelect
                error={errors.type?.message}
                onChange={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="color"
            render={({ field: { onChange, value } }) => (
              <ColorsDropdownInput
                error={errors.color?.message}
                onChange={onChange}
                value={value}
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
