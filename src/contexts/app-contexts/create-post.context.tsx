import React, { useCallback, useState } from "react";
import { createContext } from "use-context-selector";
import { useCreatePost } from "../../services/post-service/create-post-service";

type OnCreatePostData = {
  content: string;
};

type CreatePostContextData = {
  feelingSelected: Feeling.FeelingModel;
  handleSelectedFeeling(feeling: Feeling.FeelingModel): void;
  onCreatePost(data: OnCreatePostData): Promise<void>;
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
  const { createPost } = useCreatePost();

  const [feelingSelected, setFeelingSelected] = useState<Feeling.FeelingModel>(
    {} as Feeling.FeelingModel
  );

  const handleSelectedFeeling = useCallback((feeling: Feeling.FeelingModel) => {
    setFeelingSelected(feeling);
  }, []);

  const onCreatePost = useCallback(
    async ({ content }: OnCreatePostData) => {
      const post = await createPost({
        content,
        feeling_id: feelingSelected?.id,
        is_anonymos: false
      });
    },
    [createPost, feelingSelected]
  );

  return (
    <CreatePostContext.Provider
      value={{
        handleSelectedFeeling,
        feelingSelected,
        onCreatePost
      }}
    >
      {children}
    </CreatePostContext.Provider>
  );
};

export { CreatePostContextProvider, CreatePostContext };
