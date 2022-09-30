import React from "react";
import { useTheme } from "styled-components";
import { RFValue } from "../../../global/libs/react-native-responsive-font-size";

import { AntDesign } from "@expo/vector-icons";

import { ButtonVoid } from "../../buttons/button-void/button-void.component";
import { Title } from "../../texts/title/title.component";
import { SafeArea } from "../../utils/safe-area/safe-area.component";

import { Container, Modal, HeaderModal, Content } from "./modal-default.styles";

type ModalDefaultProps = {
  children: React.ReactNode;
};

const ModalDefault: React.FC<ModalDefaultProps> = ({ children }) => {
  const { COLORS } = useTheme();

  return (
    <Modal transparent>
      <SafeArea>
        <Container>
          <HeaderModal>
            <ButtonVoid>
              <AntDesign
                style={{ marginRight: RFValue(20) }}
                name="close"
                size={RFValue(24)}
                color={COLORS.CAPTION_300}
              />
            </ButtonVoid>

            <Title>O que você está sentindo?</Title>
          </HeaderModal>

          <Content>{children}</Content>
        </Container>
      </SafeArea>
    </Modal>
  );
};

export { ModalDefault };
