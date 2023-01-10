import React from "react";
import { useUser } from "../../../../hooks/contexts/auth/authenticate/useUser";

import { Avatar } from "../../../../global/components/avatar/avatar.component";
import { ModalNotifications } from "../../modules/notifications/components/modal-notifications/modal-notifications.component";
import { SubTitleDefault } from "../../../../global/components/texts/sub-title-default/sub-title-default.component";
import { TextDefault } from "../../../../global/components/texts/text-default/text-default.component";

import {
  Container,
  Content,
  ContainerInfo,
  Header
} from "./header-home.styles";

const HeaderHome: React.FC = () => {
  const { user } = useUser();

  return (
    <Container>
      <Header>
        <TextDefault type="h3">
          Olá,{" "}
          <TextDefault type="h2">{user?.name?.split(" ")?.[0]}</TextDefault>
        </TextDefault>

        <ContainerInfo>
          <ModalNotifications />

          <Avatar name_user={user?.name} uri_avatar={user?.avatar} />
        </ContainerInfo>
      </Header>

      <Content>
        <SubTitleDefault>
          Sinta-se seguro e desabafe sobre o que você precisar 💜
        </SubTitleDefault>
      </Content>
    </Container>
  );
};

export { HeaderHome };
