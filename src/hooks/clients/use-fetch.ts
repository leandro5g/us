import React, { useCallback, useState } from "react";
import { HttpClient } from "../../@types/clients/http/http.client";
import { httpClientPost } from "../../clients/http";

type SubmitProps = {
  data: HttpClient.PostParams;
};

export function useFetch<T>() {
  const [isLoading, setIsLoading] = useState(true);

  const handleFetch = useCallback(
    async ({ data }: SubmitProps) => {
      try {
        const response = await httpClientPost<T>({
          path: data?.path,
          body: data?.body,
          options: data?.options
        });

        return response;
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    [httpClientPost]
  );

  return {
    isLoading,
    handleFetch
  };
}
