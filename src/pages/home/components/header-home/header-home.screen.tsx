import React, { useCallback, useState } from "react";
import { useTheme } from "styled-components";
import { RFValue } from "../../../../global/libs/react-native-responsive-font-size";

import { Fontisto } from "@expo/vector-icons";

import { Avatar } from "../../../../components/avatar/avatar.component";
import { Title } from "../../../../components/texts/title/title.component";
import { Description } from "../../../../components/texts/description/description.component";
import { ModalNotifications } from "../modal-notifications/modal-notifications.component";
import { ButtonVoid } from "../../../../components/buttons/button-void/button-void.component";

import {
  Container,
  Content,
  ContainerInfo,
  Header
} from "./header-home.styles";

const HeaderHome: React.FC = () => {
  const { COLORS } = useTheme();
  const [isViewNotifications, setIsViewNotifications] = useState(false);

  const handleViewNotifications = useCallback(() => {
    setIsViewNotifications((oldValue) => !oldValue);
  }, []);

  return (
    <Container>
      <Header>
        <Title isSub>
          Olá, <Title>Leandro</Title>
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

          <Avatar />
        </ContainerInfo>
      </Header>

      <Content>
        <Description>
          Sinta-se seguro e desabafe sobre o que você precisar 💜
        </Description>
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
