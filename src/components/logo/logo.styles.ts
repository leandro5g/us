import styled from "styled-components/native";
import { RFValue } from "../../global/libs/responsive-size";

import { FontAwesome5 } from "@expo/vector-icons";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleLogo = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: ${RFValue(36)}px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  margin-left: ${RFValue(8)}px;
`;

export const IconUsers = styled(FontAwesome5).attrs(({ theme }) => ({
  name: "users",
  size: RFValue(30),
  color: theme.COLORS.TEXT
}))``;
