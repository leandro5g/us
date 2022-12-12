import React from "react";
import { Loading } from "../../../../../../../../global/components/utils/loading/loading.component";

import { CardComments } from "../../../card-comments/card-comments.component";

import { Container, List } from "./list-comments.styles";

type ListCommentsProps = {
  comments: Comment.CommentType[];
  isLoading: boolean;
  handleMore(): void;
  handleRefresh(): void;
  isLoadingPaginate: boolean;
  isRefreshing: boolean;
};

const ListComments: React.FC<ListCommentsProps> = ({
  handleMore,
  handleRefresh,
  isLoading,
  isLoadingPaginate,
  isRefreshing,
  comments
}) => {
  return (
    <List
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      onEndReached={handleMore}
      onEndReachedThreshold={0.8}
      showsVerticalScrollIndicator={false}
      data={comments}
      ListFooterComponent={() => <Loading isLoading={isLoadingPaginate} />}
      renderItem={({ item }) => (
        <CardComments data={item as Comment.CommentType} />
      )}
    />
  );
};

export { ListComments };
