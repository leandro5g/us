import styled from "styled-components/native";
import { RFValue } from "../../../global/libs/react-native-responsive-font-size";

export const Container = styled.View`
  width: ${RFValue(200)}px;
  margin-left: ${RFValue(4)}px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONTSIZES.SM2}px;
  color: ${({ theme }) => theme.COLORS.CAPTION_300};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;

export const SpamHastag = styled.Text`
  font-size: ${({ theme }) => theme.FONTSIZES.SM2}px;
  color: ${({ theme }) => theme.COLORS.CAPTION_300};
  text-transform: lowercase;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;
