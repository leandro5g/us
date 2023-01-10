import React from "react";
import { Avatar } from "../../avatar/avatar.component";

import {
  Container,
  Content,
  NameUserComment,
  ContentComment
} from "./card-comments.styles";

type CardCommentsProps = {
  data: Comment.CommentType;
};

const CardComments: React.FC<CardCommentsProps> = ({ data }) => {
  return (
    <Container>
      <Avatar name_user={data?.user?.name} uri_avatar={data?.user?.avatar} />
      <Content>
        <NameUserComment type="h3">{data?.user?.name}</NameUserComment>
        <ContentComment>{data?.content}</ContentComment>
      </Content>
    </Container>
  );
};

export { CardComments };
