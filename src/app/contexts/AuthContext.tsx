import { ReactNode, createContext, useCallback, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { LaunchScreen } from 'src/view/components/LaunchScreen';

import { localStorageKeys } from '../config/localStorageKeys';
import { queryKeys } from '../config/queryKeys';
import { usersService } from '../services/usersService';

interface AuthContextValue {
  isSignedIn: boolean;
  signin: (accessToken: string) => void;
  signout: () => void;
}

export const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export function AuthProvider({ children }: {children: ReactNode}) {
  const [isSignedIn, setIsignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
    return !!storedAccessToken;
  });

  const {
    isError,
    isSuccess,
    isFetching,
  } = useQuery({
    queryKey: queryKeys.USERS_ME,
    queryFn: () => usersService.me(),
    enabled: isSignedIn,
    staleTime: Infinity,
  });

  const queryClient = useQueryClient();

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
    setIsignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    queryClient.removeQueries({
      queryKey: queryKeys.USERS_ME,
    });
    setIsignedIn(false);
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error('Sua sessão expirou');
      signout();
    }
  }, [isError]);

  return (
    <AuthContext.Provider value={{
      isSignedIn: isSuccess && isSignedIn,
      signin,
      signout,
    }}>
      <LaunchScreen isLoading={isFetching} />
      {!isFetching && children}
    </AuthContext.Provider>
  );
}
