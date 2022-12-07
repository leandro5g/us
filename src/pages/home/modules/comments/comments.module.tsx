import React from "react";

import { Container } from "./comments.styles";
import {
  ModalComments,
  ModalCommentsProps
} from "./components/modal-comments/modal-comments.component";

type CommentsProps = ModalCommentsProps;

const Comments: React.FC<CommentsProps> = ({ isVisible, onClose }) => {
  return (
    <Container>
      <ModalComments isVisible={isVisible} onClose={onClose} />
    </Container>
  );
};

export { Comments };
