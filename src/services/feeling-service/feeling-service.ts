import React, { useCallback, useState } from "react";

import { useFetch } from "../../hooks/clients/use-fetch";
import { useToastNotification } from "../../hooks/libs/toast/toast.hook";

export function useFeeling() {
  const { handleFetch, isLoading } = useFetch<Feeling.FeelingModel[]>();
  const { showToast } = useToastNotification();

  const [feelings, setFeelings] = useState<Feeling.FeelingModel[]>([]);

  const loadFeelings = useCallback(async () => {
    try {
      const response = await handleFetch({
        path: "/feelings"
      });

      setFeelings(response);
    } catch (error) {
      showToast({
        message: "Ocorreu um erro ao listar os sentimentos",
        type: "danger"
      });
    }
  }, [handleFetch]);

  return { isLoading, loadFeelings, feelings };
}
