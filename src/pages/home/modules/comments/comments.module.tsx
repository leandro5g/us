import React from "react";
import { KeyboardHandle } from "../../../../global/components/utils/keyboard-handle/keyboard-handle.component";

import { Container } from "./comments.styles";
import {
  ModalComments,
  ModalCommentsProps
} from "./components/modal-comments/modal-comments.component";

interface CommentsProps extends ModalCommentsProps {
  post_id: string;
  handleAddCountComment(): void;
}

const Comments: React.FC<CommentsProps> = ({
  isVisible,
  onClose,
  post_id,
  handleAddCountComment
}) => {
  return (
    <Container>
      <ModalComments
        post_id={post_id}
        isVisible={isVisible}
        onClose={onClose}
        handleAddCountComment={handleAddCountComment}
      />
    </Container>
  );
};

export { Comments };
