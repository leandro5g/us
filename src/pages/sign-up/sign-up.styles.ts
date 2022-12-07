import styled from "styled-components/native";
import { SubTitleDefault } from "../../global/components/texts/sub-title-default/sub-title-default.component";

export const Container = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.METRICS.PADDING}px;
  justify-content: center;
`;

export const DescriptionRegister = styled(SubTitleDefault).attrs({
  isSpam: true
})`
  margin-top: ${({ theme }) => theme.METRICS.PADDING_VERTICAL}px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  position: absolute;
  z-index: 9999;
  top: ${({ theme }) => theme.METRICS.PADDING}px;
  left: ${({ theme }) => theme.METRICS.PADDING}px; ;
`;
