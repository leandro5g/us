import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import { ButtonPrimary } from "../../../../components/buttons/button-primary/button-primary.component";
import { InputDefault } from "../../../../components/forms/input-default/input-default.component";
import { Description } from "../../../../components/texts/description/description.component";

import {
  Container,
  Content,
  ButtonPasswordRecovery,
  ButtonSignUp
} from "./form-sign-in.styles";

const FormSignIn: React.FC = () => {
  const { navigate } = useNavigation();
  const { control } = useForm();

  const handleNavigate = useCallback(() => {
    navigate("SignUp" as never);
  }, []);

  return (
    <Container>
      <Content>
        <InputDefault
          name="email"
          control={control}
          icon="mail"
          placeholder="email@email.com"
        />
        <InputDefault
          name="password"
          control={control}
          notMargin
          icon="lock"
          placeholder="Senha"
        />
      </Content>

      <ButtonPasswordRecovery>
        <Description isAction>Esqueci minha senha</Description>
      </ButtonPasswordRecovery>

      <ButtonPrimary textButton="Entrar" />

      <ButtonSignUp onPress={handleNavigate}>
        <Description>
          Nao possui uma conta?{" "}
          <Description isAction>Cadastre-se aqui</Description>
        </Description>
      </ButtonSignUp>
    </Container>
  );
};

export { FormSignIn };
