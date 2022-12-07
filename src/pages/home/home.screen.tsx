import React from "react";

import { HeaderHome } from "./components/header-home/header-home.screen";
import { ContainerBackground } from "../../global/components/utils/container-background/container-background.component";
import { Posts } from "./modules/posts/posts.modules";

const Home: React.FC = () => {
  return (
    <ContainerBackground>
      <HeaderHome />
      <Posts />
    </ContainerBackground>
  );
};

export { Home };
