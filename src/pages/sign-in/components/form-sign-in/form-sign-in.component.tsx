import React from "react";
import { RFValue } from "../../../../global/libs/react-native-responsive-font-size";

import { ButtonPrimary } from "../../../../components/buttons/button-primary/button-primary.component";
import { ButtonVoid } from "../../../../components/buttons/button-void/button-void.component";
import { InputDefault } from "../../../../components/forms/input-default/input-default.component";
import { Description } from "../../../../components/texts/description/description.component";

import {
  Container,
  Content,
  ButtonPasswordRecovery
} from "./form-sign-in.styles";

const FormSignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <InputDefault icon="mail" placeholder="email@email.com" />
        <InputDefault notMargin icon="lock" placeholder="Senha" />
      </Content>

      <ButtonPasswordRecovery>
        <Description isAction>Esqueci minha senha</Description>
      </ButtonPasswordRecovery>

      <ButtonPrimary textButton="Entrar" />

      <ButtonPasswordRecovery>
        <Description>
          Nao possui uma conta?{" "}
          <Description isAction>Cadastre-se aqui</Description>
        </Description>
      </ButtonPasswordRecovery>
    </Container>
  );
};

export { FormSignIn };
