import { Input } from 'src/view/components/Input';
import { Button } from 'src/view/components/Button';
import { AuthFormContainer } from 'src/view/components/AuthFormContainer';

import { useRegisterController } from './useRegisterController';

export function Register() {
  const { register, handleSubmit, errors, isPending } = useRegisterController();

  return (
    <AuthFormContainer
      title="Crie sua conta"
      subtitle="Já possui uma conta?"
      linkText="Fazer login"
      linkHref="/login"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Nome"
        error={errors.name?.message}
        {...register('name')}
      />
      <Input
        type="email"
        placeholder="Email"
        error={errors.email?.message}
        {...register('email')}
      />
      <Input
        type="password"
        placeholder="Senha"
        error={errors.password?.message}
        {...register('password')}
      />

      <Button
        type="submit"
        className="mt-2"
        isPending={isPending}
      >
          Criar conta
      </Button>
    </AuthFormContainer>
  );
}
