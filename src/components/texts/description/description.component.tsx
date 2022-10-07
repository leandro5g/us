import React from "react";
import { TextProps } from "react-native";

import { Text } from "./description.styles";

interface DescriptionProps extends TextProps {
  isSpam?: boolean;
  isHastag?: boolean;
  isAction?: boolean;
}

const Description: React.FC<DescriptionProps> = ({ ...rest }) => {
  return <Text {...rest} />;
};

export { Description };
