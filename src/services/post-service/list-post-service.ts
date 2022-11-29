import { HttpClient } from "../../@types/clients/http.client";
import { useFetch } from "../../hooks/clients/use-fetch";

export async function lisPostService<T>({
  page,
  page_size = 12
}: HttpClient.PaginateParams): Promise<HttpClient.PaginateResponse<T>> {
  try {
    const { posts, total_page } =
      await useFetch<ListPostService.ListPostResponse>({
        path: "/posts",
        params: {
          page,
          page_size
        }
      });

    return {
      data: posts as T[],
      total_page
    };
  } catch (error) {
    console.log(error);
  }
}
