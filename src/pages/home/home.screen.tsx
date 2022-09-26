import React from "react";

import { HeaderHome } from "./components/header-home/header-home.screen";

import { Container } from "./home.styles";

const Home: React.FC = () => {
  return (
    <Container>
      <HeaderHome />
    </Container>
  );
};

export { Home };
