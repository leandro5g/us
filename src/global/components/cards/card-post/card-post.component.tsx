import React, { memo } from "react";

import { HeaderCardPost } from "./components/header-card-post/header-card-post.component.tsx";
import { FooterCardPost } from "./components/footer-card-post/footer-card-post.component";

import { Container, Content, ContentText } from "./card-post.styles";

type CardPostProps = {
  data: Post.PostType;
  isUser: boolean;
};

const CardPostComponent: React.FC<CardPostProps> = ({ data, isUser }) => {
  return (
    <Container>
      <HeaderCardPost data={data} />

      <Content>
        <ContentText isSpam>{data?.content}</ContentText>
      </Content>

      <FooterCardPost
        post_id={data?.id}
        count_comment={data?.count_comment}
        created_at={data?.created_at}
        isUser={isUser}
      />
    </Container>
  );
};

export const CardPost = memo(CardPostComponent);
