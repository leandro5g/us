import React from "react";
import { ModalProps, Platform } from "react-native";
import { useTheme } from "styled-components";
import { RFValue } from "../../../libs/responsive-size";

import { AntDesign } from "@expo/vector-icons";

import { ButtonVoid } from "../../buttons/button-void/button-void.component";
import { Title } from "../../texts/title/title.component";

import {
  Container,
  Modal,
  HeaderModal,
  Content,
  KeyboardAvoiding
} from "./modal-default.styles";

export interface ModalDefaultProps extends ModalProps {
  title: string;
  children: React.ReactNode;
  onClose(): void;
}

const ModalDefault: React.FC<ModalDefaultProps> = ({
  children,
  onClose,
  title,
  ...rest
}) => {
  const { COLORS } = useTheme();

  return (
    <Modal transparent animationType="slide" onRequestClose={onClose} {...rest}>
      <Container>
        <HeaderModal>
          <ButtonVoid onPress={onClose}>
            <AntDesign
              style={{ marginRight: RFValue(20) }}
              name="close"
              size={RFValue(24)}
              color={COLORS.CAPTION_300}
            />
          </ButtonVoid>

          <Title>{title}</Title>
        </HeaderModal>

        <KeyboardAvoiding
          behavior={Platform.OS === "ios" ? "position" : undefined}
        >
          <Content>{children}</Content>
        </KeyboardAvoiding>
      </Container>
    </Modal>
  );
};

export { ModalDefault };
