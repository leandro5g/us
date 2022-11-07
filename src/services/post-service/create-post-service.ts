import { useCallback } from "react";
import { useSubmit } from "../../hooks/clients/use-submit";
import { useToastNotification } from "../../hooks/libs/toast/toast.hook";

export function useCreatePost() {
  const { isLoading, onSubmit } = useSubmit<Post.PostType>();
  const { showToast } = useToastNotification();

  const createPost = useCallback(
    async ({
      content,
      feeling_id,
      is_anonymos
    }: CreatePostService.CreatePostProps) => {
      try {
        const post = await onSubmit({
          path: "/posts",
          body: {
            content,
            feeling_id,
            is_anonymos
          }
        });

        console.log(post);

        return post;
      } catch (error) {
        console.log(error);

        showToast({
          message: "Ocorreu um erro ao criar o seu desabafo.",
          type: "danger"
        });
      }
    },
    [showToast]
  );

  return {
    createPost,
    isLoading
  };
}
