import React from "react";

import { Container, LoadingComponent } from "./loading.styles";

type LoadingProps = {
  isLoading: boolean;
};

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container>
      <LoadingComponent testID="LoadingComponent" animating={isLoading} />
    </Container>
  );
};

export { Loading };
