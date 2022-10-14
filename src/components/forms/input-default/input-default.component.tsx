import React from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import { Feather } from "@expo/vector-icons";

import { Container, Input } from "./input-default.styles";

interface InputDefaultProps extends TextInputProps {
  icon: React.ComponentProps<typeof Feather>["name"];
  notMargin?: boolean;
}

const InputDefault: React.FC<InputDefaultProps> = ({
  icon,
  notMargin,
  ...rest
}) => {
  const { COLORS, FONTSIZES } = useTheme();

  return (
    <Container notMargin={notMargin}>
      <Feather name={icon} size={FONTSIZES.MD} color={COLORS.CAPTION_500} />

      <Input placeholderTextColor={COLORS.CAPTION_500} {...rest} />
    </Container>
  );
};

export { InputDefault };
