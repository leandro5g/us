import React from "react";

import { ListPosts } from "./components/list-posts/list-posts.component";

import { Container } from "./posts.styles";

const Posts: React.FC = () => {
  return (
    <Container>
      <ListPosts />
    </Container>
  );
};

export { Posts };
