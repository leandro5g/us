import React, { useCallback, useState } from "react";

import { returnDistanceDate } from "../../../../../utils/return-distance-date";

import { ModalComments } from "../../../../modals/modal-comments/modal-comments.component";
import { SubTitleDefault } from "../../../../texts/sub-title-default/sub-title-default.component";

import {
  Container,
  ContentFooter,
  IconTrash,
  IconMessage,
  ContentIcon
} from "./footer-card-post.styles";

type FooterCardPostProps = {
  created_at: Date;
  isUser: boolean;
  count_comment: number;
  post_id: string;
};

const FooterCardPost: React.FC<FooterCardPostProps> = ({
  created_at,
  isUser,
  count_comment,
  post_id
}) => {
  const [countComment, setCountComment] = useState(count_comment);

  const handleAddCountComment = useCallback(() => {
    setCountComment((oldCount) => oldCount + 1);
  }, []);

  return (
    <Container>
      <ContentFooter>
        <SubTitleDefault>{returnDistanceDate(created_at)}</SubTitleDefault>

        <ModalComments
          post_id={post_id}
          handleAddCountComment={handleAddCountComment}
        >
          <ContentIcon>
            <IconMessage />
            {countComment > 0 && (
              <SubTitleDefault>{countComment} comentarios</SubTitleDefault>
            )}
          </ContentIcon>
        </ModalComments>
      </ContentFooter>

      {isUser && <IconTrash />}
    </Container>
  );
};

export { FooterCardPost };
