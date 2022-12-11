import { useCallback } from "react";
import { useSubmit } from "../../hooks/clients/use-submit";

export function createPostService() {
  const { isLoadSubmit, onSubmit } = useSubmit();

  const createPost = useCallback(
    async ({
      content,
      feeling_id,
      is_anonymos
    }: CreatePostService.CreatePostProps) => {
      const post = await onSubmit<Post.PostModel>({
        path: "/posts",
        body: {
          content,
          feeling_id,
          is_anonymos
        },
        message_error: "Ocorreu um erro ao criar o seu desabafo."
      });

      return post;
    },
    []
  );

  return {
    createPost,
    isLoadingCreatePost: isLoadSubmit
  };
}
