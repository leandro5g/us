import React, { useCallback, useState } from "react";
import { useUser } from "../../../../../../hooks/contexts/auth/authenticate/useUser";

import { CardPost } from "../../../../../../components/cards/card-post/card-post.component";
import { useListPost } from "../../../../../../hooks/contexts/app/list-post/useListPost";
import { Loading } from "../../../../../../components/utils/loading/loading.component";

import { Container, Scroll } from "./post-list.styles";

const PostList: React.FC = () => {
  const { user } = useUser();
  const { posts, loadPostPaginate } = useListPost();

  const [page, setPage] = useState(1);
  const [isLoadingPaginate, setIsLoadingPaginate] = useState(false);

  const handlePaginate = useCallback(() => {
    setIsLoadingPaginate(true);

    loadPostPaginate(page);
    setPage((oldValue) => oldValue + 1);

    setIsLoadingPaginate(false);
  }, [loadPostPaginate, page]);

  return (
    <Container>
      <Scroll
        showsVerticalScrollIndicator={false}
        data={posts}
        onEndReached={handlePaginate}
        onEndReachedThreshold={0.9}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => (
          <CardPost
            isUser={user?.id === item?.user_id!}
            data={item as Post.PostType}
          />
        )}
        ListFooterComponent={() => <Loading isLoading={isLoadingPaginate} />}
      />
    </Container>
  );
};

export { PostList };
