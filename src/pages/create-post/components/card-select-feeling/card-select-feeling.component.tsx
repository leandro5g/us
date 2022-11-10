import React from "react";
import { useSelectFeeling } from "../../../../hooks/contexts/app/create-post/useSelectFeeling";

import { Description } from "../../../../components/texts/description/description.component";

import { Container } from "./card-select-feeling.styles";

const CardSelectFeeling: React.FC = () => {
  const { isErrorFeeling } = useSelectFeeling();

  return (
    <Container isErrorFeeling={isErrorFeeling}>
      <Description isSpam>Sentimento +</Description>
    </Container>
  );
};

export { CardSelectFeeling };
