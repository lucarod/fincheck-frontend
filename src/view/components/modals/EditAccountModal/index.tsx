import { Controller } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';

import { cn } from 'src/app/utils/cn';

import { TrashIcon } from '@components/icons/TrashIcon';
import { Modal } from '@components/modals/Modal';
import { Input } from '@components/inputs/Input';
import { ColorsDropdownInput } from '@components/inputs/ColorsDropdownInput';
import { AccountTypeSelect } from '@components/selects/AccountTypeSelect';
import { ConfirmDeleteModal } from '@components/modals/ConfirmDeleteModal';
import { Button } from '@components/Button';

import { useEditAccountModalController } from './useEditAccountModalController';

export function EditAccountModal() {
  const {
    isEditAccountModalOpen,
    accountBeingEdited,
    control,
    errors,
    isUpdatePending,
    isDeletePending,
    isDeleteModalOpen,
    register,
    handleUpdateAccount,
    handleDeleteAccount,
    onCloseModal,
    openDeleteModal,
    closeDeleteModal,
  } = useEditAccountModalController();

  if (isDeleteModalOpen) {
    return (
      <ConfirmDeleteModal
        title="Tem certeza que deseja excluir esta conta?"
        description="Ao excluir a conta, também serão excluídos todos os registros de receita e despesas relacionados."
        onClose={closeDeleteModal}
        onConfirm={handleDeleteAccount}
        isPending={isDeletePending}
      />
    );
  }

  return (
    <Modal
      title="Editar conta"
      open={isEditAccountModalOpen}
      onClose={onCloseModal}
      rightAction={(
        <button onClick={openDeleteModal}>
          <TrashIcon className="w-6 h-6 text-red-900" />
        </button>
      )}
    >
      <form onSubmit={handleUpdateAccount}>
        <div className="flex items-center justify-center gap-2 cursor-default">
          <span className="text-gray-600 text-lg tracking-[-0.5px]">R$</span>
          <NumericFormat
            value={accountBeingEdited?.currentBalance}
            className={cn(
              'text-gray-800 text-[32px] font-bold tracking-[-1px]'
            )}
            thousandSeparator="."
            decimalSeparator=","
            displayType="text"
            decimalScale={2}
            fixedDecimalScale
          />
        </div>
        <span className="block text-center text-gray-600 text-xs tracking-[-0.5px]">Saldo</span>
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

        <Button
          type="submit"
          className="w-full mt-6"
          isPending={isUpdatePending}
        >
          Salvar
        </Button>
      </form>
    </Modal>
  );
}
