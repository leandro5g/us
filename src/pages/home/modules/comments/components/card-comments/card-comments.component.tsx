import React from "react";
import { Avatar } from "../../../../../../global/components/avatar/avatar.component";
import { TextDefault } from "../../../../../../global/components/texts/text-default/text-default.component";

import { Container, Content } from "./card-comments.styles";

const CardComments: React.FC = () => {
  return (
    <Container>
      <Avatar
        name_user="PA"
        uri_avatar="https://arcosmodels.com/wp-content/uploads/2017/08/ANDRE-ZIEHE-290x380.jpg"
      />
      <Content>
        <TextDefault type="h2">Paulo Leandro</TextDefault>
        <TextDefault type="h3">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s,
        </TextDefault>
      </Content>
    </Container>
  );
};

export { CardComments };
