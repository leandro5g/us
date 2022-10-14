import React from "react";

import { Title } from "../../components/texts/title/title.component";
import { HeaderLogin } from "./components/header-login/header-login.component";
import { FormSignIn } from "./components/form-sign-in/form-sign-in.component";

import {
  Container,
  Content,
  SignInSvg,
  DescriptionLogin
} from "./sign-in.styles";

const SignIn: React.FC = () => {
  return (
    <Container>
      <HeaderLogin />

      <Content>
        <SignInSvg />

        <Title isLarge>Login</Title>

        <DescriptionLogin isSpam>
          Digite seu e-mail e sua senha, e entre em um ambiente onde todos podem
          te ajudar 💜
        </DescriptionLogin>

        <FormSignIn />
      </Content>
    </Container>
  );
};

export { SignIn };
