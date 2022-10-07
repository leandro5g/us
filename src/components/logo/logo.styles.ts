import styled from "styled-components/native";
import { RFValue } from "../../global/libs/react-native-responsive-font-size";

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
