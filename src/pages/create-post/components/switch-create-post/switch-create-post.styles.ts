import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { RFValue } from "../../../../global/libs/react-native-responsive-font-size";

export const Container = styled.View`
  align-items: center;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconSecret = styled(FontAwesome).attrs(() => ({
  name: "user-secret",
  size: RFValue(30)
}))`
  margin-left: ${RFValue(8)}px;
`;
