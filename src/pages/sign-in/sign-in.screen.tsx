import React from "react";

import LoginSvg from "../../assets/svgs/login-svg.svg";

import { ButtonPrimary } from "../../components/buttons/button-primary/button-primary.component";
import { InputDefault } from "../../components/forms/input-default/input-default.component";
import { Description } from "../../components/texts/description/description.component";

import { ContainerBackground } from "../../components/utils/container-background/container-background.component";

import { Container, Form } from "./sign-in.styles";

const SignIn: React.FC = () => {
  return (
    <ContainerBackground>
      <Container>
        <Description isSpam>
          Digite seu e-mail e sua senha, e entre em um ambiente onde todos podem
          te ajudar 💜
        </Description>

        <Form>
          <InputDefault placeholder="email@email.com" />
          <InputDefault placeholder="Senha" />
        </Form>

        <ButtonPrimary textButton="Entrar" />
      </Container>
    </ContainerBackground>
  );
};

export { SignIn };
