import styled from "styled-components/native";
import { RFValue } from "../../../global/libs/react-native-responsive-font-size";

export const Container = styled.View`
  padding: ${({ theme }) => theme.METRICS.PADDING}px;
  border-bottom-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.COLORS.BORDER};
`;

export const HeaderCardFeeling = styled.View`
  margin-bottom: ${RFValue(10)}px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const TitleCardFeeling = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: ${({ theme }) => theme.FONTSIZES.MD}px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const DescriptionCardFeeling = styled.Text`
  color: ${({ theme }) => theme.COLORS.CAPTION_400};
  font-size: ${({ theme }) => theme.FONTSIZES.SM2}px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  line-height: ${({ theme }) => theme.FONTSIZES.SM2 + RFValue(10)}px;
`;
