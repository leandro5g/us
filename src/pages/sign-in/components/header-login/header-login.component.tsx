import React from "react";
import { Logo } from "../../../../components/logo/logo.component";

import { Container } from "./header-login.styles";

const HeaderLogin: React.FC = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

export { HeaderLogin };
