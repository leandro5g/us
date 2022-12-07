import React, { useCallback, useState } from "react";
import { useSelectFeeling } from "../../../../hooks/contexts/app/create-post/useSelectFeeling";

import { ButtonIcon } from "../../../../global/components/buttons/button-icon/button-icon.component";
import { ModalSelectedFeeling } from "../modal-selected-feeling/modal-selected-feeling.component";
import { CardSelectFeeling } from "../card-select-feeling/card-select-feeling.component";
import { TextFeeling } from "../../../../global/components/texts/text-feeling/text-feeling.component";
import { SwitchCreatePost } from "../switch-create-post/switch-create-post.component";

import {
  Container,
  ButtonFeeling,
  ContainerFeeling,
  Content
} from "./header-info-post.styles";

const HeaderInfoPost: React.FC = () => {
  const { feelingSelected } = useSelectFeeling();

  const [isModalFeeling, setIsModalFeeling] = useState(false);

  const handleModal = useCallback(() => {
    setIsModalFeeling((oldValue) => !oldValue);
  }, []);

  return (
    <Container>
      <Content>
        <ContainerFeeling>
          <ButtonIcon
            onPress={handleModal}
            icon={feelingSelected?.id ? "heart" : "heart-outline"}
          />

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

        <SwitchCreatePost />
      </Content>

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
