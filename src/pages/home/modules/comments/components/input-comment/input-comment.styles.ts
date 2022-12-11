import { TextInput } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "../../../../../../global/libs/responsive-size";

export const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.CAPTION_500
}))`
  flex: 1;
  font-size: ${({ theme }) => theme.FONTSIZES.SM3}px;
  padding: 0px ${({ theme }) => theme.METRICS.PADDING / 2}px;
  color: ${({ theme }) => theme.COLORS.CAPTION_300};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  max-height: ${RFValue(120)}px;
  margin-right: ${RFValue(10)}px;
  overflow-y: scroll;
`;
