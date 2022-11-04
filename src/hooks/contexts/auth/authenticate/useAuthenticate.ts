import React from "react";

import { useContextSelector } from "use-context-selector";
import { AuthContext } from "../../../../contexts/auth-contexts/auth";

export function useAuthenticate() {
  const token = useContextSelector(
    AuthContext,
    (authContext) => authContext.token
  );

  return {
    token
  };
}
