import React, { useCallback, useState } from "react";
import { createContext } from "use-context-selector";
import { useSignIn } from "../../services/sign-in-service/sign-in-service";

type SignInProps = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(data: SignInProps): Promise<void>;
  token: string;
  user: User.UserModal;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children
}) => {
  const { handleSignIn } = useSignIn();

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

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
