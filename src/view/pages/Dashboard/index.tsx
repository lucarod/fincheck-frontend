import { useAuth } from 'src/app/hooks/useAuth';

export function Dashboard() {
  const { signout } = useAuth();
  return (

    <h1>
      <button onClick={signout}>sair</button>
    </h1>
  );
}
