import { useState } from "react";
import { HttpClient } from "../../@types/clients/http.client";
import { httpClientPost } from "../../global/libs/clients/http";
import { MESSAGES_ERROR } from "../../global/utils/messages-error.utils";
import { useToastNotification } from "../libs/toast/toast.hook";

type OnSubmitProps = {
  path: string;
  body: Object;
  message_error?: string;
};

export function useSubmit() {
  const [isLoadSubmit, setIsLoadSubmit] = useState(false);
  const { showToast } = useToastNotification();

  async function onSubmit<R = unknown>({
    body,
    path,
    message_error
  }: OnSubmitProps): Promise<R> {
    try {
      setIsLoadSubmit(true);

      const response = await httpClientPost<R>({
        body,
        path
      });

      return response;
    } catch (error) {
      console.log(error);

      const errorResponse = error as ExternalModules.Axios.AxiosError;
      let responseError = errorResponse?.response
        ?.data as HttpClient.ResponseErrorHTTP;

      showToast({
        message: MESSAGES_ERROR[responseError?.code_error] || message_error,
        type: "danger"
      });
    } finally {
      setIsLoadSubmit(false);
    }
  }

  return { onSubmit, isLoadSubmit };
}
