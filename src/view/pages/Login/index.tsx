import { Input } from '@components/inputs/Input';
import { Button } from '@components/Button';
import { AuthFormContainer } from '@components/AuthFormContainer';

import { useLoginController } from './useLoginController';

export function Login() {
  const { register, handleSubmit, errors, isPending } = useLoginController();

  return (
    <AuthFormContainer
      title="Entre em sua conta"
      subtitle="Novo por aqui?"
      linkText="Crie uma conta"
      linkHref="/register"
      onSubmit={handleSubmit}
    >
      <Input
        type="email"
        placeholder="Email"
        {...register('email')}
        error={errors.email?.message}
      />
      <Input
        type="password"
        placeholder="Senha"
        {...register('password')}
        error={errors.password?.message}
      />
      <Button
        type="submit"
        className="mt-2"
        isPending={isPending}
      >
        Entrar
      </Button>
    </AuthFormContainer>
  );
}
