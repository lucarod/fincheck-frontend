import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { bankAccountService } from 'src/app/services/bankAccountService';
import { CreateBankAccountParams } from 'src/app/services/bankAccountService/create';
import { useDashboard } from 'src/app/hooks/useDashboard';
import { queryKeys } from 'src/app/config/queryKeys';

const schema = z.object({
  initialBalance: z.number({ required_error: 'Saldo inicial é obrigatório' }),
  name: z.string().min(1, 'Nome da conta é obrigatório'),
  type: z.enum(['INVESTMENT', 'CASH', 'CHECKING'], {
    required_error: 'Tipo de conta é obrigatório',
  }),
  color: z.string({ required_error: 'Cor da conta é obrigatório' }),
});

type FormData = z.infer<typeof schema>;

export function useNewAccountModalController() {
  const { isNewAccountModalOpen, closeNewAccountModal } = useDashboard();

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { isSubmitSuccessful, errors },
    control,
    reset,
    clearErrors,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: (data: CreateBankAccountParams) => bankAccountService.create(data),
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
      closeNewAccountModal();
    } catch {
      toast.error('Houve um erro ao cadastrar sua conta!');
    }
  });

  function handleCloseModal() {
    reset();
    clearErrors();
    closeNewAccountModal();
  }

  return {
    control,
    errors,
    isNewAccountModalOpen,
    isPending,
    register,
    handleSubmit,
    onCloseModal: handleCloseModal,
  };
}
