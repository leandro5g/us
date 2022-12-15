import React from "react";
import { Platform } from "react-native";

import { Container } from "./keyboard-avoiding.styles";

type KeyboardAvoiding = {
  children: React.ReactNode;
  behavior?: "height" | "padding" | "position";
};

const KeyboardAvoiding: React.FC<KeyboardAvoiding> = ({
  behavior = "padding",
  children
}) => {
  return (
    <Container behavior={Platform.OS === "ios" ? behavior : undefined}>
      {children}
    </Container>
  );
};

export { KeyboardAvoiding };
