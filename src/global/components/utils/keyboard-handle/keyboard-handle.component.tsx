import React, { useCallback } from "react";
import { Keyboard } from "react-native";

type KeyboardHandleProps = {
  children: React.ReactNode;
};

import { Container } from "./keyboard-handle.styles";

const KeyboardHandle: React.FC<KeyboardHandleProps> = ({ children }) => {
  const onPress = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return <Container onPress={onPress}>{children}</Container>;
};

export { KeyboardHandle };
