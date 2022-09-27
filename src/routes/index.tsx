import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { TabRoutes } from "./app-routes/tab-routes";

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
};

export { Routes };
