import { TextInput } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "../../../libs/responsive-size";

export const Input = styled(TextInput)`
  flex: 1;
  font-size: ${({ theme }) => theme.FONTSIZES.SM3}px;
  padding: 0px ${({ theme }) => theme.METRICS.PADDING / 2}px;
  color: ${({ theme }) => theme.COLORS.CAPTION_300};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  max-height: ${RFValue(120)}px;
  margin-right: ${RFValue(10)}px;
  overflow-y: scroll;
`;
