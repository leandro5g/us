import { useCallback, useState } from "react";
import { useFetch } from "../../hooks/clients/use-fetch";

export function lisPostService() {
  const [isLoadingListPost, setIsLoadingListPost] = useState(true);

  const getPost = useCallback(async () => {
    try {
      const posts = await useFetch<Post.PostType[]>({
        path: "/posts"
      });

      return posts;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingListPost(false);
    }
  }, []);

  return { isLoadingListPost, getPost };
}
