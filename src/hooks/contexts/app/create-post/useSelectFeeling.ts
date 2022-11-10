import { useContextSelector } from "use-context-selector";
import { CreatePostContext } from "../../../../contexts/app-contexts/create-post.context";

export function useSelectFeeling() {
  const feelingSelected = useContextSelector(
    CreatePostContext,
    (createPost) => createPost.feelingSelected
  );

  const handleSelectedFeeling = useContextSelector(
    CreatePostContext,
    (createPost) => createPost.handleSelectedFeeling
  );

  const isErrorFeeling = useContextSelector(
    CreatePostContext,
    (createPost) => createPost.isErrorFeeling
  );

  return { feelingSelected, handleSelectedFeeling, isErrorFeeling };
}
