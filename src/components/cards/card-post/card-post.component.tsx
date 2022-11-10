import React from "react";
import { useTheme } from "styled-components";

import { Feather } from "@expo/vector-icons";

import { Avatar } from "../../avatar/avatar.component";
import { Description } from "../../texts/description/description.component";
import { Emoji } from "../../texts/emoji/emoji.component";

import {
  Container,
  Content,
  Footer,
  HeaderCardPost,
  ContentInfo,
  NameUser,
  ContentHeader
} from "./card-post.styles";

type CardPostProps = {
  data: Post.PostType;
};

const CardPost: React.FC<CardPostProps> = ({ data }) => {
  const { COLORS } = useTheme();

  return (
    <Container>
      <HeaderCardPost>
        <ContentHeader>
          <Avatar
            name_user={data?.user?.name}
            uri_avatar={data?.user?.avatar}
          />

          <ContentInfo>
            <NameUser>{data?.user?.name}</NameUser>
            <Description isSpam>
              Esta se sentindo{" "}
              <Description isHastag>#{data?.feeling?.title}</Description>
            </Description>
          </ContentInfo>
        </ContentHeader>

        <Emoji>{data?.feeling?.emoji}</Emoji>
      </HeaderCardPost>

      <Content>
        <Description>{data?.content}</Description>
      </Content>

      <Footer>
        <Description>Há 2h</Description>
        <Feather name="trash-2" size={24} color={COLORS.CAPTION_400} />
      </Footer>
    </Container>
  );
};

export { CardPost };
