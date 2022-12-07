import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, TextButtonPrimary, Load } from "./button-primary.styles";

interface ButtonPrimaryProps extends TouchableOpacityProps {
  textButton: string;
  isLoading?: boolean;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  textButton,
  isLoading,
  ...rest
}) => {
  return (
    <Container activeOpacity={0.9} {...rest}>
      {isLoading ? (
        <Load />
      ) : (
        <TextButtonPrimary>{textButton}</TextButtonPrimary>
      )}
    </Container>
  );
};

export { ButtonPrimary };
