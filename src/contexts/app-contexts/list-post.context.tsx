import React, { useCallback, useState } from "react";
import { createContext } from "use-context-selector";
import { lisPostService } from "../../services/post-service/list-post-service";

type ListPostContextData = {
  loadPost(): Promise<void>;
  posts: Post.PostType[];
  addNewPost(newPost: Post.PostType): void;
  loadPostPaginate(page: number): Promise<void>;
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
  const [totalPage, setTotalPage] = useState(0);

  const loadPost = useCallback(async () => {
    const { posts, total_page } = await getPost({
      page: 0
    });

    setPosts(posts);

    setTotalPage(total_page);
  }, []);

  const loadPostPaginate = useCallback(
    async (page: number) => {
      if (page > totalPage) return;

      const response = await getPost({
        page
      });

      setTotalPage(response.total_page);

      console.log({
        total_page: response.total_page,
        page
      });

      setPosts((oldPosts) => [...oldPosts, ...response.posts]);
    },
    [totalPage]
  );

  const addNewPost = useCallback((newPost: Post.PostType) => {
    setPosts((oldPosts) => [newPost, ...oldPosts]);
  }, []);

  return (
    <ListPostContext.Provider
      value={{
        loadPost,
        posts,
        addNewPost,
        loadPostPaginate
      }}
    >
      {children}
    </ListPostContext.Provider>
  );
};

export { ListPostContext, ListPostContextProvider };
