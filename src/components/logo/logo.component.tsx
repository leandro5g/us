import React from "react";
import { RFValue } from "../../global/libs/react-native-responsive-font-size";
import { useTheme } from "styled-components/native";

import { FontAwesome5 } from "@expo/vector-icons";

import { Container, TitleLogo } from "./logo.styles";

const Logo: React.FC = () => {
  const { COLORS } = useTheme();

  return (
    <Container>
      <FontAwesome5 name="users" size={RFValue(30)} color={COLORS.TEXT} />
      <TitleLogo>US</TitleLogo>
    </Container>
  );
};

export { Logo };
