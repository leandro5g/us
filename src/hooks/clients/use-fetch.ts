import React, { useCallback, useState } from "react";
import { ClientHttp } from "../../@types/global/clients/http/client-http";
import { httpClientGet } from "../../global/clients/http";

type SubmitProps = ClientHttp.GetParams;

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
