import React, { useCallback, useState } from "react";
import { HttpClient } from "../../@types/clients/http/http.client";
import { httpClientPost } from "../../clients/http";

type FetchProps = HttpClient.PostParams;

export function useSubmit<T>() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(
    async ({ path, options, body }: FetchProps) => {
      try {
        setIsLoading(true);

        const response = await httpClientPost<T>({
          path,
          options,
          body
        });

        return response;
      } finally {
        setIsLoading(false);
      }
    },
    [httpClientPost]
  );

  return {
    isLoading,
    onSubmit
  };
}
