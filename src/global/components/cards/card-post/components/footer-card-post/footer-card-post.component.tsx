import React from "react";

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
  handleViewComments(): void;
  count_comment: number;
};

const FooterCardPost: React.FC<FooterCardPostProps> = ({
  created_at,
  isUser,
  handleViewComments,
  count_comment
}) => {
  return (
    <Container>
      <ContentFooter>
        <SubTitleDefault>{returnDistanceDate(created_at)}</SubTitleDefault>

        <ButtonVoid onPress={handleViewComments}>
          <ContentIcon>
            <IconMessage />
            {count_comment > 0 && (
              <SubTitleDefault>{count_comment} comentarios</SubTitleDefault>
            )}
          </ContentIcon>
        </ButtonVoid>
      </ContentFooter>

      {isUser && <IconTrash />}
    </Container>
  );
};

export { FooterCardPost };
