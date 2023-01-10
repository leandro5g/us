import React, { useCallback, useRef } from "react";

import { usePagination } from "../../../../hooks/clients/use-pagination";
import { loadCommentsService } from "../../../../services/comments-services/load-comments-service";

import {
  ModalDefault,
  ModalHandles
} from "../modal-default/modal-default.component";
import { KeyboardHandle } from "../../utils/keyboard-handle/keyboard-handle.component";
import { Loading } from "../../utils/loading/loading.component";
import { FormComment } from "./components/form-comment/form-comment.component";
import { ListComments } from "./components/list-comments/list-comments.component";
import { ButtonVoid } from "../../buttons/button-void/button-void.component";

import { Container, Content } from "./modal-comments.styles";

type ModalCommentsProps = {
  post_id: string;
  handleAddCountComment(): void;
  children: JSX.Element;
};

const ModalComments: React.FC<ModalCommentsProps> = ({
  post_id,
  handleAddCountComment,
  children
}) => {
  const refModalComments = useRef<ModalHandles>(null);

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

  const handleOpenModalComment = useCallback(() => {
    refModalComments?.current?.handleOpenModal();
  }, []);

  return (
    <KeyboardHandle>
      <Container>
        <ButtonVoid onPress={handleOpenModalComment}>{children}</ButtonVoid>

        <ModalDefault ref={refModalComments} title="Comentarios">
          <Content>
            {!isLoading && (
              <ListComments
                comments={data}
                isLoading={isLoading}
                handleMore={handleMore}
                handleRefresh={handleRefresh}
                isLoadingPaginate={isLoadingPaginate}
                isRefreshing={isRefreshing}
              />
            )}

            {isLoading && <Loading isLoading={isLoading} />}

            <FormComment
              addNewComment={addNewItemData}
              post_id={post_id}
              handleAddCountComment={handleAddCountComment}
            />
          </Content>
        </ModalDefault>
      </Container>
    </KeyboardHandle>
  );
};

export { ModalComments };
