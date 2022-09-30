import React from "react";

import { CardFeeling } from "../../../../components/cards/card-feeling/card-feeling.component";
import { ModalDefault } from "../../../../components/modals/modal-default/modal-default.component";
import { Scroll } from "../../../../components/utils/scroll/scroll.component";

import { Container, Content } from "./modal-selected-feeling.styles";

type ModalSelectedFeelingProps = {
  isVisible: boolean;
  onClose(): void;
};

const ModalSelectedFeeling: React.FC<ModalSelectedFeelingProps> = ({
  isVisible,
  onClose,
}) => {
  return (
    <ModalDefault visible={isVisible} onClose={onClose}>
      <Container>
        <Content>
          <Scroll>
            <CardFeeling />
            <CardFeeling />
            <CardFeeling />
            <CardFeeling />
            <CardFeeling />
            <CardFeeling />
          </Scroll>
        </Content>
      </Container>
    </ModalDefault>
  );
};

export { ModalSelectedFeeling };
