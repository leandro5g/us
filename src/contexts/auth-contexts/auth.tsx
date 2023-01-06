import React, { useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { setDefaultToken } from "../../global/libs/clients/http";
import { useStorage } from "../../global/libs/storage";
import { useAuthenticate } from "../../global/utils/authenticate";
import { signInService } from "../../services/sign-in-service/sign-in-service";

type SignInProps = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(data: SignInProps): Promise<void>;
  token: string;
  user: User.UserModal;
  updateUser(userUpdated: User.UserModal): void;
  isLoading: boolean;
  signOut(): Promise<void>;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children
}) => {
  const { handleSignIn } = signInService();
  const { getDataStorage } = useAuthenticate();
  const { saveStorage, KEY_TOKEN, KEY_USER, removeItem } = useStorage();

  const [token, setToken] = useState("");
  const [user, setUser] = useState<User.UserModal>({} as User.UserModal);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadDataStorage();
  }, []);

  const loadDataStorage = useCallback(async () => {
    const responseStorage = await getDataStorage();

    if (!responseStorage?.token) {
      setIsLoading(false);
      return;
    }

    setDefaultToken(responseStorage.token);

    setUser(responseStorage.user);
    setToken(responseStorage.token);

    setIsLoading(false);
  }, []);

  const signIn = useCallback(
    async ({ email, password }: SignInProps) => {
      const response = await handleSignIn({
        email,
        password
      });

      await saveStorage({
        key: KEY_TOKEN,
        data: { token: response?.token }
      });

      await saveStorage({
        key: KEY_USER,
        data: response.user
      });

      setUser(response?.user);
      setToken(response?.token);
    },
    [handleSignIn]
  );

  const signOut = useCallback(async () => {
    await removeItem(KEY_USER);
    await removeItem(KEY_USER);

    setUser({} as User.UserModal);
    setToken("");
  }, []);

  const updateUser = useCallback((userUpdated: User.UserModal) => {
    setUser((oldUser) => (!!userUpdated ? userUpdated : oldUser));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        signIn,
        updateUser,
        isLoading,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
