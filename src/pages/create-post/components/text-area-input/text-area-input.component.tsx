import React from "react";
import { Control, Controller } from "react-hook-form";
import { useTheme } from "styled-components";

import { Container, TextInput } from "./text-area-input.styles";

type TextAreaInputProps = {
  name: string;
  control: Control;
};

const TextAreaInput: React.FC<TextAreaInputProps> = ({ control, name }) => {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            autoCapitalize="sentences"
            autoCorrect={false}
            autoFocus
            multiline
            placeholder="Digite aqui seu desabafo...."
            placeholderTextColor={COLORS.CAPTION_500}
            onChangeText={onChange}
            value={value}
          />
        )}
      ></Controller>
    </Container>
  );
};

export { TextAreaInput };
