import React, { useCallback, useRef } from "react";

import { listNotificationService } from "../../../../../../services/notifications-services/list-notifications-service";
import {
  ModalDefault,
  ModalHandles
} from "../../../../../../global/components/modals/modal-default/modal-default.component";

import { ListData } from "../../../../../../global/components/utils/list-data/list-data.component";
import { ListRenderItemInfo } from "react-native";
import { CardNotification } from "../card-notification/card-notification.component";
import { ButtonVoid } from "../../../../../../global/components/buttons/button-void/button-void.component";

import {
  Container,
  ContentModal,
  IconNotification
} from "./modal-notifications.styles";

const ModalNotifications: React.FC = () => {
  const refModalNotifications = useRef<ModalHandles>(null);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Notification.NotificationModel>) => {
      return <CardNotification data={item} />;
    },
    []
  );

  const handleOpenModal = useCallback(() => {
    refModalNotifications?.current?.handleOpenModal();
  }, []);

  return (
    <Container>
      <ButtonVoid onPress={handleOpenModal}>
        <IconNotification />
      </ButtonVoid>

      <ModalDefault ref={refModalNotifications} title="Notificacões">
        <ContentModal>
          <ListData
            fetchData={listNotificationService}
            renderItem={renderItem}
          />
        </ContentModal>
      </ModalDefault>
    </Container>
  );
};

export { ModalNotifications };
