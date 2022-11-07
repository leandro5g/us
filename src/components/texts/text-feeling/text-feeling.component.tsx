import React from "react";

import { Container, Text, SpamHastag } from "./text-feeling.styles";

type TextFeelingProps = {
  children: React.ReactNode;
};

const TextFeeling: React.FC<TextFeelingProps> = ({ children }) => {
  return (
    <Container>
      <Text>
        Estou <SpamHastag>#{children}</SpamHastag>
      </Text>
    </Container>
  );
};

export { TextFeeling };
