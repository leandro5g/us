import React from "react";

import { useContextSelector } from "use-context-selector";
import { AuthContext } from "../../../../contexts/auth-contexts/auth";

export function useLogin() {
  const signIn = useContextSelector(
    AuthContext,
    (authContext) => authContext.signIn
  );

  return {
    signIn
  };
}
