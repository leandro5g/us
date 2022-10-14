import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import { Container } from "./personal-tab-bar.styles";

type PersonalTabBarProps = BottomTabBarProps;

const PersonalTabBar: React.FC<PersonalTabBarProps> = ({ insets }) => {
  return <Container />;
};

export { PersonalTabBar };
