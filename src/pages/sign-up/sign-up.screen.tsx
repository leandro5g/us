import React from "react";
import { useTheme } from "styled-components";
import { RFValue } from "../../global/libs/react-native-responsive-font-size";

import { Feather } from "@expo/vector-icons";

import { Title } from "../../components/texts/title/title.component";
import { ContainerBackground } from "../../components/utils/container-background/container-background.component";
import { FormSignUp } from "./components/form-sign-up/form-sign-up.component";

import { Container, DescriptionRegister, ButtonIcon } from "./sign-up.styles";

const SignUp: React.FC = () => {
  const { COLORS } = useTheme();

  return (
    <ContainerBackground>
      <Container>
        <ButtonIcon>
          <Feather
            name="arrow-left"
            color={COLORS.PRIMARY}
            size={RFValue(30)}
          />
        </ButtonIcon>

        <Title isLarge>Criar conta</Title>

        <DescriptionRegister>
          Preencha suas informacoes{`\n`}abaixo para se registrar no US.
        </DescriptionRegister>

        <FormSignUp />
      </Container>
    </ContainerBackground>
  );
};

export { SignUp };
