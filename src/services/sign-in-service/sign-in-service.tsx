import React, { useCallback } from "react";
import { HttpClient } from "../../@types/clients/http.client";
import { CodeStatusError } from "../../@types/dtos/code-status-error";

import { setDefaultToken } from "../../global/clients/http";

import { useSubmit } from "../../hooks/clients/use-submit";
import { useToastNotification } from "../../hooks/libs/toast/toast.hook";

type HandleSignInProps = {
  email: string;
  password: string;
};

export function useSignIn() {
  const { isLoading, onSubmit } = useSubmit<SignInService.SignInReponse>();
  const { showToast } = useToastNotification();

  const handleSignIn = useCallback(
    async ({ email, password }: HandleSignInProps) => {
      try {
        const body = {
          email,
          password
        };

        const { token, user } = await onSubmit({
          path: "/sessions",
          body
        });

        setDefaultToken(token);

        return {
          token,
          user
        };
      } catch (error) {
        console.log(error, "error");

        const errorResponse = error as ExternalModules.Axios.AxiosError;
        let responseError = errorResponse?.response
          ?.data as HttpClient.ResponseErrorHTTP;

        if (
          responseError?.code_error === CodeStatusError.EMAIL_PASSWORD_NOT_MATCH
        ) {
          showToast({
            message: "E-mail ou senha inválidos.",
            type: "danger"
          });

          return;
        }

        if (responseError?.code_error === CodeStatusError.USER_NOT_FOUND) {
          showToast({
            message: "E-mail não registrado.",
            type: "danger"
          });

          return;
        }

        showToast({
          message: "Ocorreu um erro inesperado ao tentar realizar seu login.",
          type: "danger"
        });
      }
    },
    []
  );

  return { isLoading, handleSignIn };
}
