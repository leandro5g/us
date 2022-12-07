import React from "react";
import { RFValue } from "../../../../../../global/libs/responsive-size";
import { useTheme } from "styled-components";

import { Feather } from "@expo/vector-icons";

import { Emoji } from "../../../../../../global/components/texts/emoji/emoji.component";
import { SubTitleDefault } from "../../../../../../global/components/texts/sub-title-default/sub-title-default.component";

import { Container, ContentText } from "./card-notification.styles";

const CardNotification: React.FC = () => {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Emoji>🥺</Emoji>

      <ContentText>
        <SubTitleDefault type="SPAM">
          Voçê recebeu um comentário no seu desabafo
        </SubTitleDefault>
      </ContentText>
      <Feather
        name="chevron-right"
        size={RFValue(20)}
        color={COLORS.CAPTION_400}
      />
    </Container>
  );
};

export { CardNotification };
