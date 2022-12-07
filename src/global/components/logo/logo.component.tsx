import React from "react";

import { Container, TitleLogo, IconUsers } from "./logo.styles";

const Logo: React.FC = () => {
  return (
    <Container>
      <IconUsers />

      <TitleLogo>US</TitleLogo>
    </Container>
  );
};

export { Logo };
