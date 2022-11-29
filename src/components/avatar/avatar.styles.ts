import styled from "styled-components/native";
import { RFValue } from "../../global/libs/responsive-size";
import { FontAwesome } from "@expo/vector-icons";

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

export const IconSecret = styled(FontAwesome).attrs(({ theme }) => ({
  name: "user-secret",
  size: RFValue(AVATAR_HEIGHT / 2),
  color: theme.COLORS.CAPTION_500
}))`
  align-self: center;
`;
