import styled from "styled-components/native";

export const Container = styled.View`
  height: ${({ theme }) => theme.METRICS.BUTTON_SIZE}px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border-radius: ${({ theme }) => theme.METRICS.BORDER_RADIUS}px;
  justify-content: center;
  align-items: center;
  padding: 0px ${({ theme }) => theme.METRICS.PADDING}px;
`;
