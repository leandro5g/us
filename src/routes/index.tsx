import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthenticate } from "../hooks/contexts/auth/authenticate/useAuthenticate";
import { useSign } from "../hooks/contexts/auth/authenticate/useSign";

import { AppRoutes } from "./app-routes";
import { AuthRoutes } from "./auth-routes/auth.routes";
import { Loading } from "../components/utils/loading/loading.component";

const Routes: React.FC = () => {
  const { token } = useAuthenticate();
  const { isLoading } = useSign();

  return (
    <NavigationContainer>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <>{!!token ? <AppRoutes /> : <AuthRoutes />}</>
      )}
    </NavigationContainer>
  );
};

export { Routes };
