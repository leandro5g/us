import React from "react";
import { useTheme } from "styled-components";
import { RFValue } from "../../../../global/libs/react-native-responsive-font-size";

import { Feather } from "@expo/vector-icons";

import { Title } from "../../../../components/texts/title/title.component";
import { ButtonVoid } from "../../../../components/buttons/button-void/button-void.component";

import { Container, WrappIcon } from "./header-create-post.styles";

const HeaderCreatePost: React.FC = () => {
  const { COLORS } = useTheme();

  return (
    <Container>
      <WrappIcon>
        <ButtonVoid>
          <Feather name="chevron-left" size={RFValue(30)} color={COLORS.TEXT} />
        </ButtonVoid>
      </WrappIcon>

      <Title>Criar desabafo</Title>
    </Container>
  );
};

export { HeaderCreatePost };
