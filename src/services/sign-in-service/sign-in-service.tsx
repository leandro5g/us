import { useCallback, useState } from "react";
import { useSubmit } from "../../hooks/clients/use-submit";
import { useToastNotification } from "../../hooks/libs/toast/toast.hook";

import { HttpClient } from "../../@types/clients/http.client";

import { setDefaultToken } from "../../global/clients/http";

import { MESSAGES_ERROR } from "../../global/utils/messages-error.utils";

type HandleSignInProps = {
  email: string;
  password: string;
};

export function signInService() {
  const { showToast } = useToastNotification();

  const [isLoadingSignIn, setIsLoadingSignIn] = useState(false);

  const handleSignIn = useCallback(
    async ({ email, password }: HandleSignInProps) => {
      setIsLoadingSignIn(true);

      try {
        const body = {
          email,
          password
        };

        const { token, user } = await useSubmit<SignInService.SignInReponse>({
          path: "/sessions",
          body
        });

        setDefaultToken(token);

        return {
          token,
          user
        };
      } catch (error) {
        const errorResponse = error as ExternalModules.Axios.AxiosError;
        let responseError = errorResponse?.response
          ?.data as HttpClient.ResponseErrorHTTP;

        showToast({
          message:
            MESSAGES_ERROR[responseError?.code_error] ||
            "Ocorreu um erro inesperado ao realizar o login. Tente novamente.",
          type: "danger"
        });
      } finally {
        setIsLoadingSignIn(false);
      }
    },
    []
  );

  return { isLoadingSignIn, handleSignIn };
}
