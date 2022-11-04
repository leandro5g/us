import React, { useEffect } from "react";
import { useFeeling } from "../../../../services/feeling-service/feeling-service";

import { CardFeeling } from "../../../../components/cards/card-feeling/card-feeling.component";
import { ModalDefault } from "../../../../components/modals/modal-default/modal-default.component";
import { Scroll } from "../../../../components/utils/scroll/scroll.component";

import { Container, Content } from "./modal-selected-feeling.styles";
import { Loading } from "../../../../components/utils/loading/loading.component";

type ModalSelectedFeelingProps = {
  isVisible: boolean;
  onClose(): void;
};

const ModalSelectedFeeling: React.FC<ModalSelectedFeelingProps> = ({
  isVisible,
  onClose
}) => {
  const { isLoading, loadFeelings } = useFeeling();

  useEffect(() => {
    loadFeelings();
  }, []);

  return (
    <ModalDefault
      title="O que você está sentindo?"
      visible={isVisible}
      onClose={onClose}
    >
      <Container>
        <Content>
          <Scroll>{isLoading && <Loading isLoading={isLoading} />}</Scroll>
        </Content>
      </Container>
    </ModalDefault>
  );
};

export { ModalSelectedFeeling };
