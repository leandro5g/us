import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { updateProfileService } from "../../../../services/update-profile/update-profile-service";
import { useUser } from "../../../../hooks/contexts/auth/authenticate/useUser";

import { yupResolver } from "@hookform/resolvers/yup";
import { updateProfileSchema } from "../../../../services/update-profile/schemas/update-profile-schema";

import { ButtonPrimary } from "../../../../components/buttons/button-primary/button-primary.component";
import { InputDefault } from "../../../../components/forms/input-default/input-default.component";

import {
  Container,
  ContainerPassword,
  TextLabelPassword
} from "./form-profile.styles";

type FormData = {
  name: string;
  email: string;
  password: string;
  old_password: string;
};

const FormProfile: React.FC = () => {
  const { user, handleUpdateUser } = useUser();
  const { isLoadingUpdateProfile, updateProfie } = updateProfileService();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(updateProfileSchema)
  });

  useEffect(() => {
    setValue("name", user?.name);
    setValue("email", user?.email);
  }, []);

  const handleSaveUser = useCallback(
    async ({ email, name, old_password, password }: FormData) => {
      const userUpdate = await updateProfie({
        email,
        name,
        old_password,
        password
      });

      handleUpdateUser(userUpdate);
    },
    []
  );

  return (
    <Container>
      <InputDefault
        control={control}
        name="name"
        icon="user"
        placeholder="Seu Nome"
        error={errors?.name?.message as string}
        isLoading={isLoadingUpdateProfile}
      />
      <InputDefault
        control={control}
        name="email"
        icon="mail"
        error={errors?.email?.message as string}
        placeholder="Seu E-mail"
        isLoading={isLoadingUpdateProfile}
      />

      <ContainerPassword>
        <TextLabelPassword>Alterar senha</TextLabelPassword>
        <InputDefault
          control={control}
          name="old_password"
          error={errors?.old_password?.message as string}
          icon="lock"
          placeholder="Senha antiga"
          isLoading={isLoadingUpdateProfile}
        />
        <InputDefault
          control={control}
          name="password"
          icon="lock"
          error={errors?.password?.message as string}
          placeholder="Nova senha"
          isLoading={isLoadingUpdateProfile}
        />
      </ContainerPassword>

      <ButtonPrimary
        onPress={handleSubmit(handleSaveUser)}
        textButton="Salvar"
        isLoading={isLoadingUpdateProfile}
      />
    </Container>
  );
};

export { FormProfile };
