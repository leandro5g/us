import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../../pages/sign-in/sign-in.screen";
import { SignUp } from "../../pages/sign-up/sign-up.screen";

const { Navigator, Screen } = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
};

export { AuthRoutes };
