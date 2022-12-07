import styled from "styled-components/native";
import { RFValue } from "../../../../../../global/libs/responsive-size";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: ${RFValue(20)}px;
`;

export const Content = styled.View`
  margin-left: ${RFValue(20)}px;
  flex: 1;
`;
