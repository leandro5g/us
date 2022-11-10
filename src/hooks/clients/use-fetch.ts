import { HttpClient } from "../../@types/clients/http.client";
import { httpClientGet } from "../../global/clients/http";

type SubmitProps = HttpClient.GetParams;

export async function useFetch<T>({ path, options, params }: SubmitProps) {
  const response = await httpClientGet<T>({
    path,
    options,
    params
  });
  return response;
}
