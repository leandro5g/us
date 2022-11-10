import React, { useEffect } from "react";

import { useListPost } from "../../hooks/contexts/app/list-post/useListPost";
import { lisPostService } from "../../services/post-service/list-post-service";

import { HeaderHome } from "./components/header-home/header-home.screen";
import { CardPost } from "../../components/cards/card-post/card-post.component";
import { ContainerBackground } from "../../components/utils/container-background/container-background.component";
import { Loading } from "../../components/utils/loading/loading.component";

import { Scroll } from "./home.styles";

const Home: React.FC = () => {
  const { loadPost, posts, onRefreshing } = useListPost();
  const { isLoadingListPost } = lisPostService();

  useEffect(() => {
    loadPost();
  }, []);

  return (
    <ContainerBackground>
      <HeaderHome />

      {isLoadingListPost && (
        <Scroll
          onRefresh={loadPost}
          refreshing={!isLoadingListPost && onRefreshing}
          showsVerticalScrollIndicator={false}
          data={posts}
          keyExtractor={(item: Post.PostType) => item?.id}
          renderItem={({ item }) => <CardPost data={item as Post.PostType} />}
        />
      )}

      {isLoadingListPost && <Loading isLoading={isLoadingListPost} />}
    </ContainerBackground>
  );
};

export { Home };
