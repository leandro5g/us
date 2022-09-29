import styled from "styled-components/native";
import { RFValue } from "../../global/libs/react-native-responsive-font-size";

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const Footer = styled.View`
  height: ${RFValue(80)}px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  border-top-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.COLORS.BORDER};
  align-items: flex-end;
  justify-content: center;
  padding: 0px ${({ theme }) => theme.METRICS.PADDING}px;
`;
