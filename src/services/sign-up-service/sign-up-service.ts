import { useCallback, useState } from "react";

import { useSubmit } from "../../hooks/clients/use-submit";
import { useToastNotification } from "../../hooks/libs/toast/toast.hook";

import { HttpClient } from "../../@types/clients/http.client";

import { MESSAGES_ERROR } from "../../global/utils/messages-error.utils";

type HandleSignUpProps = {
  email: string;
  password: string;
  name: string;
};

export function signUpService() {
  const [isLoadingSignUp, setIsLoadingSignUp] = useState(false);

  const { showToast } = useToastNotification();

  const handleSignUp = useCallback(
    async (body: HandleSignUpProps) => {
      setIsLoadingSignUp(true);

      try {
        const user = await useSubmit<User.UserModal>({
          path: "/users",
          body
        });

        if (user?.id) {
          showToast({
            message:
              "Sua conta foi criada com sucesso! Faça o login para entrar na plataforma.",
            type: "success"
          });

          return "OK";
        }
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
        setIsLoadingSignUp(false);
      }
    },
    [showToast]
  );

  return { isLoadingSignUp, handleSignUp };
}
