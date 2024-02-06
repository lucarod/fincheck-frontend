import { Controller } from 'react-hook-form';

import { Modal } from '@components/modals/Modal';
import { InputCurrency } from '@components/inputs/InputCurrency';
import { Input } from '@components/inputs/Input';
import { ColorsDropdownInput } from '@components/inputs/ColorsDropdownInput';
import { AccountTypeSelect } from '@components/selects/AccountTypeSelect';
import { Button } from '@components/Button';

import { useNewAccountModalController } from './useNewAccountModalController';

export function NewAccountModal() {
  const {
    isNewAccountModalOpen,
    control,
    errors,
    isPending,
    register,
    onCloseModal,
    handleSubmit,
  } = useNewAccountModalController();

  return (
    <Modal
      title="Nova conta"
      open={isNewAccountModalOpen}
      onClose={onCloseModal}
    >
      <form onSubmit={handleSubmit}>
        <fieldset>
          <span className="text-gray-600 text-xs tracking-[-0.5px]">Saldo inicial</span>
          <div className="flex gap-2">
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

        <Button type="submit" className="w-full mt-6" isPending={isPending}>
          Criar
        </Button>
      </form>
    </Modal>
  );
}
