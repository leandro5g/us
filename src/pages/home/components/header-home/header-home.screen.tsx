import React from "react";
import { useTheme } from "styled-components";
import { RFValue } from "../../../../global/libs/react-native-responsive-font-size";

import { Fontisto } from "@expo/vector-icons";

import { Avatar } from "../../../../components/avatar/avatar.component";
import { Title } from "../../../../components/texts/title/title.component";
import { Description } from "../../../../components/texts/description/description.component";

import {
  Container,
  Content,
  ContainerInfo,
  Header,
} from "./header-home.styles";
import { ModalDefault } from "../../../../components/modals/modal-default/modal-default.component";

const HeaderHome: React.FC = () => {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Header>
        <Title isSub>
          Olá, <Title>Leandro</Title>
        </Title>

        <ContainerInfo>
          <Fontisto
            name="bell"
            style={{ marginRight: RFValue(15) }}
            size={RFValue(24)}
            color={COLORS.CAPTION_300}
          />
          <Avatar />
        </ContainerInfo>
      </Header>

      <Content>
        <Description isSpam>
          Sinta-se seguro e desabafe sobre o que você precisar 💜
        </Description>
      </Content>
    </Container>
  );
};

export { HeaderHome };
