import React from "react";
import { ScrollViewProps } from "react-native";

import { Container } from "./scroll.styles";

type ScrollProps = ScrollViewProps;

const Scroll: React.FC<ScrollProps> = ({ ...rest }) => {
  return <Container {...rest}></Container>;
};

export { Scroll };
