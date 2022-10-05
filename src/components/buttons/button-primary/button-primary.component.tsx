import React from "react";

import { Container, ButtonText } from "./button-primary.styles";

type ButtonPrimaryProps = {
  textButton: string;
};

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ textButton }) => {
  return (
    <Container>
      <ButtonText>{textButton}</ButtonText>
    </Container>
  );
};

export { ButtonPrimary };
