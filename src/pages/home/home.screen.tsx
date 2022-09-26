import React from "react";

import { HeaderHome } from "./components/header-home/header-home.screen";
import { CardPost } from "../../components/cards/card-post/card-post.component";

import { Container, Scroll } from "./home.styles";

const Home: React.FC = () => {
  return (
    <Container>
      <HeaderHome />

      <Scroll showsVerticalScrollIndicator={false}>
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
      </Scroll>
    </Container>
  );
};

export { Home };
