import styled from "styled-components/native";
import { RFValue } from "../../../global/libs/responsive-size";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  margin-bottom: ${RFValue(16)}px;
`;

export const Content = styled.View`
  padding: ${({ theme }) => theme.METRICS.PADDING / 2}px
    ${({ theme }) => theme.METRICS.PADDING}px;
  border-top-width: ${RFValue(1)}px;
  border-bottom-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.COLORS.BORDER};
`;

export const Footer = styled.View`
  padding: ${({ theme }) => theme.METRICS.PADDING / 1.5}px
    ${({ theme }) => theme.METRICS.PADDING}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentText = styled.Text`
  color: ${({ theme }) => theme.COLORS.CAPTION_300};
  font-size: ${({ theme }) => theme.FONTSIZES.SM3}px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;
