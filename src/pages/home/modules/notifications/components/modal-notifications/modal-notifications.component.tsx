import React, { useCallback } from "react";

import { listNotificationService } from "../../../../../../services/notifications-services/list-notifications-service";
import { ModalDefault } from "../../../../../../global/components/modals/modal-default/modal-default.component";

import { ListData } from "../../../../../../global/components/utils/list-data/list-data.component";
import { ListRenderItemInfo } from "react-native";
import { CardNotification } from "../card-notification/card-notification.component";

import { Container } from "./modal-notifications.styles";

type ModalNotificationsProps = {
  isVisible: boolean;
  onClose(): void;
};

const ModalNotifications: React.FC<ModalNotificationsProps> = ({
  isVisible,
  onClose
}) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Notification.NotificationModel>) => {
      return <CardNotification data={item} />;
    },
    []
  );

  return (
    <ModalDefault visible={isVisible} onClose={onClose} title="Notificacões">
      <Container>
        <ListData fetchData={listNotificationService} renderItem={renderItem} />
      </Container>
    </ModalDefault>
  );
};

export { ModalNotifications };
