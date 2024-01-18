import { Input } from 'src/view/components/Input';
import { Button } from 'src/view/components/Button';
import { AuthFormContainer } from 'src/view/components/AuthFormContainer';

import { useLoginController } from './useLoginController';

export function Login() {
  const { register, handleSubmit, errors } = useLoginController();

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
      >
        Entrar
      </Button>
    </AuthFormContainer>
  );
}
