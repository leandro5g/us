import React from "react";

import { HeaderHome } from "./components/header-home/header-home.screen";
import { ContainerBackground } from "../../components/utils/container-background/container-background.component";
import { ListPosts } from "./components/list-posts/list-posts.component";

const Home: React.FC = () => {
  return (
    <ContainerBackground>
      <HeaderHome />
      <ListPosts />
    </ContainerBackground>
  );
};

export { Home };
