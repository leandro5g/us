import React from "react";
import { ButtonVoid } from "../../../../components/buttons/button-void/button-void.component";

import {
  Container,
  ContainerAvatar,
  Avatar,
  TextButtonAvatar,
} from "./avatar-user.styles";

const AvatarUser: React.FC = () => {
  return (
    <Container>
      <ContainerAvatar>
        <Avatar
          source={{
            uri: "https://avatars.githubusercontent.com/u/100235332?v=4",
          }}
        />
      </ContainerAvatar>

      <ButtonVoid>
        <TextButtonAvatar>Alterar Foto</TextButtonAvatar>
      </ButtonVoid>
    </Container>
  );
};

export { AvatarUser };
