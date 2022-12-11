import React from "react";
import { Avatar } from "../../../../../../global/components/avatar/avatar.component";
import { SubTitleDefault } from "../../../../../../global/components/texts/sub-title-default/sub-title-default.component";
import { TextDefault } from "../../../../../../global/components/texts/text-default/text-default.component";

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
