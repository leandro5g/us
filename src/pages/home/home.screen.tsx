import React, { useEffect } from "react";
import { useListPost } from "../../hooks/contexts/app/list-post/useListPost";

import { HeaderHome } from "./components/header-home/header-home.screen";
import { CardPost } from "../../components/cards/card-post/card-post.component";
import { ContainerBackground } from "../../components/utils/container-background/container-background.component";

import { Scroll } from "./home.styles";

const Home: React.FC = () => {
  const { loadPost, posts } = useListPost();

  useEffect(() => {
    loadPost();
  }, []);

  return (
    <ContainerBackground>
      <HeaderHome />

      <Scroll
        showsVerticalScrollIndicator={false}
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardPost data={item} />}
      />
    </ContainerBackground>
  );
};

export { Home };
