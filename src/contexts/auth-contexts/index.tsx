import React from "react";

import { AuthContextProvider } from "./auth";

type AuthContextsProps = {
  children: React.ReactNode;
};

const AuthContexts: React.FC<AuthContextsProps> = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export { AuthContexts };
