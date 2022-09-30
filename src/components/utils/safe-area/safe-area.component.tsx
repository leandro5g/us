import React from "react";

import { Container } from "./safe-area.styles";

type SafeAreaProps = {
  children?: React.ReactNode;
};

const SafeArea: React.FC<SafeAreaProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export { SafeArea };
