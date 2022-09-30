import styled from "styled-components/native";
import { RFValue } from "../../../../global/libs/react-native-responsive-font-size";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  border-bottom-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.COLORS.BORDER};
  align-items: flex-start;
  justify-content: center;
  padding: ${({ theme }) => theme.METRICS.PADDING}px;
`;
