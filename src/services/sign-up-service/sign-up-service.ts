import { useCallback } from "react";

import { useToastNotification } from "../../hooks/libs/toast/toast.hook";

import { useSubmit } from "../../hooks/clients/use-submit";

type HandleSignUpProps = {
  email: string;
  password: string;
  name: string;
};

export function signUpService() {
  const { isLoadSubmit, onSubmit } = useSubmit();

  const { showToast } = useToastNotification();

  const handleSignUp = useCallback(
    async (body: HandleSignUpProps) => {
      const user = await onSubmit<User.UserModal>({
        path: "/users",
        body,
        message_error:
          "Ocorreu um erro inesperado ao realizar o login. Tente novamente."
      });

      if (user?.id) {
        showToast({
          message:
            "Sua conta foi criada com sucesso! Faça o login para entrar na plataforma.",
          type: "success"
        });

        return "OK";
      }
    },
    [showToast]
  );

  return { isLoadingSignUp: isLoadSubmit, handleSignUp };
}
