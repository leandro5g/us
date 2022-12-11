import React from "react";
import { Platform } from "react-native";

type KeyboardHandleProps = {
  children: React.ReactNode;
};

import { Container } from "./keyboard-handle.styles";

const KeyboardHandle: React.FC<KeyboardHandleProps> = ({ children }) => {
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      {children}
    </Container>
  );
};

export { KeyboardHandle };
