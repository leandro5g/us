import styled from "styled-components/native";
import { RFValue } from "../../../../../../global/libs/responsive-size";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${RFValue(10)}px ${({ theme }) => theme.METRICS.PADDING}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const ContentText = styled.View`
  flex: 1;
  margin: 0px ${RFValue(10)}px;
`;
