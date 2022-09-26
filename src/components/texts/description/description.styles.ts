import styled from "styled-components/native";
import { RFValue } from "../../../global/libs/react-native-responsive-font-size";

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.CAPTION_300};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;
