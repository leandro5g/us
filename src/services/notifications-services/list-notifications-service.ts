import { HttpClient } from "../../@types/clients/http.client";
import { useFetch } from "../../hooks/clients/use-fetch";

export async function listNotificationService<T>({
  page,
  page_size = 12
}: HttpClient.PaginateParams): Promise<HttpClient.PaginateResponse<T>> {
  const { notifications, total_page } =
    await useFetch<ListNotificationsService.ListNotificationRespose>({
      path: "/notifications",
      params: {
        page,
        page_size
      }
    });

  return {
    data: notifications as T[],
    total_page
  };
}
