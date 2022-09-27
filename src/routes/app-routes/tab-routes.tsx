import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";
import { RFValue } from "../../global/libs/react-native-responsive-font-size";

import { AntDesign } from "@expo/vector-icons";

import { Home } from "../../pages/home/home.screen";
import { ButtonTab } from "./components/button-tab/button-tab.component";

const { Navigator, Screen } = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
  const { COLORS } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.BACKGROUND,
        },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.CAPTION_500,
        tabBarActiveTintColor: COLORS.PRIMARY,
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={RFValue(30)} color={color} />
          ),
        }}
      />
      <Screen
        name="Menu"
        component={Home}
        options={{
          tabBarIcon: () => <ButtonTab />,
        }}
      />
      <Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={RFValue(30)} color={color} />
          ),
        }}
        component={Home}
      />
    </Navigator>
  );
};

export { TabRoutes };
