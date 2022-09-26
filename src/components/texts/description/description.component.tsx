import React from "react";
import { TextProps } from "react-native";

import { Text } from "./description.styles";

type DescriptionProps = TextProps;

const Description: React.FC<DescriptionProps> = ({ ...rest }) => {
  return <Text {...rest} />;
};

export { Description };
