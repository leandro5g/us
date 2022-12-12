import React from "react";

import { HeaderLogin } from "./components/header-login/header-login.component";
import { FormSignIn } from "./components/form-sign-in/form-sign-in.component";
import { TextDefault } from "../../global/components/texts/text-default/text-default.component";
import { KeyboardHandle } from "../../global/components/utils/keyboard-handle/keyboard-handle.component";
import { KeyboardAvoiding } from "../../global/components/utils/keyboard-avoiding/keyboard-avoiding.component";

import {
  Container,
  Content,
  SignInSvg,
  DescriptionLogin
} from "./sign-in.styles";

const SignIn: React.FC = () => {
  return (
    <KeyboardHandle>
      <Container>
        <HeaderLogin />

        <KeyboardAvoiding>
          <Content>
            <SignInSvg />

            <TextDefault type="h1">Login</TextDefault>

            <DescriptionLogin>
              Digite seu e-mail e sua senha, e entre em um ambiente onde todos
              podem te ajudar 💜
            </DescriptionLogin>

            <FormSignIn />
          </Content>
        </KeyboardAvoiding>
      </Container>
    </KeyboardHandle>
  );
};

export { SignIn };
