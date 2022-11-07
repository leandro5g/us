import React, { useCallback, useState } from "react";
import { createContext } from "use-context-selector";
import { useListPost } from "../../services/post-service/list-post-service";

type ListPostContextData = {
  loadPost(): Promise<void>;
  posts: Post.PostType[];
};

const ListPostContext = createContext<ListPostContextData>(
  {} as ListPostContextData
);

type ListPostContextProviderProps = {
  children: React.ReactNode;
};

const ListPostContextProvider: React.FC<ListPostContextProviderProps> = ({
  children
}) => {
  const { getPost } = useListPost();

  const [posts, setPosts] = useState<Post.PostType[]>([]);

  const loadPost = useCallback(async () => {
    const posts = await getPost();

    setPosts(posts);
  }, []);

  return (
    <ListPostContext.Provider
      value={{
        loadPost,
        posts
      }}
    >
      {children}
    </ListPostContext.Provider>
  );
};

export { ListPostContext, ListPostContextProvider };
