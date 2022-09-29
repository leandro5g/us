import styled from "styled-components/native";
import { RFValue } from "../../../../global/libs/react-native-responsive-font-size";

export const Container = styled.View`
  height: ${RFValue(56)}px;
  width: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: ${RFValue(8)}px;
  justify-content: center;
  align-items: center;
`;
