import { useEffect, useMemo } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { transactionsService } from 'src/app/services/transactionsService';
import { CreateTransactionParams } from 'src/app/services/transactionsService/create';

import { useBankAccounts } from 'src/app/hooks/useBankAccounts';
import { useCategories } from 'src/app/hooks/useCategories';
import { useDashboard } from 'src/app/hooks/useDashboard';
import { queryKeys } from 'src/app/config/queryKeys';

const schema = z.object({
  value: z.number().min(1, 'Informe o valor'),
  name: z.string().min(1, 'Informe o nome'),
  categoryId: z.string({ required_error: 'Informe a categoria' }),
  bankAccountId: z.string({ required_error: 'Informe a conta' }),
  date: z.date(),
});

type FormData = z.infer<typeof schema>;

export function useEditTransactionModalController() {
  const {
    isEditTransactionModalOpen,
    closeEditTransactionModal,
    editTransactionType,
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
  });

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: CreateTransactionParams) => transactionsService.create(data),
  });

  const { accounts } = useBankAccounts();
  const { categories: categoriesFullList } = useCategories();

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync({
        ...data,
        date: data.date.toISOString(),
        type: editTransactionType!,
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.ACCOUNTS_DATA,
      });
      toast.success(
        editTransactionType === 'EXPENSE'
          ? 'Despesa cadastrada com sucesso!'
          : 'Receita cadastrada com sucesso!'
      );
      handleCloseModal();
    } catch {
      toast.error(
        editTransactionType === 'EXPENSE'
          ? 'Erro ao cadastrar a despesa'
          : 'Erro ao cadastrar a receita'
      );
    }
  });

  const categories = useMemo(() => {
    return categoriesFullList
      .filter((category) => category.type === editTransactionType);
  }, [categoriesFullList, editTransactionType]);

  function handleCloseModal() {
    reset();
    clearErrors();
    closeEditTransactionModal();
  }

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  return {
    isEditTransactionModalOpen,
    editTransactionType,
    errors,
    control,
    accounts,
    categories,
    isPending,
    register,
    onCloseModal: handleCloseModal,
    handleSubmit,
  };
}
