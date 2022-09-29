import React from "react";

import { Container } from "./container-background.styles";

type ContainerBackground = {
  children?: React.ReactNode;
};

const ContainerBackground: React.FC<ContainerBackground> = ({ children }) => {
  return <Container>{children}</Container>;
};

export { ContainerBackground };
