import React, { memo } from "react";
import { useTheme } from "styled-components";

import { returnDistanceDate } from "../../../global/utils/return-distance-date";

import { Feather } from "@expo/vector-icons";

import { Description } from "../../texts/description/description.component";
import { HeaderCardPost } from "./components/header-card-post/header-card-post.component.tsx";

import { Container, Content, Footer, ContentText } from "./card-post.styles";

type CardPostProps = {
  data: Post.PostType;
  isUser: boolean;
};

const CardPostComponent: React.FC<CardPostProps> = ({ data, isUser }) => {
  const { COLORS } = useTheme();

  return (
    <Container>
      <HeaderCardPost data={data} />

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
