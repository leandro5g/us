import React from "react";

import { ContainerBackground } from "../../components/utils/container-background/container-background.component";
import { HeaderCreatePost } from "./components/header-create-post/header-create-post.component";
import { TextAreaInput } from "./components/text-area-input/text-area-input.component";
import { ButtonIcon } from "../../components/buttons/button-icon/button-icon.component";

import { Content, Footer } from "./create-post.styles";
import { HeaderInfoPost } from "./components/header-info-post/header-info-post.component";

const CreatePost: React.FC = () => {
  return (
    <ContainerBackground>
      <HeaderCreatePost />

      <HeaderInfoPost />

      <Content>
        <TextAreaInput />
      </Content>

      <Footer>
        <ButtonIcon icon="send" isPrimary />
      </Footer>
    </ContainerBackground>
  );
};

export { CreatePost };
