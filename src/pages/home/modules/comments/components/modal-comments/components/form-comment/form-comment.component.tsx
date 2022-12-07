import React from "react";
import { ButtonIcon } from "../../../../../../../../global/components/buttons/button-icon/button-icon.component";

import { InputComment } from "../../../input-comment/input-comment.component";

import { Container } from "./form-comment.styles";

const FormComment: React.FC = () => {
  return (
    <Container>
      <InputComment />

      <ButtonIcon isLoading={false} onPress={() => {}} icon="send" isPrimary />
    </Container>
  );
};

export { FormComment };
