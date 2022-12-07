import React from "react";

import { Avatar } from "../../../../avatar/avatar.component";
import { Emoji } from "../../../../texts/emoji/emoji.component";
import { SubTitleDefault } from "../../../../texts/sub-title-default/sub-title-default.component";

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
          <SubTitleDefault>
            Esta se sentindo{" "}
            <SubTitleDefault type="HASTAG">
              #{data?.feeling?.title}
            </SubTitleDefault>
          </SubTitleDefault>
        </ContentInfo>
      </ContentHeader>

      <Emoji>{data?.feeling?.emoji}</Emoji>
    </Container>
  );
};

export { HeaderCardPost };
