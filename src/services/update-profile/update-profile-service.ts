import { useCallback, useState } from "react";
import { HttpClient } from "../../@types/clients/http.client";
import { httpClientPut } from "../../global/libs/clients/http";
import { MESSAGES_ERROR } from "../../global/utils/messages-error.utils";

import { useToastNotification } from "../../hooks/libs/toast/toast.hook";

export function updateProfileService() {
  const { showToast } = useToastNotification();

  const [isLoadingUpdateProfile, setIsLoadingUpdateProfile] = useState(false);

  const updateProfie = useCallback(
    async ({
      name,
      old_password,
      password,
      user_id
    }: UpdateProfileService.Request) => {
      setIsLoadingUpdateProfile(true);

      try {
        const userUpdate = await httpClientPut<User.UserModal>({
          body: {
            name,
            old_password,
            password
          },
          path: `/profile/${user_id}`
        });

        if (!old_password || !old_password) {
          showToast({
            message: "Seus dados foram atualizados com sucesso!",
            type: "success"
          });
        } else {
          showToast({
            message: "A sua senha e seus dados foram atualizados com sucesso!",
            type: "success",
            duration: 4000
          });
        }

        return userUpdate;
      } catch (error) {
        const errorResponse = error as ExternalModules.Axios.AxiosError;
        let responseError = errorResponse?.response
          ?.data as HttpClient.ResponseErrorHTTP;

        const messageError =
          responseError?.code_error === 2
            ? "Senha inválida"
            : "Ocorreu um erro ao atualizar o usuario";

        showToast({
          message: messageError,
          type: "danger"
        });
      } finally {
        setIsLoadingUpdateProfile(false);
      }
    },
    [showToast]
  );

  return { updateProfie, isLoadingUpdateProfile };
}
