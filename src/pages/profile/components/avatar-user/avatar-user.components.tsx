import React, { useCallback } from "react";
import { ButtonVoid } from "../../../../global/components/buttons/button-void/button-void.component";
import { pickImage } from "../../../../global/libs/image-picker";
import { useUser } from "../../../../hooks/contexts/auth/authenticate/useUser";
import { updateAvatarService } from "../../../../services/update-profile/update-avatar-service";

import {
  Container,
  ContainerAvatar,
  Avatar,
  TextButtonAvatar
} from "./avatar-user.styles";

const AvatarUser: React.FC = () => {
  const { user, handleUpdateUser } = useUser();

  const handlePickImage = useCallback(async () => {
    const fileUri = await pickImage();

    const user = await updateAvatarService(fileUri);

    console.log(user, "user <<<");

    handleUpdateUser(user);
  }, []);

  console.log(user?.avatar, " user?.avatar");

  return (
    <Container>
      <ContainerAvatar>
        <Avatar
          source={{
            uri: user?.avatar
          }}
        />
      </ContainerAvatar>

      <ButtonVoid onPress={handlePickImage}>
        <TextButtonAvatar>Alterar Foto</TextButtonAvatar>
      </ButtonVoid>
    </Container>
  );
};

export { AvatarUser };
