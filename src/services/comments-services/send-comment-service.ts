import { useCallback } from "react";
import { useSubmit } from "../../hooks/clients/use-submit";

type SendCommentProps = {
  content: string;
  post_id: string;
  user_id: string;
};

export function sendCommentService() {
  const { isLoadSubmit, onSubmit } = useSubmit();

  const sendComment = useCallback(async (body: SendCommentProps) => {
    const comment = await onSubmit<Comment.CommentType>({
      path: "/comments",
      body,
      message_error: "Ocorreu um erro inesperado."
    });

    return comment;
  }, []);

  return { isLoadComment: isLoadSubmit, sendComment };
}
