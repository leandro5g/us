import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.SHAPE_LIGHT};
`;
