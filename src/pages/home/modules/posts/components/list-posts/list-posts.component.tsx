import React, { useCallback } from "react";
import { useUser } from "../../../../../../hooks/contexts/auth/authenticate/useUser";

import { lisPostService } from "../../../../../../services/post-service/list-post-service";

import { CardPost } from "../../../../../../global/components/cards/card-post/card-post.component";
import { ListRenderItemInfo } from "react-native";
import { ListData } from "../../../../../../global/components/utils/list-data/list-data.component";

import { Container } from "./list-posts.styles";

const ListPosts: React.FC = () => {
  const { user } = useUser();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Post.PostType>) => {
      return (
        <CardPost
          isUser={user?.id === item?.user_id}
          data={item as Post.PostType}
        />
      );
    },
    []
  );

  return (
    <Container>
      <ListData<Post.PostType>
        renderItem={renderItem}
        fetchData={lisPostService}
      />
    </Container>
  );
};

export { ListPosts };
