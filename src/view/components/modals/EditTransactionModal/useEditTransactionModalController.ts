import { useMemo } from 'react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { transactionsService } from 'src/app/services/transactionsService';
import { useBankAccounts } from 'src/app/hooks/useBankAccounts';
import { useCategories } from 'src/app/hooks/useCategories';
import { Transaction } from 'src/app/entities/Transaction';
import { queryKeys } from 'src/app/config/queryKeys';
import { UpdateTransactionParams } from 'src/app/services/transactionsService/update';

const schema = z.object({
  value: z.number().min(1, 'Informe o valor'),
  name: z.string().min(1, 'Informe o nome'),
  categoryId: z.string({ required_error: 'Informe a categoria' }),
  bankAccountId: z.string({ required_error: 'Informe a conta' }),
  date: z.date(),
});

type FormData = z.infer<typeof schema>;

export function useEditTransactionModalController(
  transaction: Transaction,
  onClose: () => void
) {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
    clearErrors,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      bankAccountId: transaction.bankAccountId,
      categoryId: transaction.category?.id,
      name: transaction.name,
      value: transaction.value,
      date: transaction ? new Date(transaction.date) : new Date(),
    },
  });

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: UpdateTransactionParams) => transactionsService.update(data),
  });

  const { accounts } = useBankAccounts();
  const { categories: categoriesFullList } = useCategories();

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync({
        ...data,
        id: transaction.id,
        type: transaction.type,
        date: data.date.toISOString(),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.ACCOUNTS_DATA,
      });
      toast.success(
        transaction.type === 'EXPENSE'
          ? 'Despesa cadastrada com sucesso!'
          : 'Receita cadastrada com sucesso!'
      );
      handleCloseModal();
    } catch {
      toast.error(
        transaction.type === 'EXPENSE'
          ? 'Erro ao cadastrar a despesa'
          : 'Erro ao cadastrar a receita'
      );
    }
  });

  const categories = useMemo(() => {
    return categoriesFullList
      .filter((category) => category.type === transaction.type);
  }, [categoriesFullList, transaction.type]);

  function handleCloseModal() {
    reset();
    clearErrors();
    onClose();
  }

  return {
    errors,
    control,
    accounts,
    categories,
    isPending,
    register,
    handleCloseModal,
    handleSubmit,
  };
}
