import { HttpClient } from "../../@types/clients/http.client";
import { useFetch } from "../../hooks/clients/use-fetch";

interface LoadCommentsService extends HttpClient.PaginateParams {
  post_id: string;
}

export async function loadCommentsService<R>({
  page,
  page_size,
  post_id
}: LoadCommentsService) {
  try {
    const { comments, total_page } =
      await useFetch<LoadCommentsServiceDTO.Response>({
        path: `/comments/${post_id}`,
        params: {
          page,
          page_size
        }
      });
    console.log({
      comments,
      total_page
    });

    return {
      data: comments as R[],
      total_page
    };
  } catch (error) {
    console.log(error);
  }
}
