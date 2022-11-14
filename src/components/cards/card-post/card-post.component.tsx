import React, { memo } from "react";
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
  ContentHeader,
  ContentText
} from "./card-post.styles";
import { returnDistanceDate } from "../../../global/utils/return-distance-date";

type CardPostProps = {
  data: Post.PostType;
  isUser: boolean;
};

const CardPostComponent: React.FC<CardPostProps> = ({ data, isUser }) => {
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
            <Description>
              Esta se sentindo{" "}
              <Description isHastag>#{data?.feeling?.title}</Description>
            </Description>
          </ContentInfo>
        </ContentHeader>

        <Emoji>{data?.feeling?.emoji}</Emoji>
      </HeaderCardPost>

      <Content>
        <ContentText isSpam>{data?.content}</ContentText>
      </Content>

      <Footer>
        <Description>{returnDistanceDate(data?.created_at)}</Description>

        {isUser && (
          <Feather name="trash-2" size={24} color={COLORS.CAPTION_400} />
        )}
      </Footer>
    </Container>
  );
};

export const CardPost = memo(CardPostComponent);
