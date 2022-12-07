import React, { useCallback, useState } from "react";
import { useTheme } from "styled-components";
import { RFValue } from "../../../../global/libs/responsive-size";
import { useUser } from "../../../../hooks/contexts/auth/authenticate/useUser";

import { Fontisto } from "@expo/vector-icons";

import { Avatar } from "../../../../global/components/avatar/avatar.component";
import { Title } from "../../../../global/components/texts/title/title.component";
import { ModalNotifications } from "../../modules/notifications/components/modal-notifications/modal-notifications.component";
import { ButtonVoid } from "../../../../global/components/buttons/button-void/button-void.component";
import { SubTitleDefault } from "../../../../global/components/texts/sub-title-default/sub-title-default.component";

import {
  Container,
  Content,
  ContainerInfo,
  Header
} from "./header-home.styles";

const HeaderHome: React.FC = () => {
  const { COLORS } = useTheme();
  const { user } = useUser();

  const [isViewNotifications, setIsViewNotifications] = useState(false);

  const handleViewNotifications = useCallback(() => {
    setIsViewNotifications((oldValue) => !oldValue);
  }, []);

  return (
    <Container>
      <Header>
        <Title isSub>
          Olá, <Title>{user?.name?.split(" ")?.[0]}</Title>
        </Title>

        <ContainerInfo>
          <ButtonVoid onPress={handleViewNotifications}>
            <Fontisto
              name="bell"
              style={{ marginRight: RFValue(15) }}
              size={RFValue(24)}
              color={COLORS.CAPTION_300}
            />
          </ButtonVoid>

          <Avatar name_user={user?.name} uri_avatar={user?.avatar} />
        </ContainerInfo>
      </Header>

      <Content>
        <SubTitleDefault>
          Sinta-se seguro e desabafe sobre o que você precisar 💜
        </SubTitleDefault>
      </Content>

      {isViewNotifications && (
        <ModalNotifications
          isVisible={isViewNotifications}
          onClose={handleViewNotifications}
        />
      )}
    </Container>
  );
};

export { HeaderHome };
