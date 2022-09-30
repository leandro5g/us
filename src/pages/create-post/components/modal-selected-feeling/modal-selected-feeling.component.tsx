import React from "react";

import { CardFeeling } from "../../../../components/cards/card-feeling/card-feeling.component";
import { ModalDefault } from "../../../../components/modals/modal-default/modal-default.component";
import { Scroll } from "../../../../components/utils/scroll/scroll.component";

import { Container, Content } from "./modal-selected-feeling.styles";

const ModalSelectedFeeling: React.FC = () => {
  return (
    <ModalDefault>
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
