import { useCallback, useState } from "react";
import { httpClientPut } from "../../global/libs/clients/http";

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
        showToast({
          message: "Seus dados foram atualizados com sucesso!",
          type: "success"
        });

        return userUpdate;
      } catch (error) {
        showToast({
          message: "Ocorreu um erro ao atualizar o usuario",
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
