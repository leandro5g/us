import { useCallback } from "react";
import { useSubmit } from "../../hooks/clients/use-submit";

import { setDefaultToken } from "../../global/libs/clients/http";

type HandleSignInProps = {
  email: string;
  password: string;
};

export function signInService() {
  const { isLoadSubmit, onSubmit } = useSubmit();

  const handleSignIn = useCallback(
    async ({ email, password }: HandleSignInProps) => {
      const body = {
        email,
        password
      };

      const { token, user } = await onSubmit<SignInService.SignInReponse>({
        path: "/sessions",
        body,
        message_error:
          "Ocorreu um erro inesperado ao realizar o login. Tente novamente."
      });

      setDefaultToken(token);

      return {
        token,
        user
      };
    },
    []
  );

  return { isLoadingSignIn: isLoadSubmit, handleSignIn };
}
