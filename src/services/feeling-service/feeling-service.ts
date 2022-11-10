import React, { useCallback, useState } from "react";

import { useFetch } from "../../hooks/clients/use-fetch";
import { useToastNotification } from "../../hooks/libs/toast/toast.hook";

export function feelingService() {
  const { showToast } = useToastNotification();

  const [feelings, setFeelings] = useState<Feeling.FeelingModel[]>([]);
  const [isLoadingFeeling, setIsLoadingFeeling] = useState(true);

  const loadFeelings = useCallback(async () => {
    try {
      setIsLoadingFeeling(false);

      const response = await useFetch<Feeling.FeelingModel[]>({
        path: "/feelings"
      });

      setFeelings(response);
    } catch (error) {
      showToast({
        message: "Ocorreu um erro ao listar os sentimentos",
        type: "danger"
      });
    } finally {
      setIsLoadingFeeling(false);
    }
  }, []);

  return { loadFeelings, feelings, isLoadingFeeling };
}
