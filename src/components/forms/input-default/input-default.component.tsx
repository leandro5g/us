import React from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import { Container, Input } from "./input-default.styles";

interface InputDefaultProps extends TextInputProps {}

const InputDefault: React.FC<InputDefaultProps> = ({ ...rest }) => {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Input placeholderTextColor={COLORS.CAPTION_500} {...rest} />
    </Container>
  );
};

export { InputDefault };
