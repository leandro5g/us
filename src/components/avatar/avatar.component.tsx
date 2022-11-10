import React from "react";

import { Container, ImageAvatar, AvatarText } from "./avatar.styles";

type AvatarProps = {
  uri_avatar?: string;
  name_user: string;
};

const Avatar: React.FC<AvatarProps> = ({ uri_avatar, name_user }) => {
  return (
    <Container>
      {uri_avatar && (
        <ImageAvatar
          source={{
            uri: uri_avatar
          }}
        />
      )}

      <AvatarText>{name_user?.[0]}</AvatarText>
    </Container>
  );
};

export { Avatar };
