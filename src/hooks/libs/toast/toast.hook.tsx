import React, { useCallback } from "react";
import { useToast } from "react-native-toast-notifications";
import { useTheme } from "styled-components";

type ShowTostProps = {
  message: string;
  duration?: number;
  type: "normal" | "success" | "warning" | "danger";
};

function useToastNotification() {
  const toast = useToast();
  const { COLORS } = useTheme();

  const showToast = useCallback(
    ({ message, duration = 3000, type }: ShowTostProps) => {
      toast?.hideAll();

      toast.show(message, {
        placement: "top",
        duration,
        animationType: "slide-in",
        type,
        dangerColor: COLORS.ALERT
      });

      
    },
    [toast]
  );

  return { showToast };
}

export { useToastNotification };
