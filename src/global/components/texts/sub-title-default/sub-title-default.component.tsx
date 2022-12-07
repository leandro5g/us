import React from "react";
import { TextProps } from "react-native";

import { Text, SubTitleType } from "./sub-title-default.styles";

interface SubTitleDefaultProps extends TextProps {
  type?: SubTitleType;
}

const SubTitleDefault: React.FC<SubTitleDefaultProps> = ({ ...rest }) => {
  return <Text {...rest} />;
};

export { SubTitleDefault };
