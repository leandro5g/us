import styled from "styled-components/native";
import { RFValue } from "../../../../global/libs/responsive-size";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${RFValue(80)}px;
`;

export const WrappIcon = styled.View`
  position: absolute;
  z-index: 999;
  left: ${({ theme }) => theme.METRICS.PADDING}px;
`;
