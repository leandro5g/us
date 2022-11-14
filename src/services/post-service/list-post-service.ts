import { useCallback } from "react";
import { useFetch } from "../../hooks/clients/use-fetch";

type GetPostParams = {
  page?: number;
  page_size?: number;
};

export function lisPostService() {
  const getPost = useCallback(
    async ({
      page = 0,
      page_size = 12
    }: GetPostParams): Promise<ListPostService.ListPostResponse> => {
      try {
        const response = await useFetch<ListPostService.ListPostResponse>({
          path: "/posts",
          params: {
            page,
            page_size
          }
        });

        return response;
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  return { getPost };
}
