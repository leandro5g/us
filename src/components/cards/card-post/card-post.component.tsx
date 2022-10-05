import React from "react";
import { useTheme } from "styled-components";

import { Feather } from "@expo/vector-icons";

import { Avatar } from "../../avatar/avatar.component";
import { Description } from "../../texts/description/description.component";

import {
  Container,
  Content,
  Footer,
  HeaderCardPost,
  ContentInfo,
  NameUser,
  Emoji,
  ContentHeader,
} from "./card-post.styles";

const CardPost: React.FC = () => {
  const { COLORS } = useTheme();

  return (
    <Container>
      <HeaderCardPost>
        <ContentHeader>
          <Avatar />

          <ContentInfo>
            <NameUser>Paulo Leandro</NameUser>
            <Description isSpam>
              Esta se sentindo <Description isHastag>#triste</Description>
            </Description>
          </ContentInfo>
        </ContentHeader>

        <Emoji>😕</Emoji>
      </HeaderCardPost>

      <Content>
        <Description>
          A expressão Lorem ipsum em design gráfico e editoração é um texto
          padrão em latim utilizado na produção gráfica para preencher os
          espaços de texto em publicações para testar e ajustar aspectos visuais
          antes de utilizar conteúdo real
        </Description>
      </Content>

      <Footer>
        <Description>Há 2h</Description>
        <Feather name="trash-2" size={24} color={COLORS.CAPTION_400} />
      </Footer>
    </Container>
  );
};

export { CardPost };
