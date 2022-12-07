import React from "react";

import { Container, Input } from "./input-comment.styles";

const InputComment: React.FC = () => {
  return (
    <Container>
      <Input multiline placeholder="Adicionar um comentário" />
    </Container>
  );
};

export { InputComment };
