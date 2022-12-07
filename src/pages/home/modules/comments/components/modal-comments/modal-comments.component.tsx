import React from "react";

import { ModalDefault } from "../../../../../../global/components/modals/modal-default/modal-default.component";
import { CardComments } from "../card-comments/card-comments.component";
import { InputComment } from "../input-comment/input-comment.component";
import { FormComment } from "./components/form-comment/form-comment.component";

import { Container, Content } from "./modal-comments.styles";

export type ModalCommentsProps = {
  isVisible: boolean;
  onClose(): void;
};

const ModalComments: React.FC<ModalCommentsProps> = ({
  isVisible,
  onClose
}) => {
  return (
    <ModalDefault visible={isVisible} onClose={onClose} title="Comentarios">
      <Container>
        <Content>
          <CardComments />
          <CardComments />
          <CardComments />
        </Content>

        <FormComment />
      </Container>
    </ModalDefault>
  );
};

export { ModalComments };
