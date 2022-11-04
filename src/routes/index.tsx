import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthenticate } from "../hooks/contexts/auth/authenticate/useAuthenticate";

import { AppRoutes } from "./app-routes";
import { AuthRoutes } from "./auth-routes/auth.routes";

const Routes: React.FC = () => {
  const { token } = useAuthenticate();

  return (
    <NavigationContainer>
      {!!token ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export { Routes };
