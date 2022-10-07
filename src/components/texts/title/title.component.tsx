import React from "react";
import { TextProps } from "react-native";

import { Text } from "./title.styles";

interface TitleProps extends TextProps {
  isSub?: boolean;
  isLarge?: boolean;
}

const Title: React.FC<TitleProps> = ({ ...rest }) => {
  return <Text {...rest} />;
};

export { Title };
