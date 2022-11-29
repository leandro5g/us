import { useState } from "react";
import { httpClientPut } from "../../global/clients/http";

export async function updateAvatarService(
  base64: string
): Promise<User.UserModal> {
  const [isLoadingUpdateAvatarService] = useState(false);

  try {
    const user = await httpClientPut<User.UserModal>({
      path: "/users/avatar",
      body: {
        avatar: base64
      }
    });

    return user;
  } catch (error) {
    console.log(error);
  }
}
