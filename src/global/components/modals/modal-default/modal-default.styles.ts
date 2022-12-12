import { KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";

export const Modal = styled.Modal`
  flex: 1;
  position: absolute;
`;

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

export const KeyboardAvoiding = styled(KeyboardAvoidingView)``;
