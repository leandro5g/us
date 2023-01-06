import React from "react";
import { useTheme } from "styled-components";
import { RFValue } from "../../../../global/libs/responsive-size";
import { useSign } from "../../../../hooks/contexts/auth/authenticate/useSign";

import { Feather } from "@expo/vector-icons";

import { ButtonVoid } from "../../../../global/components/buttons/button-void/button-void.component";
import { Title } from "../../../../global/components/texts/title/title.component";

import { Container } from "./header-profile.styles";

const HeaderProfile: React.FC = () => {
  const { COLORS } = useTheme();
  const { signOut } = useSign();

  return (
    <Container>
      <Title>Meu Perfil</Title>

      <ButtonVoid onPress={signOut}>
        <Feather name="power" size={RFValue(30)} color={COLORS.TEXT} />
      </ButtonVoid>
    </Container>
  );
};

export { HeaderProfile };
