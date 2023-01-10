import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef
} from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider
} from "@gorhom/bottom-sheet";

import { ButtonVoid } from "../../buttons/button-void/button-void.component";
import { Title } from "../../texts/title/title.component";

import {
  Container,
  HeaderModal,
  Content,
  KeyboardAvoiding,
  IconClose,
  Group
} from "./modal-default.styles";

export type ModalHandles = {
  handleOpenModal(): void;
  handleCloseModal(): void;
};

export interface ModalDefaultProps {
  title: string;
  children: React.ReactNode;
}

const ModalDefault = forwardRef<ModalHandles, ModalDefaultProps>(
  ({ title, children }, handleRefMethods) => {
    const modalRef = useRef<BottomSheetModal>(null);

    const handleOpenModal = useCallback(() => {
      modalRef?.current?.present();
    }, []);

    const handleCloseModal = useCallback(() => {
      modalRef?.current?.close();
    }, []);

    useImperativeHandle(handleRefMethods, () => {
      return {
        handleOpenModal,
        handleCloseModal
      };
    });

    return (
      <BottomSheetModalProvider>
        <BottomSheetModal ref={modalRef} snapPoints={[300, 1000]}>
          <Group>
            <ButtonVoid onPress={handleOpenModal}>{children}</ButtonVoid>

            {/* <Container>
            <HeaderModal>
              <ButtonVoid onPress={handleCloseModal}>
                <IconClose />
              </ButtonVoid>

              <Title>{title}</Title>
            </HeaderModal>

            <KeyboardAvoiding>
              <Content>{children}</Content>
            </KeyboardAvoiding>
          </Container> */}
          </Group>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    );
  }
);

export { ModalDefault };
