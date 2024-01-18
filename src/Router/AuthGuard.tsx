import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'src/app/hooks/useAuth';

interface AuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const { isSignedIn } = useAuth();
  console.log({ isSignedIn });

  if (!isSignedIn && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (isSignedIn && !isPrivate) {
    console.log('navigate');
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
