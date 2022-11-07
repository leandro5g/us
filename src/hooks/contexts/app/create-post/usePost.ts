import { useContextSelector } from "use-context-selector";
import { CreatePostContext } from "../../../../contexts/app-contexts/create-post.context";

export function usePost() {
  const onCreatePost = useContextSelector(
    CreatePostContext,
    (createPostContext) => createPostContext.onCreatePost
  );

  return {
    onCreatePost
  };
}
