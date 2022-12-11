import React, { useCallback, useState } from "react";

import { ModalDefault } from "../../../../../../global/components/modals/modal-default/modal-default.component";
import { usePagination } from "../../../../../../hooks/clients/use-pagination";
import { loadCommentsService } from "../../../../../../services/comments-services/load-comments-service";
import { FormComment } from "./components/form-comment/form-comment.component";
import { ListComments } from "./components/list-comments/list-comments.component";

import { Container } from "./modal-comments.styles";

export type ModalCommentsProps = {
  isVisible: boolean;
  onClose(): void;
  post_id: string;
  handleAddCountComment(): void;
};

const ModalComments: React.FC<ModalCommentsProps> = ({
  isVisible,
  onClose,
  post_id,
  handleAddCountComment
}) => {
  const {
    data,
    isLoading,
    handleMore,
    handleRefresh,
    isLoadingPaginate,
    isRefreshing,
    addNewItemData
  } = usePagination<Comment.CommentType>({
    fetchData: loadCommentsService,
    params: {
      post_id
    }
  });

  return (
    <ModalDefault visible={isVisible} onClose={onClose} title="Comentarios">
      <Container>
        <ListComments
          comments={data}
          isLoading={isLoading}
          handleMore={handleMore}
          handleRefresh={handleRefresh}
          isLoadingPaginate={isLoadingPaginate}
          isRefreshing={isRefreshing}
        />

        <FormComment
          addNewComment={addNewItemData}
          post_id={post_id}
          handleAddCountComment={handleAddCountComment}
        />
      </Container>
    </ModalDefault>
  );
};

export { ModalComments };
