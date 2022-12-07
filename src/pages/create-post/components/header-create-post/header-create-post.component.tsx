import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { RFValue } from "../../../../global/libs/responsive-size";

import { Feather } from "@expo/vector-icons";

import { Title } from "../../../../global/components/texts/title/title.component";
import { ButtonVoid } from "../../../../global/components/buttons/button-void/button-void.component";

import { Container, WrappIcon } from "./header-create-post.styles";

const HeaderCreatePost: React.FC = () => {
  const { COLORS } = useTheme();
  const { goBack } = useNavigation();

  return (
    <Container>
      <WrappIcon>
        <ButtonVoid onPress={goBack}>
          <Feather name="chevron-left" size={RFValue(30)} color={COLORS.TEXT} />
        </ButtonVoid>
      </WrappIcon>

      <Title>Criar desabafo</Title>
    </Container>
  );
};

export { HeaderCreatePost };
