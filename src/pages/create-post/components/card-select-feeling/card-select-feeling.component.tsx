import React from "react";

import { Description } from "../../../../components/texts/description/description.component";

import { Container } from "./card-select-feeling.styles";

const CardSelectFeeling: React.FC = () => {
  return (
    <Container>
      <Description isSpam>Sentimento +</Description>
    </Container>
  );
};

export { CardSelectFeeling };
