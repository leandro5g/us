import styled from "styled-components/native";
import { RFValue } from "../../../global/libs/react-native-responsive-font-size";

export const Modal = styled.Modal``;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BG_RGBA};
  justify-content: flex-end;
`;

export const HeaderModal = styled.View`
  background-color: ${({ theme }) => theme.COLORS.SHAPE_LIGHT};
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.METRICS.PADDING_VERTICAL}px
    ${({ theme }) => theme.METRICS.PADDING}px;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
`;
