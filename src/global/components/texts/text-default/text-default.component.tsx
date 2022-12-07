import React from "react";
import { TextProps } from "react-native";

import { Text } from "./text-default.styles";

type TextTypes = "h1" | "h2" | "h3";

interface TextDefaultProps extends TextProps {
  type: TextTypes;
}

const TextDefault: React.FC<TextDefaultProps> = ({ type, ...rest }) => {
  return <Text type={type} {...rest} />;
};

export { TextDefault };
