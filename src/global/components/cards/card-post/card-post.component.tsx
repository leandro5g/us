import React, { memo, useState, useCallback } from "react";

import { HeaderCardPost } from "./components/header-card-post/header-card-post.component.tsx";
import { Comments } from "../../../../pages/home/modules/comments/comments.module";
import { FooterCardPost } from "./components/footer-card-post/footer-card-post.component";

import { Container, Content, ContentText } from "./card-post.styles";

type CardPostProps = {
  data: Post.PostType;
  isUser: boolean;
};

const CardPostComponent: React.FC<CardPostProps> = ({ data, isUser }) => {
  const [isViewModalComments, setIsViewModalComments] = useState(false);

  const handleViewComments = useCallback(() => {
    setIsViewModalComments((oldValue) => !oldValue);
  }, []);

  return (
    <Container>
      <HeaderCardPost data={data} />

      <Content>
        <ContentText isSpam>{data?.content}</ContentText>
      </Content>

      <FooterCardPost
        count_comment={data?.count_comment}
        handleViewComments={handleViewComments}
        created_at={data?.created_at}
        isUser={isUser}
      />

      <Comments isVisible={isViewModalComments} onClose={handleViewComments} />
    </Container>
  );
};

export const CardPost = memo(CardPostComponent);
