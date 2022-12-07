import { TextInput } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "../../../../../../global/libs/responsive-size";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.SHAPE_LIGHT};
  border-radius: ${({ theme }) => theme.METRICS.BORDER_RADIUS}px;
  padding: ${({ theme }) => theme.METRICS.PADDING / 1.5}px;
`;

export const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.CAPTION_500
}))`
  width: 100%;
  font-size: ${({ theme }) => theme.FONTSIZES.SM3}px;
  padding: 0px ${({ theme }) => theme.METRICS.PADDING / 2}px;
  color: ${({ theme }) => theme.COLORS.CAPTION_300};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  max-height: ${RFValue(80)}px;
`;
