import { useCallback, useState } from "react";

import { usePut } from "../../hooks/clients/use-put";
import { useToastNotification } from "../../hooks/libs/toast/toast.hook";

export function updateProfileService() {
  const { showToast } = useToastNotification();

  const [isLoadingUpdateProfile, setIsLoadingUpdateProfile] = useState(false);

  const updateProfie = useCallback(
    async ({
      email,
      name,
      old_password,
      password
    }: UpdateProfileService.Request) => {
      setIsLoadingUpdateProfile(true);

      try {
        const userUpdate = await usePut<User.UserModal>({
          body: {
            email,
            name,
            old_password,
            password
          },
          path: "/users"
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
