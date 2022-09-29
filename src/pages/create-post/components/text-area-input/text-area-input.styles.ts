import styled from "styled-components/native";
import { RFValue } from "../../../../global/libs/react-native-responsive-font-size";

export const Container = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.METRICS.PADDING}px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.COLORS.CAPTION_500};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;
