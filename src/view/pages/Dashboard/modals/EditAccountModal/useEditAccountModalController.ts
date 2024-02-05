import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { bankAccountService } from 'src/app/services/bankAccountService';
import { BankAccountParams } from 'src/app/services/bankAccountService/create';

import { useDashboard } from '../../components/DashboardContext/useDashboard';
import { queryKeys } from 'src/app/config/queryKeys';

const schema = z.object({
  initialBalance: z.number().min(1, 'Saldo inicial é obrigatório'),
  name: z.string().min(1, 'Nome da conta é obrigatório'),
  type: z.enum(['INVESTMENT', 'CASH', 'CHECKING']),
  color: z.string().min(1, 'Cor da conta é obrigatório'),
});

type FormData = z.infer<typeof schema>;

export function useEditAccountModalController() {
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
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: (data: BankAccountParams) => bankAccountService.create(data),
  });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);
      queryClient.invalidateQueries({
        queryKey: queryKeys.BANK_ACCOUNTS,
      });
      toast.success('Conta cadastrada com sucesso!');
      closeEditAccountModal();
    } catch {
      toast.error('Houve um erro ao cadastrar sua conta!');
    }
  });

  return {
    control,
    errors,
    isEditAccountModalOpen,
    accountBeingEdited,
    isPending,
    register,
    handleSubmit,
    closeEditAccountModal,
  };
}
