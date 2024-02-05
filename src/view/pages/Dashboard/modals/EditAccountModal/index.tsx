import { Controller } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';

import { cn } from 'src/app/utils/cn';

import { Modal } from 'src/view/components/Modal';
import { Input } from 'src/view/components/Input';
import { Button } from 'src/view/components/Button';
import { ColorsDropdownInput } from 'src/view/components/ColorsDropdownInput';

import { useEditAccountModalController } from './useEditAccountModalController';
import { AccountTypeSelect } from '../../selects/AccountTypeSelect';
import { TrashIcon } from 'src/view/components/icons/TrashIcon';
import { ConfirmDeleteModal } from 'src/view/components/ConfirmDeleteModal';

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
    closeEditAccountModal,
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
      onClose={closeEditAccountModal}
      rightAction={(
        <button onClick={openDeleteModal}>
          <TrashIcon className="w-6 h-6 text-red-900" />
        </button>
      )}
    >
      <form onSubmit={handleUpdateAccount}>
        <div className="flex items-center justify-center gap-2">
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
