import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { signInService } from "../../../../services/sign-in-service/sign-in-service";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSign } from "../../../../hooks/contexts/auth/authenticate/useSign";

import { signInSchema } from "../../../../services/sign-in-service/schema/sign-in.schema";

import { ButtonPrimary } from "../../../../components/buttons/button-primary/button-primary.component";
import { InputDefault } from "../../../../components/forms/input-default/input-default.component";
import { Description } from "../../../../components/texts/description/description.component";

import {
  Container,
  Content,
  ButtonPasswordRecovery,
  ButtonSignUp
} from "./form-sign-in.styles";

type FormData = {
  email: string;
  password: string;
};

const FormSignIn: React.FC = () => {
  const { isLoadingSignIn } = signInService();
  const { signIn } = useSign();

  const { navigate } = useNavigation();
  const {
    control,
    formState: { errors },
    handleSubmit
  } = useForm({
    resolver: yupResolver(signInSchema)
  });

  const handleNavigate = useCallback(() => {
    navigate("SignUp" as never);
  }, []);

  const onSubmit = useCallback(async ({ email, password }: FormData) => {
    await signIn({
      email,
      password
    });
  }, []);

  return (
    <Container>
      <Content>
        <InputDefault
          name="email"
          control={control}
          icon="mail"
          placeholder="email@email.com"
          error={errors?.email?.message as string}
          keyboardType="email-address"
          autoCapitalize="none"
          isLoading={isLoadingSignIn}
        />
        <InputDefault
          name="password"
          control={control}
          notMargin
          icon="lock"
          placeholder="Senha"
          pass
          autoCapitalize="none"
          error={errors?.password?.message as string}
          keyboardType="ascii-capable"
          isLoading={isLoadingSignIn}
        />
      </Content>

      <ButtonPasswordRecovery>
        <Description isAction>Esqueci minha senha</Description>
      </ButtonPasswordRecovery>

      <ButtonPrimary
        isLoading={isLoadingSignIn}
        onPress={handleSubmit(onSubmit)}
        textButton="Entrar"
      />

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
