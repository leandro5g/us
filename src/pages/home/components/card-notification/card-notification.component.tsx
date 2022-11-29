import React from "react";
import { RFValue } from "../../../../global/libs/responsive-size";
import { useTheme } from "styled-components";

import { Feather } from "@expo/vector-icons";

import { Description } from "../../../../components/texts/description/description.component";
import { Emoji } from "../../../../components/texts/emoji/emoji.component";

import { Container, ContentText } from "./card-notification.styles";

const CardNotification: React.FC = () => {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Emoji>🥺</Emoji>

      <ContentText>
        <Description isSpam>
          Voçê recebeu um comentário no seu desabafo
        </Description>
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
