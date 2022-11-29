import React from "react";

import {
  Container,
  ImageAvatar,
  AvatarText,
  IconSecret
} from "./avatar.styles";

type AvatarProps = {
  uri_avatar?: string;
  name_user: string;
  is_anonymos?: boolean;
};

const Avatar: React.FC<AvatarProps> = ({
  uri_avatar,
  name_user,
  is_anonymos
}) => {
  return (
    <Container>
      {!is_anonymos && (
        <>
          {uri_avatar && (
            <ImageAvatar
              source={{
                uri: uri_avatar
              }}
            />
          )}

          <AvatarText>{name_user?.[0]}</AvatarText>
        </>
      )}

      {is_anonymos && <IconSecret />}
    </Container>
  );
};

export { Avatar };
