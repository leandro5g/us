import React from "react";
import { TouchableOpacityProps } from "react-native";

import { useTheme } from "styled-components";
import { RFValue } from "../../../global/libs/react-native-responsive-font-size";

import { Feather } from "@expo/vector-icons";

import { Container } from "./button-icon.styles";

interface ButtonIconProps extends TouchableOpacityProps {
  icon: "send" | "heart";
  isPrimary?: boolean;
  disable?: boolean;
  isLoading?: boolean;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon,
  isPrimary,
  disable,
  ...rest
}) => {
  const { COLORS } = useTheme();

  return (
    <Container
      activeOpacity={0.9}
      {...rest}
      disable={disable}
      isPrimary={isPrimary}
    >
      <Feather
        name={icon}
        size={RFValue(26)}
        color={isPrimary ? COLORS.TEXT : COLORS.PRIMARY}
      />
    </Container>
  );
};

export { ButtonIcon };
