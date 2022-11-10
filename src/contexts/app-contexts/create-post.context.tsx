import React, { useCallback, useState } from "react";
import { createContext } from "use-context-selector";

import { useAddPost } from "../../hooks/contexts/app/list-post/useAddPost";
import { useUser } from "../../hooks/contexts/auth/authenticate/useUser";
import { createPostService } from "../../services/post-service/create-post-service";

type OnCreatePostData = {
  content: string;
};

type CreatePostContextData = {
  feelingSelected: Feeling.FeelingModel;
  handleSelectedFeeling(feeling: Feeling.FeelingModel): void;
  onCreatePost(data: OnCreatePostData): Promise<void>;
  isAnonymous: boolean;
  handleChangeIsAnonymous(): void;
  isErrorFeeling: boolean;
};

const CreatePostContext = createContext<CreatePostContextData>(
  {} as CreatePostContextData
);

type CreatePostContextProps = {
  children: React.ReactNode;
};

const CreatePostContextProvider: React.FC<CreatePostContextProps> = ({
  children
}) => {
  const { createPost } = createPostService();
  const { user } = useUser();
  const { addNewPost } = useAddPost();

  const [feelingSelected, setFeelingSelected] = useState<Feeling.FeelingModel>(
    {} as Feeling.FeelingModel
  );

  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isErrorFeeling, setIsErrorFeeling] = useState(false);

  const handleChangeIsAnonymous = useCallback(() => {
    setIsAnonymous((oldValue) => !oldValue);
  }, []);

  const handleSelectedFeeling = useCallback((feeling: Feeling.FeelingModel) => {
    setIsErrorFeeling(false);
    setFeelingSelected(feeling);
  }, []);

  const onCreatePost = useCallback(
    async ({ content }: OnCreatePostData) => {
      if (!feelingSelected?.id) {
        setIsErrorFeeling(true);
        return;
      }

      const post = await createPost({
        content,
        feeling_id: feelingSelected?.id,
        is_anonymos: isAnonymous
      });

      const newPost = {
        ...post,
        feeling: {
          emoji: feelingSelected?.emoji,
          title: feelingSelected?.title
        },
        user: {
          avatar: user?.avatar,
          name: user?.name
        }
      } as Post.PostType;

      addNewPost(newPost as Post.PostType);
    },
    [createPost, feelingSelected, isAnonymous, user, addNewPost]
  );

  return (
    <CreatePostContext.Provider
      value={{
        handleSelectedFeeling,
        feelingSelected,
        onCreatePost,
        handleChangeIsAnonymous,
        isAnonymous,
        isErrorFeeling
      }}
    >
      {children}
    </CreatePostContext.Provider>
  );
};

export { CreatePostContextProvider, CreatePostContext };
