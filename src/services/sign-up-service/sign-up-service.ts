import React, { useCallback } from "react";

import { useSubmit } from "../../hooks/clients/use-submit";
import { useToastNotification } from "../../hooks/libs/toast/toast.hook";

type HandleSignUpProps = {
  email: string;
  password: string;
  name: string;
};

export function useSignUp() {
  const { isLoading, onSubmit } = useSubmit<User.UserModal>();
  const { showToast } = useToastNotification();

  const handleSignUp = useCallback(
    async (body: HandleSignUpProps) => {
      try {
        const user = await onSubmit({
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
        showToast({
          message:
            "Ocorreu um erro inesperado ao tentar realizar seu cadastro.",
          type: "danger"
        });
      }
    },
    [onSubmit, showToast]
  );

  return { isLoading, handleSignUp };
}
