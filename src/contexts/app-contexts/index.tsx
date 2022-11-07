import React from "react";

import { ListPostContextProvider } from "./list-post.context";

type AppProviderContextProps = {
  children: React.ReactNode;
};

const AppProviderContext: React.FC<AppProviderContextProps> = ({
  children
}) => {
  return <ListPostContextProvider>{children}</ListPostContextProvider>;
};

export { AppProviderContext };
