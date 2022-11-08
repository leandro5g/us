import React from "react";

import { Container } from "./safe-area.styles";

type SafeAreaProps = {
  children?: React.ReactNode;
};

const SafeArea: React.FC<SafeAreaProps> = ({ children }) => {
  return <Container testID="safe-area">{children}</Container>;
};

export { SafeArea };
