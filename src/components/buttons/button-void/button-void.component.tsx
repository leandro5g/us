import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Button } from "./button-void.styles";

type ButtonVoidProps = TouchableOpacityProps;

const ButtonVoid: React.FC<ButtonVoidProps> = ({ ...rest }) => {
  return <Button {...rest}></Button>;
};

export { ButtonVoid };
