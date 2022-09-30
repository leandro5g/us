import React, { useCallback, useState } from "react";

import { ButtonIcon } from "../../../../components/buttons/button-icon/button-icon.component";
import { Description } from "../../../../components/texts/description/description.component";
import { ModalSelectedFeeling } from "../modal-selected-feeling/modal-selected-feeling.component";

import {
  Container,
  ButtonFeeling,
  ContainerFeeling,
} from "./header-info-post.styles";

const HeaderInfoPost: React.FC = () => {
  const [isModalFeeling, setIsModalFeeling] = useState(false);

  const handleModal = useCallback(() => {
    setIsModalFeeling((oldValue) => !oldValue);
  }, []);

  return (
    <Container>
      <ContainerFeeling>
        <ButtonIcon icon="heart" />
        <ButtonFeeling activeOpacity={0.9} onPress={handleModal}>
          <Description isSpam>Sentimento +</Description>
        </ButtonFeeling>
      </ContainerFeeling>

      {isModalFeeling && (
        <ModalSelectedFeeling
          isVisible={isModalFeeling}
          onClose={handleModal}
        />
      )}
    </Container>
  );
};

export { HeaderInfoPost };
