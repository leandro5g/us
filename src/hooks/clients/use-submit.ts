import { HttpClient } from "../../@types/clients/http.client";
import { httpClientPost } from "../../global/clients/http";

type UseSubmitProps = HttpClient.PostParams;

export async function useSubmit<T>({
  body,
  path,
  options
}: UseSubmitProps): Promise<T | undefined> {
  const response = await httpClientPost<T>({
    path,
    options,
    body
  });

  return response;
}
