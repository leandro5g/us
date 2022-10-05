import React from "react";

import { ContainerBackground } from "../../components/utils/container-background/container-background.component";
import { HeaderProfile } from "./components/header-profile/header-profile.component";
import { ButtonPrimary } from "../../components/buttons/button-primary/button-primary.component";
import { InputDefault } from "../../components/forms/input-default/input-default.component";
import { AvatarUser } from "./components/avatar-user/avatar-user.components";

import {
  Content,
  ContainerPassword,
  TextLabelPassword,
} from "./profile.styles";

const Profile: React.FC = () => {
  return (
    <ContainerBackground>
      <HeaderProfile />

      <Content>
        <AvatarUser />

        <InputDefault placeholder="Seu Nome" />
        <InputDefault placeholder="Seu E-mail" />

        <ContainerPassword>
          <TextLabelPassword>Alterar senha</TextLabelPassword>
          <InputDefault placeholder="Senha antiga" />
          <InputDefault placeholder="Nova senha" />
        </ContainerPassword>

        <ButtonPrimary textButton="Atualizar" />
      </Content>
    </ContainerBackground>
  );
};

export { Profile };
