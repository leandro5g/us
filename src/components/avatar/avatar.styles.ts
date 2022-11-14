import styled from "styled-components/native";
import { RFValue } from "../../global/libs/react-native-responsive-font-size";

const AVATAR_HEIGHT = RFValue(42);

export const Container = styled.View`
  width: ${AVATAR_HEIGHT}px;
  height: ${AVATAR_HEIGHT}px;
  border-radius: ${AVATAR_HEIGHT / 2}PX;
  background-color: ${({ theme }) => theme.COLORS.SHAPE_LIGHT};
  justify-content: center;
`;

export const ImageAvatar = styled.Image`
  flex: 1;
  border-radius: ${AVATAR_HEIGHT / 2}PX;
`;

export const AvatarText = styled.Text`
  align-self: center;
  font-size: ${({ theme }) => theme.FONTSIZES.SM3}px;
  font-family: ${({ theme }) => theme.FONTS.SEMIBOLD};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;
