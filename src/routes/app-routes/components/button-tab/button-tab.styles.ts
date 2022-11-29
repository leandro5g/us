import styled from "styled-components/native";
import { RFValue } from "../../../../global/libs/responsive-size";

const BUTTON_SIZE = 56;

export const Container = styled.View`
  height: ${RFValue(BUTTON_SIZE)}px;
  width: ${RFValue(BUTTON_SIZE)}px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: ${RFValue(8)}PX;
  top: -${RFValue(8)}px;
  justify-content: center;
  align-items: center;
`;
