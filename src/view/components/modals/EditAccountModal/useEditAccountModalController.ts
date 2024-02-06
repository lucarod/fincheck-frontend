import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from 'src/app/config/queryKeys';
import { bankAccountService } from 'src/app/services/bankAccountService';
import { UpdateBankAccountParams } from 'src/app/services/bankAccountService/update';
import { useDashboard } from 'src/app/hooks/useDashboard';

const schema = z.object({
  name: z.string({ required_error: 'Nome da conta é obrigatório' }),
  type: z.enum(['INVESTMENT', 'CASH', 'CHECKING'], {
    required_error: 'Tipo de conta é obrigatório',
  }),
  color: z.string({ required_error: 'Cor da conta é obrigatório' }),
});

type FormData = z.infer<typeof schema>;

export function useEditAccountModalController() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const {
    isEditAccountModalOpen,
    accountBeingEdited,
    closeEditAccountModal,
  } = useDashboard();

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { isSubmitSuccessful, errors },
    control,
    reset,
    clearErrors,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      color: accountBeingEdited?.color,
      name: accountBeingEdited?.name,
      type: accountBeingEdited?.type,
    },
  });

  const queryClient = useQueryClient();
  const {
    isPending: isUpdatePending,
    mutateAsync: updateAccount,
  } = useMutation({
    mutationFn: (data: UpdateBankAccountParams) => bankAccountService.update(data),
  });
  const {
    isPending: isDeletePending,
    mutateAsync: removeAccount,
  } = useMutation({
    mutationFn: (bankAccountId: string) => bankAccountService.remove(bankAccountId),
  });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  const handleUpdateAccount = hookFormSubmit(async (data) => {
    try {
      await updateAccount({
        ...data,
        id: accountBeingEdited!.id,
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.BANK_ACCOUNTS,
      });
      toast.success('Conta editada com sucesso!');
      closeEditAccountModal();
    } catch {
      toast.error('Houve um erro ao salvar as alterações');
    }
  });

  async function handleDeleteAccount() {
    try {
      await removeAccount(accountBeingEdited!.id);
      queryClient.invalidateQueries({
        queryKey: queryKeys.BANK_ACCOUNTS,
      });
      toast.success('Conta deletada com sucesso!');
      closeEditAccountModal();
    } catch {
      toast.error('Houve um erro ao deletar sua conta');
    }
  }

  function handleCloseModal() {
    reset();
    clearErrors();
    closeEditAccountModal();
  }

  function openDeleteModal() {
    setIsDeleteModalOpen(true);
  }

  function closeDeleteModal() {
    setIsDeleteModalOpen(false);
  }


  return {
    control,
    errors,
    isEditAccountModalOpen,
    accountBeingEdited,
    isUpdatePending,
    isDeletePending,
    isDeleteModalOpen,
    register,
    handleUpdateAccount,
    handleDeleteAccount,
    onCloseModal: handleCloseModal,
    openDeleteModal,
    closeDeleteModal,
  };
}
