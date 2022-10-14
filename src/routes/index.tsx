import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app-routes";
import { AuthRoutes } from "./auth-routes/auth.routes";

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
};

export { Routes };
