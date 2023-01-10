import { Dimensions, KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components/native";

const { height } = Dimensions.get("screen");

export const Container = styled.View``;

export const Content = styled.View`
  padding: ${({ theme }) => theme.METRICS.PADDING}px;
  justify-content: space-between;
  height: ${height * 0.8}px;
`;
