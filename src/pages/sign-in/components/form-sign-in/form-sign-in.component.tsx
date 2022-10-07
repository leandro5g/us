import React from "react";

import { ButtonPrimary } from "../../../../components/buttons/button-primary/button-primary.component";
import { ButtonVoid } from "../../../../components/buttons/button-void/button-void.component";
import { InputDefault } from "../../../../components/forms/input-default/input-default.component";
import { Description } from "../../../../components/texts/description/description.component";
import { RFValue } from "../../../../global/libs/react-native-responsive-font-size";

import { Container, Content } from "./form-sign-in.styles";

const FormSignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <InputDefault icon="mail" placeholder="email@email.com" />
        <InputDefault icon="lock" placeholder="Senha" />
      </Content>

      <ButtonVoid style={{ alignSelf: "center", marginBottom: RFValue(24) }}>
        <Description isAction>Esqueci minha senha</Description>
      </ButtonVoid>

      <ButtonPrimary textButton="Entrar" />
    </Container>
  );
};

export { FormSignIn };
