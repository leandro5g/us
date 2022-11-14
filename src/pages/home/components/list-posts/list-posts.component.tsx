import React, { useCallback, useEffect, useState } from "react";
import { useListPost } from "../../../../hooks/contexts/app/list-post/useListPost";

import { Loading } from "../../../../components/utils/loading/loading.component";
import { PostList } from "./components/post-list/post-list.component";

import { Container } from "./list-posts.styles";

const ListPosts: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { loadPost } = useListPost();

  useEffect(() => {
    handleLoadPost();
  }, []);

  const handleLoadPost = useCallback(async () => {
    await loadPost();
    setIsLoading(false);
  }, []);

  return (
    <Container>
      {!isLoading && <PostList />}

      {isLoading && <Loading isLoading={isLoading} />}
    </Container>
  );
};

export { ListPosts };
