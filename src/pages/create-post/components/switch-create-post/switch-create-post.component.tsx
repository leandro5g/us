import React from "react";
import { Switch } from "react-native";
import { RFValue } from "../../../../global/libs/responsive-size";
import { useTheme } from "styled-components";

import { useIsAnonymous } from "../../../../hooks/contexts/app/create-post/useIsAnonymous";

import { Container, IconSecret, Content } from "./switch-create-post.styles";
import { Description } from "../../../../components/texts/description/description.component";

const SwitchCreatePost: React.FC = () => {
  const { handleChangeIsAnonymous, isAnoymous } = useIsAnonymous();

  const { COLORS } = useTheme();

  return (
    <Container>
      <Description>Modo anonimo</Description>
      <Content>
        <Switch
          style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
          thumbColor={COLORS.TEXT}
          trackColor={{
            false: COLORS.SHAPE_LIGHT,
            true: COLORS.PRIMARY
          }}
          value={isAnoymous}
          onValueChange={handleChangeIsAnonymous}
        />

        <IconSecret color={isAnoymous ? COLORS.PRIMARY : COLORS.CAPTION_500} />
      </Content>
    </Container>
  );
};

export { SwitchCreatePost };
