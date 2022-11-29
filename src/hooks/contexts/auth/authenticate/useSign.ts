import { useContextSelector } from "use-context-selector";
import { AuthContext } from "../../../../contexts/auth-contexts/auth";

export function useSign() {
  const signIn = useContextSelector(
    AuthContext,
    (authContext) => authContext.signIn
  );

  const signOut = useContextSelector(
    AuthContext,
    (authContext) => authContext.signOut
  );

  const isLoading = useContextSelector(
    AuthContext,
    (authContext) => authContext.isLoading
  );

  return {
    signIn,
    signOut,
    isLoading
  };
}
