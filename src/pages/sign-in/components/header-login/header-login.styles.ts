import styled from "styled-components/native";

export const Container = styled.View`
  height: 22%;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  position: absolute;
  padding: 0px ${({ theme }) => theme.METRICS.PADDING}px;
  padding-top: ${({ theme }) =>
    theme.METRICS.MARGIN_STATUS_BAR + theme.METRICS.PADDING}px;
`;
