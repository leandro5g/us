declare namespace ListNotificationsService {
  type ListNotificationRespose = {
    notifications: Notification.NotificationModel[];
    total_page: number;
  };
}
