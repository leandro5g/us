import React from "react";

import { Description } from "../../../../texts/description/description.component";
import { Avatar } from "../../../../avatar/avatar.component";
import { Emoji } from "../../../../texts/emoji/emoji.component";

import {
  Container,
  ContentInfo,
  NameUser,
  ContentHeader
} from "./header-card-post.styles";

type HeaderCardPostProps = {
  data: Post.PostType;
};

const HeaderCardPost: React.FC<HeaderCardPostProps> = ({ data }) => {
  return (
    <Container>
      <ContentHeader>
        <Avatar
          is_anonymos={data?.is_anonymos}
          name_user={data?.user?.name}
          uri_avatar={data?.user?.avatar}
        />

        <ContentInfo>
          <NameUser is_anonymos={data?.is_anonymos}>
            {data?.is_anonymos ? "Modo anônimo" : data?.user?.name}
          </NameUser>
          <Description>
            Esta se sentindo{" "}
            <Description isHastag>#{data?.feeling?.title}</Description>
          </Description>
        </ContentInfo>
      </ContentHeader>

      <Emoji>{data?.feeling?.emoji}</Emoji>
    </Container>
  );
};

export { HeaderCardPost };
