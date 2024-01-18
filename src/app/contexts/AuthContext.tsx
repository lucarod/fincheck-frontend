import { ReactNode, createContext } from 'react';

interface AuthContextValue {
  isSignedIn: boolean;
}

export const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export function AuthProvider({ children }: {children: ReactNode}) {
  return (
    <AuthContext.Provider value={{ isSignedIn: false }}>
      {children}
    </AuthContext.Provider>
  );
}
