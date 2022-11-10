import React, { useCallback, useState } from "react";
import { createContext } from "use-context-selector";
import { lisPostService } from "../../services/post-service/list-post-service";

type ListPostContextData = {
  loadPost(): Promise<void>;
  posts: Post.PostType[];
  addNewPost(newPost: Post.PostType): void;
  onRefreshing: boolean;
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
  const { getPost } = lisPostService();

  const [posts, setPosts] = useState<Post.PostType[]>([]);
  const [onRefreshing, setOnRefreshing] = useState(false);

  const loadPost = useCallback(async () => {
    setOnRefreshing(true);

    const posts = await getPost();

    setPosts(posts);

    setOnRefreshing(false);
  }, []);

  const addNewPost = useCallback((newPost: Post.PostType) => {
    setPosts((oldPosts) => [newPost, ...oldPosts]);
  }, []);

  return (
    <ListPostContext.Provider
      value={{
        loadPost,
        posts,
        addNewPost,
        onRefreshing
      }}
    >
      {children}
    </ListPostContext.Provider>
  );
};

export { ListPostContext, ListPostContextProvider };
