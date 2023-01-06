import { FlatList } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "../../../../../../global/libs/responsive-size";

export const Container = styled.View`
  height: ${RFValue(400)}px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const Scroll = styled(FlatList)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
`;
