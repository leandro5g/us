declare namespace Notification {
  type NotificationModel = {
    content: string;
    created_at: string;
    id: string;
    author: {
      avatar: string;
      name: string;
      id: string;
    };
  };
}
