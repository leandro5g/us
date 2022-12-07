import React from "react";
import { Switch } from "react-native";
import { useTheme } from "styled-components";

import { useIsAnonymous } from "../../../../hooks/contexts/app/create-post/useIsAnonymous";

import { SubTitleDefault } from "../../../../global/components/texts/sub-title-default/sub-title-default.component";

import { Container, IconSecret, Content } from "./switch-create-post.styles";

const SwitchCreatePost: React.FC = () => {
  const { handleChangeIsAnonymous, isAnoymous } = useIsAnonymous();

  const { COLORS } = useTheme();

  return (
    <Container>
      <SubTitleDefault>Modo anonimo</SubTitleDefault>
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
