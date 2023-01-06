import React, { useCallback } from "react";
import { useTheme } from "styled-components";
import { RFValue } from "../../../../../../../../global/libs/responsive-size";
import { useForm } from "react-hook-form";
import { sendCommentService } from "../../../../../../../../services/comments-services/send-comment-service";

import { Ionicons } from "@expo/vector-icons";

import { InputComment } from "../../../input-comment/input-comment.component";
import { ButtonVoid } from "../../../../../../../../global/components/buttons/button-void/button-void.component";

import { Container } from "./form-comment.styles";
import { useUser } from "../../../../../../../../hooks/contexts/auth/authenticate/useUser";
import { Loading } from "../../../../../../../../global/components/utils/loading/loading.component";

type FormData = {
  content: string;
};

type FormCommentProps = {
  handleAddCountComment(): void;
  post_id: string;
  addNewComment(comment: Comment.CommentType): void;
};

const FormComment: React.FC<FormCommentProps> = ({
  handleAddCountComment,
  post_id,
  addNewComment
}) => {
  const { COLORS } = useTheme();
  const { isLoadComment, sendComment } = sendCommentService();
  const { user } = useUser();

  const { control, watch, handleSubmit, reset } = useForm();

  const content = watch("content");

  const handleSendComment = useCallback(
    async ({ content }: FormData) => {
      const body = {
        content,
        post_id,
        user_id: user?.id
      };

      const response = await sendComment(body);

      if (response?.id) {
        const newComment: Comment.CommentType = {
          ...response,
          user
        };

        addNewComment(newComment);
        handleAddCountComment();
        reset();
      }
    },
    [handleAddCountComment, post_id, user, addNewComment]
  );

  return (
    <Container>
      <InputComment control={control} name="content" />

      <ButtonVoid
        onPress={handleSubmit(handleSendComment)}
        disabled={!content || isLoadComment}
      >
        {!isLoadComment && (
          <Ionicons
            name="send"
            size={RFValue(26)}
            color={!!content ? COLORS.PRIMARY : COLORS.CAPTION_500}
          />
        )}

        {isLoadComment && <Loading isLoading={isLoadComment} />}
      </ButtonVoid>
    </Container>
  );
};

export { FormComment };
