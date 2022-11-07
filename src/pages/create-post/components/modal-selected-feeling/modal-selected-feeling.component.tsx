import React, { useCallback, useEffect } from "react";
import { useFeeling } from "../../../../services/feeling-service/feeling-service";

import { CardFeeling } from "../../../../components/cards/card-feeling/card-feeling.component";
import { ModalDefault } from "../../../../components/modals/modal-default/modal-default.component";
import { Scroll } from "../../../../components/utils/scroll/scroll.component";

import { Container, Content } from "./modal-selected-feeling.styles";
import { Loading } from "../../../../components/utils/loading/loading.component";
import { useSelectFeeling } from "../../../../hooks/contexts/app/create-post/useSelectFeeling";

type ModalSelectedFeelingProps = {
  isVisible: boolean;
  onClose(): void;
};

const ModalSelectedFeeling: React.FC<ModalSelectedFeelingProps> = ({
  isVisible,
  onClose
}) => {
  const { handleSelectedFeeling } = useSelectFeeling();
  const { isLoading, loadFeelings, feelings } = useFeeling();

  useEffect(() => {
    loadFeelings();
  }, []);

  const onPressCardFeeling = useCallback(
    (feeling: Feeling.FeelingModel) => {
      handleSelectedFeeling(feeling);
      onClose();
    },
    [onClose]
  );

  return (
    <ModalDefault
      title="O que você está sentindo?"
      visible={isVisible}
      onClose={onClose}
    >
      <Container>
        <Content>
          <Scroll>
            {isLoading && <Loading isLoading={isLoading} />}

            {!isLoading && (
              <>
                {feelings?.map((feeling) => (
                  <CardFeeling
                    onPress={onPressCardFeeling}
                    key={feeling.id}
                    data={feeling}
                  />
                ))}
              </>
            )}
          </Scroll>
        </Content>
      </Container>
    </ModalDefault>
  );
};

export { ModalSelectedFeeling };
