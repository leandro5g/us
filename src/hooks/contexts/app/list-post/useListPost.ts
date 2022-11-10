import { useContextSelector } from "use-context-selector";
import { ListPostContext } from "../../../../contexts/app-contexts/list-post.context";

export function useListPost() {
  const posts = useContextSelector(
    ListPostContext,
    (listPostContext) => listPostContext.posts
  );

  const loadPost = useContextSelector(
    ListPostContext,
    (listPostContext) => listPostContext.loadPost
  );

  const onRefreshing = useContextSelector(
    ListPostContext,
    (listPostContext) => listPostContext.onRefreshing
  );

  return { posts, loadPost, onRefreshing };
}
