import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabRoutes } from "./tab-routes";
import { CreatePostRoutes } from "./create-post.routes";
import { AppProviderContext } from "../../contexts/app-contexts";

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppProviderContext>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Screen name="TabRoutes" component={TabRoutes} />

        <Screen
          options={{
            animation: "slide_from_bottom"
          }}
          name="CreatePostRoutes"
          component={CreatePostRoutes}
        />
      </Navigator>
    </AppProviderContext>
  );
};

export { AppRoutes };
