import React from "react";

import { ContainerBackground } from "../../components/utils/container-background/container-background.component";
import { ButtonSendPost } from "./components/button-send-post/button-send-post.component";
import { HeaderCreatePost } from "./components/header-create-post/header-create-post.component";
import { TextAreaInput } from "./components/text-area-input/text-area-input.component";

import { Content, Footer } from "./create-post.styles";

const CreatePost: React.FC = () => {
  return (
    <ContainerBackground>
      <HeaderCreatePost />

      <Content>
        <TextAreaInput />
      </Content>

      <Footer>
        <ButtonSendPost />
      </Footer>
    </ContainerBackground>
  );
};

export { CreatePost };
