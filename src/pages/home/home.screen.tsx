import React from "react";

import { HeaderHome } from "./components/header-home/header-home.screen";
import { CardPost } from "../../components/cards/card-post/card-post.component";
import { ContainerBackground } from "../../components/utils/container-background/container-background.component";

import { Scroll } from "./home.styles";

const Home: React.FC = () => {
  return (
    <ContainerBackground>
      <HeaderHome />

      <Scroll showsVerticalScrollIndicator={false}>
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
      </Scroll>
    </ContainerBackground>
  );
};

export { Home };
