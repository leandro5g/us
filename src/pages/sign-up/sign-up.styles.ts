import styled from "styled-components/native";
import { ButtonVoid } from "../../global/components/buttons/button-void/button-void.component";
import { SubTitleDefault } from "../../global/components/texts/sub-title-default/sub-title-default.component";
import { RFValue } from "../../global/libs/responsive-size";

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

export const ButtonIcon = styled(ButtonVoid)``;
