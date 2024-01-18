import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { authService } from 'src/app/services/authService';

const schema = z.object({
  email: z.string().email('Informe um email válido'),
  password: z.string().min(1, 'Informe sua senha')
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    // await authService.signup(data);
  });

  return { register, handleSubmit, errors };
}
