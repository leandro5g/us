import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.SHAPE_LIGHT};
  border-radius: ${({ theme }) => theme.METRICS.BORDER_RADIUS * 2}px;
  padding: ${({ theme }) => theme.METRICS.PADDING / 1.5}px;
  flex-direction: row;
  align-items: flex-end;
`;
