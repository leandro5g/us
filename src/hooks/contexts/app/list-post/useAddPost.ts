import { useContextSelector } from "use-context-selector";
import { ListPostContext } from "../../../../contexts/app-contexts/list-post.context";

export function useAddPost() {
  const addNewPost = useContextSelector(
    ListPostContext,
    (listPostContext) => listPostContext.addNewPost
  );

  return { addNewPost };
}
