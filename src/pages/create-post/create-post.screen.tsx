import React, { useCallback } from "react";
import { createPostService } from "../../services/post-service/create-post-service";
import { useForm } from "react-hook-form";
import { usePost } from "../../hooks/contexts/app/create-post/usePost";

import { ContainerBackground } from "../../components/utils/container-background/container-background.component";
import { HeaderCreatePost } from "./components/header-create-post/header-create-post.component";
import { TextAreaInput } from "./components/text-area-input/text-area-input.component";
import { ButtonIcon } from "../../components/buttons/button-icon/button-icon.component";
import { HeaderInfoPost } from "./components/header-info-post/header-info-post.component";

import { Content, Footer } from "./create-post.styles";

type FormData = {
  content: string;
};

const CreatePost: React.FC = () => {
  const { control, watch, handleSubmit } = useForm({});
  const { onCreatePost } = usePost();
  const { isLoadingCreatePost } = createPostService();

  const content = watch("content");

  const onSubmit = useCallback(
    async ({ content }: FormData) => {
      if (!content) return;

      await onCreatePost({
        content
      });
    },
    [onCreatePost]
  );

  return (
    <ContainerBackground>
      <HeaderCreatePost />

      <HeaderInfoPost />

      <Content>
        <TextAreaInput
          isLoading={isLoadingCreatePost}
          control={control}
          name="content"
        />
      </Content>

      <Footer>
        <ButtonIcon
          isLoading={isLoadingCreatePost}
          onPress={handleSubmit(onSubmit)}
          disable={!content}
          icon="send"
          isPrimary
        />
      </Footer>
    </ContainerBackground>
  );
};

export { CreatePost };
