import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { height } = Dimensions.get("window");

export const Container = styled.View`
  padding: ${({ theme }) => theme.METRICS.PADDING}px;
  justify-content: space-between;
  height: ${height * 0.8}px;
`;

export const Content = styled.View``;
