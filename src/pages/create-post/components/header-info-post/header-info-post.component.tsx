import React, { useCallback, useState } from "react";
import { useSelectFeeling } from "../../../../hooks/contexts/app/create-post/useSelectFeeling";

import { ButtonIcon } from "../../../../components/buttons/button-icon/button-icon.component";
import { ModalSelectedFeeling } from "../modal-selected-feeling/modal-selected-feeling.component";
import { CardSelectFeeling } from "../card-select-feeling/card-select-feeling.component";

import {
  Container,
  ButtonFeeling,
  ContainerFeeling,
  Text
} from "./header-info-post.styles";
import { TextFeeling } from "../../../../components/texts/text-feeling/text-feeling.component";

const HeaderInfoPost: React.FC = () => {
  const { feelingSelected } = useSelectFeeling();

  const [isModalFeeling, setIsModalFeeling] = useState(false);

  const handleModal = useCallback(() => {
    setIsModalFeeling((oldValue) => !oldValue);
  }, []);

  return (
    <Container>
      <ContainerFeeling>
        <ButtonIcon onPress={handleModal} icon="heart" />

        <ButtonFeeling onPress={handleModal}>
          {!!feelingSelected?.id ? (
            <TextFeeling>
              {feelingSelected?.title} {feelingSelected?.emoji}
            </TextFeeling>
          ) : (
            <CardSelectFeeling />
          )}
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
