import React from "react";
import { useTheme } from "styled-components";
import { RFValue } from "../../../global/libs/react-native-responsive-font-size";

import { Feather } from "@expo/vector-icons";

import { Container } from "./button-icon.styles";

type ButtonIconProps = {
  icon: "send" | "heart";
  isPrimary?: boolean;
};

const ButtonIcon: React.FC<ButtonIconProps> = ({ icon, isPrimary }) => {
  const { COLORS } = useTheme();

  return (
    <Container isPrimary={isPrimary}>
      <Feather
        name={icon}
        size={RFValue(26)}
        color={isPrimary ? COLORS.TEXT : COLORS.PRIMARY}
      />
    </Container>
  );
};

export { ButtonIcon };
