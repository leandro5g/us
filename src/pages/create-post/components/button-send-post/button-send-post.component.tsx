import React from "react";
import { useTheme } from "styled-components";
import { RFValue } from "../../../../global/libs/react-native-responsive-font-size";

import { Feather } from "@expo/vector-icons";

import { Container } from "./button-send-post.styles";

const ButtonSendPost: React.FC = () => {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Feather name="send" size={RFValue(26)} color={COLORS.TEXT} />
    </Container>
  );
};

export { ButtonSendPost };
