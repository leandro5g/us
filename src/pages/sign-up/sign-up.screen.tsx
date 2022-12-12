import React from "react";

import { useTheme } from "styled-components";
import { RFValue } from "../../global/libs/responsive-size";
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

import { Title } from "../../global/components/texts/title/title.component";
import { ContainerBackground } from "../../global/components/utils/container-background/container-background.component";
import { FormSignUp } from "./components/form-sign-up/form-sign-up.component";
import { KeyboardHandle } from "../../global/components/utils/keyboard-handle/keyboard-handle.component";
import { KeyboardAvoiding } from "../../global/components/utils/keyboard-avoiding/keyboard-avoiding.component";

import { Container, DescriptionRegister, ButtonIcon } from "./sign-up.styles";

const SignUp: React.FC = () => {
  const { COLORS } = useTheme();
  const { goBack } = useNavigation();

  return (
    <ContainerBackground>
      <KeyboardAvoiding>
        <KeyboardHandle>
          <Container>
            <ButtonIcon onPress={goBack}>
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
        </KeyboardHandle>
      </KeyboardAvoiding>
    </ContainerBackground>
  );
};

export { SignUp };
