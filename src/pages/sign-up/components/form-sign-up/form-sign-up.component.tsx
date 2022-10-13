import React from "react";

import { ButtonPrimary } from "../../../../components/buttons/button-primary/button-primary.component";
import { InputDefault } from "../../../../components/forms/input-default/input-default.component";
import { Description } from "../../../../components/texts/description/description.component";
import { RFValue } from "../../../../global/libs/react-native-responsive-font-size";

import { Container, Content } from "./form-sign-up.styles";

const FormSignUp: React.FC = () => {
  return (
    <Container>
      <Content>
        <InputDefault icon="user" placeholder="Nome" />
        <InputDefault icon="mail" placeholder="Email@email.com" />
        <InputDefault icon="lock" placeholder="Senha" />
        <InputDefault icon="lock" placeholder="Confirmar senha" />
      </Content>

      <ButtonPrimary textButton="Criar conta" />
    </Container>
  );
};

export { FormSignUp };
