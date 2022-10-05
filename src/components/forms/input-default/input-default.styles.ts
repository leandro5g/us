import styled from "styled-components/native";
import { RFValue } from "../../../global/libs/react-native-responsive-font-size";

export const Container = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.METRICS.BUTTON_SIZE}px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  border-radius: ${({ theme }) => theme.METRICS.BORDER_RADIUS}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: ${({ theme }) => theme.FONTSIZES.SM}px;
  padding: 0px ${({ theme }) => theme.METRICS.PADDING / 2}px;
  color: ${({ theme }) => theme.COLORS.CAPTION_300};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;
