import styled from "styled-components/native";

export const Content = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.METRICS.PADDING}px;
  padding-top: 0px;
`;

export const ContainerPassword = styled.View`
  margin: ${({ theme }) => theme.METRICS.PADDING}px 0px;
`;

export const TextLabelPassword = styled.Text`
  color: ${({ theme }) => theme.COLORS.CAPTION_300};
  font-size: ${({ theme }) => theme.FONTSIZES.SM}px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  margin-bottom: ${({ theme }) => theme.METRICS.PADDING / 2}px;
`;
