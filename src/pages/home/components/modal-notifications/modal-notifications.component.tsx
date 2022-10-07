import React from "react";
import { ModalDefault } from "../../../../components/modals/modal-default/modal-default.component";
import { CardNotification } from "../card-notification/card-notification.component";

import { Container } from "./modal-notifications.styles";

type ModalNotificationsProps = {
  isVisible: boolean;
  onClose(): void;
};

const ModalNotifications: React.FC<ModalNotificationsProps> = ({
  isVisible,
  onClose,
}) => {
  return (
    <ModalDefault visible={isVisible} onClose={onClose} title="Notificacões">
      <Container>
        <CardNotification />
        <CardNotification />
        <CardNotification />
        <CardNotification />
      </Container>
    </ModalDefault>
  );
};

export { ModalNotifications };
