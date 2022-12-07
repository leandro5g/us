import React from "react";
import { useSelectFeeling } from "../../../../hooks/contexts/app/create-post/useSelectFeeling";

import { SubTitleDefault } from "../../../../global/components/texts/sub-title-default/sub-title-default.component";

import { Container } from "./card-select-feeling.styles";

const CardSelectFeeling: React.FC = () => {
  const { isErrorFeeling } = useSelectFeeling();

  return (
    <Container isErrorFeeling={isErrorFeeling}>
      <SubTitleDefault type="SPAM">Sentimento +</SubTitleDefault>
    </Container>
  );
};

export { CardSelectFeeling };
