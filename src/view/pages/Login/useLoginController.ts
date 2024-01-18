import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { authService } from 'src/app/services/authService';
import { SigninParams } from 'src/app/services/authService/signin';

const schema = z.object({
  email: z.string().email('Informe um email válido'),
  password: z.string().min(1, 'Informe sua senha')
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: SigninParams) => {
      return authService.signin(data);
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      toast.success('Sucesso');
    } catch {
      toast.error('Credenciais inválidas');
    }
  });

  return { register, handleSubmit, errors, isPending };
}
