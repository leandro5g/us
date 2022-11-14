import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";

import { signUpService } from "../../../../services/sign-up-service/sign-up-service";
import { signUpSchema } from "../../../../services/sign-up-service/schema/sign-up.schema";

import { ButtonPrimary } from "../../../../components/buttons/button-primary/button-primary.component";
import { InputDefault } from "../../../../components/forms/input-default/input-default.component";

import { Container, Content } from "./form-sign-up.styles";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const FormSignUp: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(signUpSchema)
  });
  const { handleSignUp, isLoadingSignUp } = signUpService();

  const { goBack } = useNavigation();

  const handleRegisterUser = useCallback(
    async ({ email, name, password }: FormData) => {
      const body = {
        email,
        name,
        password
      };

      const response = await handleSignUp(body);

      if (response === "OK") {
        goBack();
      }
    },

    [handleSignUp]
  );

  return (
    <Container>
      <Content>
        <InputDefault
          isLoading={isLoadingSignUp}
          name="name"
          control={control}
          icon="user"
          placeholder="Nome"
          error={errors?.name?.message as string}
          keyboardType="ascii-capable"
          autoCapitalize="sentences"
        />
        <InputDefault
          isLoading={isLoadingSignUp}
          name="email"
          keyboardType="email-address"
          autoCapitalize="none"
          control={control}
          icon="mail"
          placeholder="Email@email.com"
          error={errors?.email?.message as string}
        />
        <InputDefault
          isLoading={isLoadingSignUp}
          name="password"
          control={control}
          keyboardType="ascii-capable"
          icon="lock"
          placeholder="Senha"
          error={errors?.password?.message as string}
          pass
        />
        <InputDefault
          isLoading={isLoadingSignUp}
          pass
          name="confirm_password"
          control={control}
          keyboardType="ascii-capable"
          notMargin
          icon="lock"
          placeholder="Confirmar senha"
          error={errors?.confirm_password?.message as string}
        />
      </Content>

      <ButtonPrimary
        isLoading={isLoadingSignUp}
        onPress={handleSubmit(handleRegisterUser)}
        textButton="Criar conta"
      />
    </Container>
  );
};

export { FormSignUp };
