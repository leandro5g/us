import React from "react";

import { useContextSelector } from "use-context-selector";
import { AuthContext } from "../../../../contexts/auth-contexts/auth";

export function useUser() {
  const user = useContextSelector(
    AuthContext,
    (authContext) => authContext.user
  );

  const handleUpdateUser = useContextSelector(
    AuthContext,
    (authContext) => authContext.updateUser
  );

  return {
    user,
    handleUpdateUser
  };
}
