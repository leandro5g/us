import React, { useCallback, useState } from "react";
import { HttpClient } from "../../@types/clients/http.client";
import { httpClientGet } from "../../global/clients/http";

type SubmitProps = HttpClient.GetParams;

export function useFetch<T>() {
  const [isLoading, setIsLoading] = useState(true);

  const handleFetch = useCallback(
    async ({ path, options, params }: SubmitProps) => {
      try {
        const response = await httpClientGet<T>({
          path,
          options,
          params
        });
        return response;
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    [httpClientGet]
  );

  return {
    isLoading,
    handleFetch
  };
}
