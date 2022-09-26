import styled from "styled-components/native";

export const Container = styled.View`
  padding: ${({ theme }) => theme.METRICS.PADDING}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.View`
  margin-top: ${({ theme }) => theme.METRICS.PADDING / 2}px;
  width: 64%;
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
