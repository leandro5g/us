import React from "react";
import { useTheme } from "styled-components";

import { Container, TextInput } from "./text-area-input.styles";

const TextAreaInput: React.FC = () => {
  const { COLORS } = useTheme();

  return (
    <Container>
      <TextInput
        autoCapitalize="sentences"
        autoCorrect={false}
        autoFocus
        multiline
        placeholder="Digite aqui seu desabafo...."
        placeholderTextColor={COLORS.CAPTION_500}
      />
    </Container>
  );
};

export { TextAreaInput };
