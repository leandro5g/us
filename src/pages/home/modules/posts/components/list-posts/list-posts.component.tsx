import React from "react";
import { usePagination } from "../../../../../../hooks/clients/use-pagination";
import { useUser } from "../../../../../../hooks/contexts/auth/authenticate/useUser";

import { lisPostService } from "../../../../../../services/post-service/list-post-service";

import { Loading } from "../../../../../../global/components/utils/loading/loading.component";
import { CardPost } from "../../../../../../global/components/cards/card-post/card-post.component";
import { ListRenderItemInfo } from "react-native";

import { Container, Scroll, Content } from "./list-posts.styles";

const ListPosts: React.FC = () => {
  const { user } = useUser();

  const {
    data,
    handleMore,
    isLoading,
    isLoadingPaginate,
    handleRefresh,
    isRefreshing
  } = usePagination<Post.PostType>({ fetchData: lisPostService });

  return (
    <Container>
      {!isLoading && (
        <Content>
          <Scroll
            showsVerticalScrollIndicator={false}
            data={data}
            onRefresh={handleRefresh}
            refreshing={isRefreshing}
            onEndReached={handleMore}
            onEndReachedThreshold={0.7}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item }: ListRenderItemInfo<Post.PostType>) => (
              <CardPost
                isUser={user?.id === item?.user_id}
                data={item as Post.PostType}
              />
            )}
            ListFooterComponent={() => (
              <Loading isLoading={isLoadingPaginate} />
            )}
          />
        </Content>
      )}

      {isLoading && <Loading isLoading={isLoading} />}
    </Container>
  );
};

export { ListPosts };
