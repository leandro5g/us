import { useCallback } from "react";
import { useFetch } from "../../hooks/clients/use-fetch";

export function useListPost() {
  const { handleFetch, isLoading } = useFetch<Post.PostType[]>();

  const getPost = useCallback(async () => {
    try {
      const posts = await handleFetch({
        path: "/posts"
      });

      return posts;
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { isLoading, getPost };
}
