import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Button } from "./button-void.styles";

type ButtonVoidProps = TouchableOpacityProps;

const ButtonVoid: React.FC<ButtonVoidProps> = ({ children, ...rest }) => {
  return (
    <Button activeOpacity={0.9} {...rest}>
      <>{children}</>
    </Button>
  );
};

export { ButtonVoid };
