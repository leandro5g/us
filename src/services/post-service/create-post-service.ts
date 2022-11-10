import { useCallback, useState } from "react";
import { useSubmit } from "../../hooks/clients/use-submit";
import { useToastNotification } from "../../hooks/libs/toast/toast.hook";

export function createPostService() {
  const [isLoadingCreatePost, setIsLoadingCreatePost] = useState(false);

  const { showToast } = useToastNotification();

  const createPost = useCallback(
    async ({
      content,
      feeling_id,
      is_anonymos
    }: CreatePostService.CreatePostProps) => {
      setIsLoadingCreatePost(true);

      try {
        const post = await useSubmit<Post.PostModel>({
          path: "/posts",
          body: {
            content,
            feeling_id,
            is_anonymos
          }
        });

        return post;
      } catch (error) {
        showToast({
          message: "Ocorreu um erro ao criar o seu desabafo.",
          type: "danger"
        });
      } finally {
        setIsLoadingCreatePost(false);
      }
    },
    [showToast]
  );

  return {
    createPost,
    isLoadingCreatePost
  };
}
