import { useContextSelector } from "use-context-selector";
import { CreatePostContext } from "../../../../contexts/app-contexts/create-post.context";

export function useIsAnonymous() {
  const isAnoymous = useContextSelector(
    CreatePostContext,
    (createPostContext) => createPostContext.isAnonymous
  );

  const handleChangeIsAnonymous = useContextSelector(
    CreatePostContext,
    (createPostContext) => createPostContext.handleChangeIsAnonymous
  );

  return { handleChangeIsAnonymous, isAnoymous };
}
