import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const LoadingComponent = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: "small",
  color: theme.COLORS.PRIMARY
}))``;
