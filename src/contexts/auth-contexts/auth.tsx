import React, { useCallback, useState } from "react";
import { createContext } from "use-context-selector";
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
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children
}) => {
  const { handleSignIn } = signInService();

  const [token, setToken] = useState("");
  const [user, setUser] = useState<User.UserModal>({} as User.UserModal);

  const signIn = useCallback(
    async ({ email, password }: SignInProps) => {
      const response = await handleSignIn({
        email,
        password
      });

      setUser(response?.user);
      setToken(response?.token);
    },
    [handleSignIn]
  );

  const updateUser = useCallback((userUpdated: User.UserModal) => {
    setUser((oldUser) => (!!userUpdated ? userUpdated : oldUser));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        signIn,
        updateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
