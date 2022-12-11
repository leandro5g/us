import React, { useCallback, useState } from "react";
import { Comments } from "../../../../../../pages/home/modules/comments/comments.module";

import { returnDistanceDate } from "../../../../../utils/return-distance-date";

import { ButtonVoid } from "../../../../buttons/button-void/button-void.component";
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
  const [isViewModalComments, setIsViewModalComments] = useState(false);
  const [countComment, setCountComment] = useState(count_comment);

  const handleViewComments = useCallback(() => {
    setIsViewModalComments((oldValue) => !oldValue);
  }, []);

  const handleAddCountComment = useCallback(() => {
    setCountComment((oldCount) => oldCount + 1);
  }, []);

  return (
    <Container>
      <ContentFooter>
        <SubTitleDefault>{returnDistanceDate(created_at)}</SubTitleDefault>

        <ButtonVoid onPress={handleViewComments}>
          <ContentIcon>
            <IconMessage />
            {countComment > 0 && (
              <SubTitleDefault>{countComment} comentarios</SubTitleDefault>
            )}
          </ContentIcon>
        </ButtonVoid>
      </ContentFooter>

      {isUser && <IconTrash />}

      <Comments
        handleAddCountComment={handleAddCountComment}
        post_id={post_id}
        isVisible={isViewModalComments}
        onClose={handleViewComments}
      />
    </Container>
  );
};

export { FooterCardPost };
