import styled from "styled-components/native";
import LoginSvg from "../../assets/svgs/login-svg.svg";
import { Description } from "../../components/texts/description/description.component";
import { RFValue } from "../../global/libs/responsive-size";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding-top: ${RFValue(10)}px;
`;

export const SignInSvg = styled(LoginSvg).attrs({
  height: RFValue(320),
  width: RFValue(320)
})`
  align-self: center;
`;

export const Content = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.METRICS.PADDING}px;
`;

export const DescriptionLogin = styled(Description).attrs({
  isSpam: true
})`
  margin: ${RFValue(24)}px 0px;
`;
