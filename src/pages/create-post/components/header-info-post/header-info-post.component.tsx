import React, { useState } from "react";

import { ButtonIcon } from "../../../../components/buttons/button-icon/button-icon.component";
import { ModalSelectedFeeling } from "../modal-selected-feeling/modal-selected-feeling.component";

import { Container } from "./header-info-post.styles";

const HeaderInfoPost: React.FC = () => {
  const [isModalFeeling, setIsModalFeeling] = useState(false);

  return (
    <Container>
      <ButtonIcon icon="heart" />

      <ModalSelectedFeeling />
    </Container>
  );
};

export { HeaderInfoPost };
