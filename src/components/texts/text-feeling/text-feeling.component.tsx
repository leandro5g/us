import React from "react";

import { Container, Text, SpamHastag } from "./text-feeling.styles";

type TextFeelingProps = {
  children: React.ReactNode;
};

const TextFeeling: React.FC<TextFeelingProps> = ({ children }) => {
  return (
    <Container>
      <Text testID="SUB_TEXT">
        Estou <SpamHastag testID="FEELING_TEXT">#{children}</SpamHastag>
      </Text>
    </Container>
  );
};

export { TextFeeling };
