import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { AuthFormContainer } from '../../components/AuthFormContainer';

export function Register() {
  return (
    <AuthFormContainer
      title="Crie sua conta"
      subtitle="Já possui uma conta?"
      linkText="Fazer login"
      linkHref="/login"
    >
      <Input
        type="text"
        placeholder="Nome"
        name="name"
      />
      <Input
        type="email"
        placeholder="Email"
        name="email"
      />
      <Input
        type="password"
        placeholder="Senha"
        name="password"
      />

      <Button
        type="submit"
        className="mt-2"
      >
          Criar conta
      </Button>
    </AuthFormContainer>
  );
}
