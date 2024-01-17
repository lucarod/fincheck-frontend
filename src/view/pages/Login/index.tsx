import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { AuthFormContainer } from '../../components/AuthFormContainer';

export function Login() {
  return (
    <AuthFormContainer
      title="Entre em sua conta"
      subtitle="Novo por aqui?"
      linkText="Crie uma conta"
      linkHref="/register"
    >
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
          Entrar
      </Button>
    </AuthFormContainer>
  );
}
